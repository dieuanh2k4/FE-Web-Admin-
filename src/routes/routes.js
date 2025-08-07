import Config from '../config';

import Login from '../Layouts/Login/Login';
import Home from '../Layouts/Home/Home';
import DefaultLayout from '../Layouts/DefaultLayout';

const publicRoutes = [{ path: Config.routes.login, component: Login, layout: null }];

const privateRoutes = [{ path: Config.routes.home, component: Home, layout: DefaultLayout }];

export { publicRoutes, privateRoutes };
