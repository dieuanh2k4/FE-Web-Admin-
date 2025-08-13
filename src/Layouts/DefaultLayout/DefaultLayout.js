import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Header from '../Components/Header';
import Bar from '../Components/Bar/Bar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Header />
      </div>

      <div className={cx('bar')}>
        <p className={cx('bar-title')}>Quản lý sinh viên</p>
        <div className={cx('bar-menu')}>
          <Bar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
