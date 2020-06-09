import React from 'react';
import { Spin } from 'antd';
import '../styles/loader.css';

const Loader = () => (
  <div className="loader-container">
    <Spin />
  </div>
);

export default Loader;
