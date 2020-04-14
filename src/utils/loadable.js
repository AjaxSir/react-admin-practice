import loadable from 'react-loadable'
import React from 'react'

const loadStatus = () => {
  return <span> loading </span>
}

export default (loader, loading = loadStatus) => {
  return loadable({
    loader,
    loading,
  })
}
