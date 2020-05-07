import React from 'react'
import SvgIcon from '../component/svg/index'
import { GetCookie, removeCookie } from '../utils/cookie'
import { Dropdown, Menu } from 'antd'
import store from '../redux/store'
import { removeUserInfo } from '../redux/action'
import { DownOutlined } from '@ant-design/icons'
import './index.scss'
import { withRouter } from 'react-router-dom'
const { Item, Divider } = Menu

const Header = (props) => {
  console.log(props.pwd, '父传子密码') // 当props变化 Header重新渲染 故changePwd时 上句也会打印
  const changePwd = () => {
    props.parentPwdChange('123456')
  }
  const Logout = () => {
    store.dispatch(
      removeUserInfo({
        name: '',
        age: '',
        gender: '',
        auth: false,
      })
    )
    removeCookie('username')
    props.history.push('/login')
  }
  const menu = () => {
    return (
      <Menu>
        <Item key="0">
          <span onClick={changePwd}>修改密码</span>
        </Item>
        <Divider></Divider>
        <Item key="1">
          <span onClick={Logout}>退出登录</span>
        </Item>
      </Menu>
    )
  }
  return (
    <div className="nav">
      <SvgIcon fill={'gray'} iconClass={'qq'}></SvgIcon>
      {GetCookie('username')}
      <Dropdown overlay={menu} trigger={['click']}>
        <span style={{ marginLeft: '5px', cursor: 'pointer' }}>
          <DownOutlined></DownOutlined>
        </span>
      </Dropdown>
    </div>
  )
}
export default withRouter(Header)
