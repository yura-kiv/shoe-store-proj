import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import Layout from './Layout';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectIsAuthState } from '../toolkitRedux/userAuthSlice';

const AppRouter = () => {
  const location = useLocation();
  const isAuth = useSelector(selectIsAuthState);

  return (
    <Routes>
      <Route
        path='/'
        element={<Layout />}
      >
        {!isAuth
          ? publicRoutes.map((route, index) => (
              <Route
                key={route.path + index}
                {...route}
              />
            ))
          : privateRoutes.map((route, index) => (
              <Route
                key={route.path + index}
                {...route}
              />
            ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;
