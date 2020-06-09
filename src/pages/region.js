import React from 'react';
import { Layout, Typography } from 'antd';
import { useApi } from '../utils/useApi';
import { Link, useParams } from 'react-router-dom';
import Loader from '../components/loader';
import RegionTable from '../components/regionTable';

export default function Region() {
  const [data, isLoading] = useApi();
  const { id } = useParams();
  const { Title } = Typography;
  const currentRegion = data && data.find(region => region.order === parseInt(id));
  return (
    <Layout>
      <Link to="/">Go Back</Link>
      <div>{isLoading && (<Loader />)}</div>
      {currentRegion && (
        <div>
          <Title>{currentRegion.fullname}</Title>
          <RegionTable dataSource={[currentRegion]} />
        </div>
      )}
    </Layout>
  );
}
