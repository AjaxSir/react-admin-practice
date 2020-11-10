import React, { Component } from 'react'
import StoreSelect from '@/component/storeSelect/index.js';
import NowTime from '@/component/NowTime'

import { Row, Col } from 'antd'
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
    <Row gutter={20}>
      <Col span={4}>
        <StoreSelect />
      </Col>
      <Col span={14}>
        <p>实时动态</p>
      </Col>
      <Col style={{textAlign: "center"}} span={6}>
        <NowTime />
      </Col>
    </Row> 
    )
  }
}
export default Home
