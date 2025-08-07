import { Navigate } from 'react-router-dom';

function PrivateRoute({ children, isAuthenticated }) {
  // const isAuthenticated = !!localStorage.getItem('token');
  return !isAuthenticated ? children : <Navigate to="/" replace />;
}

export default PrivateRoute;
