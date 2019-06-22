import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'tabler-react/dist/Tabler.css';
import './components/css/style.css';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Jasa from './pages/jasa/Jasa';
import FormTambahJasa from './pages/jasa/FormTambahJasa';
import FormEditJasa from './pages/jasa/FormEditJasa';
import Pelanggan from './pages/pelanggan/Pelanggan';
import Tukang from './pages/tukang/Tukang';

import { ProtectedRoute, PublicRoute } from './components/routes';

import store from './store/store';

function AppRouter() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <PublicRoute exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Dashboard} />
          <ProtectedRoute exact path="/jasa" component={Jasa} />
          <ProtectedRoute exact path="/jasa/tambah" component={FormTambahJasa} />
          <ProtectedRoute exact path="/jasa/edit/:id" component={FormEditJasa} />
          <ProtectedRoute exact path="/pelanggan" component={Pelanggan} />
          <ProtectedRoute exact path="/tukang" component={Tukang} />
          <Route path="" component={NotFound} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default AppRouter;
