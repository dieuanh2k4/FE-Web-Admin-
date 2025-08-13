import Config from '../config';

import Login from '../Layouts/Login/Login';
import Home from '../Layouts/Home/Home';
import DefaultLayout from '../Layouts/DefaultLayout';
import Student from '../Layouts/Components/Student';
import Object from '../Layouts/Components/Object';

const publicRoutes = [{ path: Config.routes.login, component: Login, layout: null }];

const privateRoutes = [
  { path: Config.routes.home, component: Home, layout: DefaultLayout },
  { path: Config.routes.students, component: Student, layout: DefaultLayout },
  { path: Config.routes.objects, component: Object, layout: DefaultLayout },
];

export { publicRoutes, privateRoutes };
