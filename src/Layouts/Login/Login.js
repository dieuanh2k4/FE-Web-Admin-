import { useState } from 'react';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { login } from '~/Services/loginService';

const cx = classNames.bind(styles);

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleButton = async () => {
    console.log(username + ' ' + password);

    setLoading(true);

    const result = await login(username, password);

    const token = result;

    setUsername('');
    setPassword('');

    setLoading(false);
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
          Đăng nhập
        </button>
      </div>
    </div>
  );
}

export default Login;
