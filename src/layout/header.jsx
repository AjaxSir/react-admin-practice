import React from 'react'
import SvgIcon from '../component/svg/index'
import { GetCookie } from '../utils/cookie'
import { Dropdown, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import './index.scss'
const { Item, Divider } = Menu

const Header = (props) => {
  console.log(props.pwd, '父传子密码') // 当props变化 Header重新渲染 故changePwd时 上句也会打印
  const changePwd = () => {
    console.log('修改密码')
    props.parentPwdChange('123456')
  }
  const menu = () => {
    return (
      <Menu>
        <Item key="0">
          <span onClick={changePwd}>修改密码</span>
        </Item>
        <Divider></Divider>
        <Item key="1">
          <span>退出登录</span>
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
export default Header
