import React, { useMemo } from 'react'
import { string } from 'prop-types'
const UseMemo = ({ props, name }) => {
  // console.log(props)
  useMemo(() => {
    console.log(props.name, name, 'memo')
  }, [name, props.name])
  //使用useMemo缓存一个计算值，计算函数的执行依赖于状态值name和props.name，当name和props.name变化时才执行计算函数
  return (
    <div>
      <div>useMemo</div>
      {props.name}
      <hr />
    </div>
  )
}
UseMemo.propTypes = {
  name: string.isRequired,
}
export default UseMemo
