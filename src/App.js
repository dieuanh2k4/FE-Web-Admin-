import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';

import { privateRoutes, publicRoutes } from './routes';
import PrivateRoute from './Component/PrivateRoute';
import DefaultLayout from './Layouts/DefaultLayout';
import { useState } from 'react';
// import Login from './Layouts/Login/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page setIsAuthenticated={setIsAuthenticated} />
                  </Layout>
                }
              />
            );
          })}

          {privateRoutes.map((route, index) => {
            const Page = route.component;

            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <PrivateRoute>
                      <Page isAuthenticated={isAuthenticated} />
                    </PrivateRoute>
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
