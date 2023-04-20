import React from 'react'
import './master.css'

function ViewerChunck({img}) {
  return (
    <div className='viewer-chunck'>
      <img src={img} alt="" />
    </div>
  )
}

export default ViewerChunck
