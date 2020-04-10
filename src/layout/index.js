import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import routeConfig from '../routes'
import BreadCrumb from '../component/BreadCrumb'
import logo from '../logo.svg'
import './index.css'
import { GetCookie } from '../utils/cookie'
const { Header, Sider, Content } = Layout
const { SubMenu } = Menu
class LayoutContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collasped: true,
    }
  }
  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        <Sider trigger={null} collapsed={this.state.collapsed}>
          <div>
            <img height="64px" src={logo} alt="" />
          </div>
          <Menu theme={'dark'} mode="inline">
            {routeConfig.map((ele, index) => {
              if (ele.children && !ele.hidden) {
                return (
                  <SubMenu key={ele.path} title={<span> {ele.title} </span>}>
                    {ele.children.map((child, ind) => {
                      if (child.hidden) {
                        return null
                      } else {
                        return (
                          <Menu.Item key={ele.path + ind}>
                            <Link to={child.path}>{child.title}</Link>
                          </Menu.Item>
                        )
                      }
                    })}
                  </SubMenu>
                )
              } else {
                return null
              }
            })}
          </Menu>
        </Sider>
        <Layout>
          <Header>
            <div className="nav">用户名: {GetCookie('username')}</div>
          </Header>
          <Content>
            <BreadCrumb {...this.props}> </BreadCrumb>
            <Switch>
              {this.props.route.children.map((ele, index) => {
                return (
                  <Route
                    key={index}
                    component={ele.Component}
                    path={ele.path}
                  ></Route>
                )
              })}
              {/* <Redirect
                to={{ pathname: this.props.route.children[0].path }}
              ></Redirect> */}
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
export default LayoutContent
