import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { dateFtt } from '@/utils'
const NowTime = (props) => {
  const [time, setTime] = useState(null)
  
  useEffect(() => {
    let timer = setInterval(() => {
      setTime(() => {
        return dateFtt(props.format, new Date())
        
      })
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  }, [props.format])
  return (
  <span>{time}</span>
  )
}
NowTime.prototype = {
  format: PropTypes.string
}
NowTime.defaultProps = {
  format: 'yy-MM-dd hh-mm-ss'
}
export default NowTime