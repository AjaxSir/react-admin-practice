import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { connect } from 'react-redux'
class authSystem extends React.Component {
  componentDidMount() {
    console.log('权限设置')
    const { user } = this.props
    console.log(user)
  }
  toUser = () => {
    this.props.history.push({
      pathname: '/dash/system/user',
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
const mapStatusToProps = function (store) {
  return store
}
export default connect(mapStatusToProps)(authSystem)
