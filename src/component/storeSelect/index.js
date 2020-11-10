import React, { useEffect, useState } from 'react'
import { Cascader } from 'antd'
import PropTypes from 'prop-types'
import { fetchStoreList } from '@/api/store.js'

const StoreSelect = (props) => {
  const [options, setOptions] = useState([])
  useEffect(() => {
    fetchStoreList().then((res) => {
      setOptions(() => {
        return res
      })
    })
}, [])


    return <Cascader allowClear={props.allowClear}  options={options} />
}

StoreSelect.propTypes = {
  allowClear: PropTypes.bool,
  defaultValue: PropTypes.string || PropTypes.array
}
StoreSelect.defaultProps = {
  allowClear: true
}

export default StoreSelect