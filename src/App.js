import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRoutes } from './routes';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import DefaultLayout from './Layouts/DefaultLayout';

function App() {
  // return (
  <Router>
    <Routes>
      {privateRoutes.map((route, index) => {
        const Page = route.component;

        let Layout = DefaultLayout;

        return (
          <Route
            key={index}
            path={route.path}
            element={
              <PrivateRoute>
                <Layout>
                  <Page />
                </Layout>
              </PrivateRoute>
            }
          />
        );
      })}
    </Routes>
  </Router>;
  // );
}

export default App;
