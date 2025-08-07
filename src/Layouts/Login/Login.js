import { useState } from 'react';
import classNames from 'classnames/bind';
import { ClipLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

import styles from './Login.module.scss';
import { login } from '~/Services/loginService';

const cx = classNames.bind(styles);

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleButton = async () => {
    console.log(username + ' ' + password);

    setLoading(true);

    try {
      const result = await login(username, password);

      if (result.response && result.response.status === 400) {
        window.alert(result.response.data.message + '. Vui lòng đăng nhập lại');
        setLoading(false);
        return;
      }

      // console.log('result: ' + result);

      const token = result.token;
      // lưu token vào localStorage
      localStorage.setItem('token', token);

      console.log('token: ' + token);

      setIsAuthenticated(true);
      console.log('Navigate tới /home');
      navigate('/home');

      setUsername('');
      setPassword('');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        <h1 className={cx('title')}>Manege</h1>
        <h3 className={cx('login')}>Đăng nhập</h3>

        <div className={cx('account')}>
          <label className={cx('label')}>Tài khoản</label>
          <input
            className={cx('input')}
            value={username}
            type="text"
            placeholder="Nhập tài khoản"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className={cx('account')}>
          <label className={cx('label')}>Mật khẩu</label>
          <input
            className={cx('input')}
            value={password}
            type="password"
            placeholder="Nhập mật khẩu"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className={cx('btn')} onClick={handleButton}>
          {loading ? (
            <div style={{ textAlign: 'center' }}>
              <ClipLoader color="#3498db" size={25} />
            </div>
          ) : (
            'Đăng nhập'
          )}
        </button>
      </div>
    </div>
  );
}

export default Login;
