import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
      </Switch>
    </App>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
