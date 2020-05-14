import React, { Component } from 'react'
import Cookie from 'js-cookie'
// function getCookie(WrapedComponent, key) {
const getCookie = (key) => (WrapedComponent) => {
  return class extends Component {
    constructor(props) {
      super()
      this.state = {}
    }
    componentDidMount() {
      const name = Cookie.get('username')
      // this.setState({ name })
      // console.log(name)
      if (key === 'name') {
        this.setState({ name })
        console.log(name)
      }
    }
    render() {
      return (
        <WrapedComponent
          name={this.state.name}
          {...this.props}
        ></WrapedComponent>
      )
    }
  }
}
export default getCookie
