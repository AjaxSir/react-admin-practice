import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import routeConfig from '../routes'
import BreadCrumb from '../component/BreadCrumb'
import NavHeader from './header.jsx'
import { connect } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import logo from '../logo.svg'
import './index.scss'
import { GetCookie } from '../utils/cookie'

const { Header, Sider, Content } = Layout
const { SubMenu } = Menu
class LayoutContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collasped: true,
      pwd: '12345678',
      url: '',
    }
  }
  parentPwdChange = (pwd) => {
    this.setState(
      () => {
        return {
          pwd,
        }
      },
      () => {
        // setState异步 这里是同步打印最新值
        console.log(this.state.pwd, 'newPwd')
      }
    )
    console.log(this.state.pwd, 'oldPwd')
  }
  toPage = (item) => {
    console.log(item.key, '路径')
    this.props.history.push(item.key)
    this.setState({
      url: this.props.location.pathname,
    })
  }
  componentWillMount() {
    const {
      history: { replace },
    } = this.props
    console.log(this.props, 'props')
    if (!GetCookie('username')) replace('/login')
  }
  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        <Sider trigger={null} collapsed={this.state.collapsed}>
          <div>
            <img height="64px" src={logo} alt="" />
          </div>
          <Menu onClick={this.toPage} theme={'dark'} mode="inline">
            {routeConfig.map((elePa) => {
              if (elePa.children) {
                return elePa.children.map((ele, index) => {
                  if (!ele.hidden) {
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
                              <Menu.Item key={child.path}>
                                <span>{child.title}</span>
                              </Menu.Item>
                            )
                          }
                        })}
                      </SubMenu>
                    )
                  } else {
                    return null
                  }
                })
              } else {
                return null
              }
            })}
          </Menu>
        </Sider>
        <Layout>
          <Header>
            <BreadCrumb {...this.props}> </BreadCrumb>
            <NavHeader
              parentPwdChange={this.parentPwdChange}
              pwd={this.state.pwd}
            ></NavHeader>
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
                  {this.props.route.children.map((elePa) => {
                    return elePa.children.map((ele, index) => {
                      return (
                        <Route
                          key={index + ele.path}
                          component={ele.Component}
                          path={ele.path}
                        ></Route>
                      )
                    })
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
const mapStatusToProps = function (store) {
  return store
}
export default connect(mapStatusToProps)(LayoutContent)
