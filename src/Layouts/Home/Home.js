import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Header from '../Components/Header';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default Home;
