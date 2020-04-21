import React, { useEffect } from 'react'
// 纯函数组件 props传入的值，即count改变时才渲染 React.memo
const ReactMemo = React.memo((props) => {
  useEffect(() => {
    console.log('组件刷新')
  })
  return (
    <div>
      <div>react.memo</div>
      {props.count}
      <hr />
    </div>
  )
})
export default ReactMemo
