import React, { Component } from 'react'
import { Table } from 'antd'
// import Loadable from 'react-loadable'
// import Loading from 'components/Loading'

const data = [
  {
    id: '1',
    name: 'user a',
  },
  {
    id: '2',
    name: 'user b',
  },
]

const columns = [
  {
    name: '姓名',
    dataIndex: 'name',
  },
]

export default class Users extends Component {
  render() {
    return (
      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        rowKey="id"
      />
    )
  }
}
