import styles from './Bar.module.scss';

import Config from '../../../config';
import classNames from 'classnames/bind';
import Button from '../../../Component/Button/Button';

const cx = classNames.bind(styles);

function Bar() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('bar')}>
        <Button to={Config.routes.home}>Home</Button>
        <Button to={Config.routes.students}>Student</Button>
        <Button to={Config.routes.objects}>Object</Button>
      </div>
    </div>
  );
}

export default Bar;
