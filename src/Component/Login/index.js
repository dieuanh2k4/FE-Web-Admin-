import styles from './Login.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Login() {
  return (
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        <h1 className={cx('title')}>Manege</h1>
        <h3 className={cx('login')}>Đăng nhập</h3>

        <div className={cx('account')}>
          <label className={cx('label')}>Tài khoản</label>
          <input className={cx('input')} type="text" name="account" placeholder="Nhập tài khoản" />
        </div>

        <div className={cx('account')}>
          <label className={cx('label')}>Mật khẩu</label>
          <input className={cx('input')} type="password" name="password" placeholder="Nhập mật khẩu" />
        </div>

        {/* <div> */}
        <button className={cx('btn')}>Đăng nhập</button>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Login;
