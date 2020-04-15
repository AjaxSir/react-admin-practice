import React from 'react'
import { Form, Input, Button, Radio, Select, Upload } from 'antd'
import imgUrl from '../../static/img/logo192.png'
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
const upLoadProps = {
  name: 'pic',
  beforeUpload: (file) => {
    console.log(file)
    return false
  },
  onChange: (file) => {
    console.log(file)
  },
  showUploadList: false,
  style: {
    width: '120px',
    height: '120px',
  },
  className: 'avatar-uploader',
  listType: 'picture-card',
}
export default class userSystem extends React.Component {
  state = {
    lang: '中文',
    value: 'default',
  }
  componentDidMount() {
    console.log(this.props.history)
  }
  logoChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }
  render() {
    return (
      <div className="main-content">
        <Form {...Layout}>
          <Item label="商户名称:">
            <Input />
          </Item>
          <Item label="系统logo:">
            <Radio.Group onChange={this.logoChange} value={this.state.value}>
              <Radio value="default">默认</Radio>
              <Radio value="diy">自定义</Radio>
            </Radio.Group>
          </Item>
          <Item {...ItemLayout}>
            {this.state.value === 'default' ? (
              <img src={imgUrl} alt="" />
            ) : (
              <Upload {...upLoadProps}>上传</Upload>
            )}
          </Item>
          <Item label="国家或地区">
            <Select defaultValue="china">
              <Option value="china">中国</Option>
              <Option value="japan">日本</Option>
              <Option value="usa">美国</Option>
            </Select>
          </Item>
          <Item label="系统语言">
            <span>{this.state.lang}</span>
          </Item>
          <Item {...ItemLayout}>
            <Button type="primary">提交</Button>
          </Item>
        </Form>
      </div>
    )
  }
}
