import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ruRU from 'antd/lib/locale-provider/ru_RU';
import Main from './pages/main';
import Region from './pages/region';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

ReactDOM.render(
  <ConfigProvider locale={ruRU}>
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/region/:id" component={Region} />
      </Switch>
    </Router>
  </ConfigProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
