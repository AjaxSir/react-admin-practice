import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import routeConfig from '../routes'
import BreadCrumb from '../component/BreadCrumb'
import NavHeader from './header.jsx'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import logo from '../logo.svg'
import './index.scss'

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
                  <SubMenu
                    key={ele.path + index}
                    title={<span> {ele.title} </span>}
                  >
                    {ele.children.map((child, ind) => {
                      if (child.hidden) {
                        return null
                      } else {
                        return (
                          <Menu.Item key={child.path + ind}>
                            <Link key={child.path + ind} to={child.path}>
                              {child.title}
                            </Link>
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
            <BreadCrumb {...this.props}> </BreadCrumb>
            <NavHeader></NavHeader>
          </Header>
          <Content style={{ position: 'relative' }}>
            <TransitionGroup>
              <CSSTransition
                key={this.props.location.pathname}
                timeout={800}
                classNames="fade"
              >
                <Switch location={this.props.location}>
                  {/* location设置作用为防止节点多次被挂载 */}
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
              </CSSTransition>
            </TransitionGroup>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
export default LayoutContent
