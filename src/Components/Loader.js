import React from 'react'

function Loader(props) {
  const { isLoading } = props
  return (
    isLoading ? <div class="spinner-border darkGreenText" role="status">
      <span class="sr-only"></span>
    </div> : <></>
  )
}

export default Loader;