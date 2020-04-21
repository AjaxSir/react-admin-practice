import React, { useEffect } from 'react'
import { string } from 'prop-types'
const UseEffect = ({ props, name }) => {
  console.log(props)
  useEffect(() => {
    console.log(props.name, name, 'effect')
  }, [name, props.name])
  // 1.组件初始化和render后，都会执行该useEffect componentDidMount+componentDidUpdate 无参数
  // 2.组件初始化才执行 componentDidMount 参数为空数组 []
  // 3.组件初始化时和name,props.name发生变化才执行
  // 4.useEffect(() => {
  //   console.log("相当于生命周期：componentDidMount")
  //   // 执行函数中直接使用return返回一个函数，这个函数会在组件unmount时执行。
  //   return () => {
  //     console.log('相当于声明周期：componentWillUnmount');
  //   }
  // }, [])
  return <span>{props.name}</span>
}
UseEffect.propTypes = {
  name: string.isRequired,
}
export default UseEffect
