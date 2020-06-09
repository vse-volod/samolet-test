import React from 'react';
import { Layout } from 'antd';
import { useApi } from '../utils/useApi';
import Loader from '../components/loader';
import MainTable from '../components/mainTable';

export default function Main() {
  const [data, isLoading] = useApi();
  return (
    <Layout>
      <div>{isLoading && (<Loader />)}</div>
      {data && <MainTable dataSource={data.map(x => ({ key: x.order, ...x }))} />}
    </Layout>
  );
}
