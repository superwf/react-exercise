import React, { Component } from 'react'
import { Table } from 'antd'

const data = [
  {
    id: '1',
    name: 'role a',
  },
  {
    id: '2',
    name: 'role b',
  },
]

const columns = [
  {
    name: '姓名',
    key: 'name',
    dataIndex: 'name',
  },
]

export default class Roles extends Component {
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
