import React from 'react'
import New from './New'

const NewList = props => {
  return (
    <div className="container" style={{ padding: '48px 0' }}>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <New />
        </div>
      </div>
    </div>
  )
}

export default NewList