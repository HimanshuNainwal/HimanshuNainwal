import React from 'react'
import "./index.scss"

function Card({url,name , imgStyle}) {
  return (
    <div className='techStackCard'>
      <img src={url} width={"100%"}  style={imgStyle || {}} />
      <p>{name}</p>
    </div>
  )
}

export default Card