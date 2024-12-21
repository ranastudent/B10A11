import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {
      const location = useLocation()
      const {user, loading} = useContext(AuthContext)
      if (loading) {
            return<Loading></Loading>
      }
      if (user && user.email) {
            return children
      }
      return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;