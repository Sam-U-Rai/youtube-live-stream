import React from 'react';
import { privateRoutes, publicRoutes } from '.';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from '../components/page/index';

const Router: React.FC = () => {
  const isAuth = false;

  const RoutesLink = isAuth ? privateRoutes : publicRoutes;

  return (
    <BrowserRouter>
      <Routes>
        {RoutesLink.map((route) => {
          const ComponentL = route.component;
          return (
            <Route
              path={`${route.path}${route.child ? '/*' : ''}`}
              element={<Page title={route.titleName}><ComponentL /></Page>}
              key={route.path}
            />
          );
        }
        )}
        {
          !isAuth
            ? <Route
              path="*"
              element={<Page title='Login'><div></div></Page>}
            />
            : <Route
              path="*"
              element={<Page title='Login'><div></div></Page>}
            />
        }
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
