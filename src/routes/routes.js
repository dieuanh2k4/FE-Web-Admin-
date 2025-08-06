import config from '../config';
import Home from '../Layouts/Home';
import Login from '../Layouts/Login';

const publicRoutes = [];

const privateRoutes = [
  { path: config.routes.login, component: Login },
  { path: config.routes.home, component: Home },
];

export { publicRoutes, privateRoutes };
