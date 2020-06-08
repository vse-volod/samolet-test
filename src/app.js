import React, { useEffect, useContext } from 'react';
import { Layout } from 'antd';
import './app.css';
import { getData } from "./api";
import { store } from './utils/store';
import RegionTable from './components/regionTable';

export default function App() {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  useEffect(() => {
    getData()
    .then((data) => dispatch(
      {
        type: 'SET_ITEMS',
        data: data.map(x => ({ key: x.order, ...x }))
      }
    ));
  }, []);

  console.log(globalState);

  return (
    <Layout>
      {globalState.state.length > 0 && (
        <RegionTable dataSource={globalState.state} />
      )}
    </Layout>
  );
}
