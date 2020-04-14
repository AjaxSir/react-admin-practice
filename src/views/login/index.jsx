import React from 'react'
import { Form, Input, Button } from 'antd'
import './login.css'
import logo from '../../logo.svg'
import { SetCookie } from '../../utils/cookie'
import { connect } from 'react-redux'
import { setUserInfo } from '../../redux/action'
import store from '../../redux/store'
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      pwd: '',
    }
  }
  Change = (type, e) => {
    const val = e.target.value
    switch (type) {
      case 'username':
        this.setState({ username: val })
        break
      case 'pwd':
        this.setState({ pwd: val })
        break
      default:
        break
    }
  }
  // componentWillMount() {
  //   if (GetCookie('username')) {
  //     this.props.history.push('/dash/home')
  //   }
  // }
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
      if (this.state.username === 'xiaolong.su' && this.state.pwd === '123') {
        SetCookie('username', this.state.username)
        this.props.history.push('/dash/home')
        store.dispatch(
          setUserInfo({
            name: this.state.username,
            age: 25,
            gender: 'Male',
            auth: true,
          })
        )
      }
    }
    return (
      <div className="bg">
        <div className="content">
          <img src={logo} width="60px" alt="" />
          <Form className="form" onFinish={finish} {...layout}>
            <Form.Item
              rules={[{ required: true, message: '填写用户名' }]}
              name="username"
              label="用户名:"
            >
              <Input
                onChange={(e) => {
                  this.Change('username', e)
                }}
                value={this.state.username}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '填写密码' }]}
              label="密码:"
            >
              <Input
                onChange={(e) => {
                  this.Change('pwd', e)
                }}
                value={this.state.pwd}
              />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}
const mapStateToProps = function (store) {
  return store
}
export default connect(mapStateToProps)(Login)
