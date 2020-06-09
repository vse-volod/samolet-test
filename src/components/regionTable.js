import React from 'react';
import { Table } from 'antd';

const RegionTable = ({ dataSource }) => {
  const columns = [
    {
      title: 'Библиотек',
      dataIndex: 'libraries',
      key: 'libraries',
      sorter: (a, b) => a.libraries - b.libraries,
    },
    {
      title: 'Библиотек с компьютерами',
      dataIndex: 'libraries_computers',
      key: 'libraries_computers',
      sorter: (a, b) => a.libraries_computers - b.libraries_computers,
    },
    {
      title: 'Сотрудников',
      dataIndex: 'employees',
      key: 'employees',
      sorter: (a, b) => a.employees - b.employees,
    },
    {
      title: 'Постоянных читателей',
      dataIndex: 'users',
      key: 'users',
      sorter: (a, b) => a.users - b.users,
    },
    {
      title: 'Всего посетителей',
      dataIndex: 'visits',
      key: 'visits',
      sorter: (a, b) => a.visits - b.visits,
    },
    {
      title: 'Компьютеров',
      dataIndex: 'computers',
      key: 'computers',
      sorter: (a, b) => a.computers - b.computers,
    },
  ];
  return <Table columns={columns} dataSource={dataSource} />
}

export default RegionTable;
