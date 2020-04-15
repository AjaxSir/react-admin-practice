import React from 'react'
import { Breadcrumb } from 'antd'
import list from './config'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
const { Item } = Breadcrumb
export default class BreadCrumb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const routes = this.props.location.pathname
    const nameArr = routes.split('/').filter((i) => i)
    console.log(nameArr)
    return (
      <Breadcrumb
        style={{
          float: 'left',
          width: '300px',
          marginTop: '20px',
          position: 'relative',
        }}
      >
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.pathname}
            timeout={800}
            classNames="fade"
          >
            <div style={{ position: 'absolute', left: '0px', top: '0px' }}>
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
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Breadcrumb>
    )
  }
}
