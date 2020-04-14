import React from 'react'
export default class userSystem extends React.Component {
  componentDidMount() {
    console.log(this.props.history)
  }
  render() {
    return <div className="main-content"> 用户设置 </div>
  }
}
