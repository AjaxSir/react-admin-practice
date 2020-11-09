import React from 'react'
import { Form, Input, Button } from 'antd'
import './login.scss'
import SvgIcon from '@/component/svg/index'
import logo from '@/static/img/logo192.png'
import { SetCookie, GetCookie } from '@/utils/cookie'
import { connect } from 'react-redux'
import { setUserInfo } from '@/redux/action'
import store from '@/redux/store'
import { login } from '@/api/user.js'
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    store.subscribe(this.showState)
  }
  Change = (type, e) => {
    const val = e.target.value
    switch (type) {
      case 'username':
        this.setState({ username: val })
        break
      case 'pwd':
        this.setState({ password: val })
        break
      default:
        break
    }
  }
  showState = () => {
    console.log(store.getState(), 'state value')
  }
  componentWillMount() {
    if (GetCookie('username')) {
      this.props.history.push('/dash/home')
    }
  }
  render() {
    const layout = {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 16,
      },
    }
    const finish = () => {
      login(this.state).then(res => {
        SetCookie('username', this.state.username)
        this.props.history.push('/dash/welcome')
        store.dispatch(
          setUserInfo({
            name: this.state.username,
            age: 25,
            gender: 'Male',
            auth: true,
          })
        )
      })
    }
    return (
      <div className="bg">
        <div className="content abs-center">
          <div className="half-content">
            <img src={logo} alt=""/>
            <h1>
              欢迎使用
            </h1>
            <h2>
              红外热成像体温筛查系统
            </h2>
          </div>
          <div  className="half-content">
          <h1 className="loginTitle">账号登录</h1>
          <Form className="form" onFinish={finish} {...layout}>
            <Form.Item
              name="username"
            >
              <Input size="large"
              className="loginInput"
              onChange={(e) => {
                this.Change('username', e)
              }}
              value={ this.state.username }
              prefix={<SvgIcon iconClass={'user'} />} 
              placeholder="输入用户名"  />
            </Form.Item>
            <Form.Item
              name="password"
            >
              <Input
                prefix={<SvgIcon iconClass={'lock'} />}
                onChange={(e) => {
                  this.Change('pwd', e)
                }}
                size="large"
                type="password"
                className="loginInput"
                placeholder="请输入密码"
                value={this.state.password}
              />
            </Form.Item>
            <div className="ask">
              <SvgIcon iconClass={'ask'} />忘记密码
            </div>
            <Button className="loginBtn" type="primary" htmlType="submit">
              提交
            </Button>
          </Form>
          </div>
          
        </div>
      </div>
    )
  }
}
const mapStateToProps = function (store) {
  return store
}
export default connect(mapStateToProps)(Login)
