import styles from './Header.module.scss';

import classNames from 'classnames/bind';
import images from '../../../assets/image';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="Logo" className={cx('logo')} />

        <div className={cx('menu')}>
          <img src={images.noImage} alt="" className={cx('menu-avatar')} />

          <div className={cx('menu-info')}>
            <p className={cx('menu-info_name')}>Name</p>
            <p className={cx('menu-info_mail')}>mail</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
