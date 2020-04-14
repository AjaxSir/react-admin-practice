import React from 'react'
import { Breadcrumb } from 'antd'
import list from './config'
const { Item } = Breadcrumb
export default class BreadCrumb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const routes = this.props.location.pathname
    const nameArr = routes.split('/').filter((i) => i)
    return (
      <Breadcrumb style={{ float: 'left', width: '300px', marginTop: '20px' }}>
        <Item key={'welcome'} href={'/welcome'}>
          欢迎页面
        </Item>
        {nameArr.map((ele, index) => {
          let url = `/${nameArr.slice(0, index + 1).join('/')}`
          return (
            <Item key={'route' + index} href={url}>
              {list[url]}
            </Item>
          )
        })}
      </Breadcrumb>
    )
  }
}
