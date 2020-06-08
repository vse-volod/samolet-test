import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import ruRU from 'antd/lib/locale-provider/ru_RU';
import App from './app';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import { StateProvider } from './utils/store';


ReactDOM.render(
  <ConfigProvider locale={ruRU}>
    <BrowserRouter>
      <StateProvider>
        <App />
      </StateProvider>
    </BrowserRouter>
  </ConfigProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
