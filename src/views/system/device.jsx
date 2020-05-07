import React from 'react'
import axios from '../../utils/axios'
import { Table, Button, Avatar } from 'antd'
export default class Device extends React.Component {
  state = {
    data: [],
  }
  componentDidMount() {
    console.log('设备设置')
    axios.get('/api/news').then((res) => {
      console.log(res.data)
      this.setState({
        data: res.data,
      })
    })
    axios.get('/v2/movie/top250').then((res) => {
      console.log(res, 'movie')
    })
  }

  render() {
    const Column = [
      {
        title: '姓名',
        key: 'name',
        dataIndex: 'name',
        align: 'center',
      },
      {
        title: '生日',
        key: 'birthday',
        dataIndex: 'birthday',
        width: 240,
        align: 'center',
        ellipsis: true,
      },
      {
        title: '头像',
        key: 'img',
        dataIndex: 'img',
        render: (img) => <Avatar src={img} size="default" alt="头像" />,
        align: 'center',
      },
      {
        title: '年龄',
        key: 'age',
        dataIndex: 'age',
        align: 'center',
      },
      {
        title: '操作',
        dataIndex: '',
        key: 'x',
        width: 140,
        align: 'center',
        render: () => <Button>Edit</Button>,
      },
    ]
    return (
      <div>
        <Table
          rowKey={(item) => item.id}
          columns={Column}
          dataSource={this.state.data}
        ></Table>
      </div>
    )
  }
}