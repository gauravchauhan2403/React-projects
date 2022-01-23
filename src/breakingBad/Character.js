import React from 'react'

const Character = ({item}) => {
  return (
    <div style={{padding:2}}>
      <img alt='character' src ={item.img} style={{height:200, width: 150, margin: 2, borderRadius: 15} } />
      <h4>{item.nickname}</h4> 
      <h4>Birthday : {item.birthday}</h4>
      <h5>Portrayed as {item.portrayed}</h5>
      <h6> Status : {item.status}</h6>
    </div>
  )
}

export default Character
