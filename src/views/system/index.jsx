import React from 'react'
import { Form, Input, Button, Radio, Select, Upload } from 'antd'
import defaultLogo from '../../static/img/logo192.png'
import UseStateHooks from '../hooks/useState.jsx'
import UseMemoHooks from '../hooks/useMemo.jsx'
import ReactMemo from '../hooks/reactMemo.jsx'
import UseReducer from '../hooks/useReducer.jsx'
import { unstable_trace as trace } from 'scheduler/tracing' // 性能查看
const { Item } = Form
const { Option } = Select
const Layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}
const ItemLayout = {
  wrapperCol: {
    span: 16,
    offset: 8,
  },
}

function getImgBase64(img, callback) {
  // 图片转base64
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}
const upLoadProps = {
  name: 'pic',
  beforeUpload: (file) => {
    console.log(file)
    return false
  },

  showUploadList: false,
  style: {
    width: '120px',
    height: '120px',
  },
  className: 'avatar-uploader',
  listType: 'picture-card',
}
class userSystem extends React.Component {
  state = {
    lang: '中文',
    value: 'default',
    imgUrl: '',
    phone: '13518160587',
    obj: {
      name: 'sxl',
    },
    count: 0,
  }
  componentDidMount() {}
  logoChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }
  onChange = (info) => {
    console.log(info)
    // const imgUrl = URL.createObjectURL(info.file)
    getImgBase64(info.file, (imgUrl) => {
      this.setState({
        imgUrl,
      })
    })
  }
  check = () => {
    return (
      <Item
        label="电话:"
        name="phone"
        rules={[
          {
            required: true,
            validator: this.checkPhone,
          },
        ]}
      >
        <Input />
      </Item>
    )
  }
  checkPhone = (rule, val, callback) => {
    console.log(val, '电话号码')
    var reg = /^1[0-9]{10}$/
    if (!reg.test(val)) {
      return Promise.reject('电话号码不正确')
    } else {
      return Promise.resolve()
    }
  }

  changeName() {
    console.log('修改名字', '需搜索changeName')
    // 事件
    trace('update name', performance.now(), () => {
      this.setState({
        obj: {
          name: 'update sxl',
        },
      })
    })
    // 渲染组件
    // trace("initial render", performance.now(), () => {
    //   ReactDom.render(<App />, document.getElementById("app"));
    // });
  }
  changeCount() {
    this.setState((prev) => {
      return {
        count: prev.count + 1,
      }
    })
  }
  render() {
    return (
      <div className="main-content">
        <Form {...Layout}>
          <Item
            label="商户名称:"
            name="name"
            rules={[{ required: true, message: '请填写商户名称' }]}
          >
            <Input />
          </Item>
          {this.check()}
          <Item label="系统logo:">
            <Radio.Group onChange={this.logoChange} value={this.state.value}>
              <Radio value="default"> 默认 </Radio>
              <Radio value="diy"> 自定义 </Radio>
            </Radio.Group>
          </Item>
          <Item {...ItemLayout}>
            {this.state.value === 'default' ? (
              <img src={defaultLogo} alt="" />
            ) : (
              <Upload {...upLoadProps} onChange={this.onChange}>
                {!this.state.imgUrl ? (
                  '上传'
                ) : (
                  <img src={this.state.imgUrl} alt="" />
                )}
              </Upload>
            )}
          </Item>
          <Item label="国家或地区">
            <Select defaultValue="china">
              <Option value="china"> 中国 </Option>
              <Option value="japan"> 日本 </Option>
              <Option value="usa"> 美国 </Option>
            </Select>
          </Item>
          <Item label="系统语言">
            <span> {this.state.lang} </span>
          </Item>
          <Item {...ItemLayout}>
            <Button type="primary"> 提交 </Button>
          </Item>
        </Form>
        <UseStateHooks></UseStateHooks>
        <UseMemoHooks
          name={this.state.obj.name}
          props={this.state.obj}
        ></UseMemoHooks>

        <ReactMemo {...this.state}></ReactMemo>
        <Button onClick={() => this.changeName()}>修改名字</Button>
        <Button onClick={() => this.changeCount()}>修改次数</Button>
        <br />
        <UseReducer></UseReducer>
      </div>
    )
  }
}
export default userSystem
