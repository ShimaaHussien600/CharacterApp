import React from 'react'

function Loader(props) {
  const { isLoading } = props
  return (
    isLoading ? <div className="spinner-border darkGreenText" role="status">
      <span className="sr-only"></span>
    </div> : <></>
  )
}

export default Loader;