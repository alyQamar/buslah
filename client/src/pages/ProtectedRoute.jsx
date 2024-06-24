import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import useCheckLoggedUser from '@hooks/Auth/useCheckLoggedUser';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(null);

  const [loggedIn] = useCheckLoggedUser();

  useEffect(() => {
    setIsLogged(loggedIn);
    setLoading(false);
  }, [loggedIn]);

  if (loading) {
    return <div><p>Loading...</p></div>;
  }

  if (isLogged) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" />;
  }
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
