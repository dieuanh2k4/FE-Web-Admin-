import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ children, to, onClick, ...passProps }) {
  let Comp = 'button';

  const props = {
    onClick,
    ...passProps,
  };

  // const classes = cx('wrapper', {});

  if (to) {
    Comp = NavLink;
    props.to = to;
    props.className = ({ isActive }) => cx('wrapper', { active: isActive });
  } else {
    props.className = cx('wrapper');
  }

  return (
    <Comp {...props} to={to}>
      <span className={cx('title')}>{children}</span>
    </Comp>
  );
}

export default Button;
