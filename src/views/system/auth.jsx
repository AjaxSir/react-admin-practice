import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
export default class authSystem extends React.Component {
  componentDidMount() {
    console.log('权限设置')
  }
  toUser = () => {
    console.log('跳转')
    this.props.history.push({
      pathname: '/system/user',
      query: { name: 'ceshi1' },
    })
    // 刷新参数丢失
  }
  render() {
    return (
      <div className="main-content">
        <div>权限设置</div>
        <Link to={{ pathname: '/system/user', state: { name: 'state' } }}>
          111
          {/* 刷新参数不丢失 */}
        </Link>
        <Button onClick={() => this.toUser()}>跳转</Button>
      </div>
    )
  }
}
