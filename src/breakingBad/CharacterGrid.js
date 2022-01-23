import React from 'react'
import Character from './Character'

const CharacterGrid = ({ items, isLoading }) => {
  return  isLoading ? (
     <h1>Loading...</h1> 
     ) : ( 
     <section style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between', margin:16}}>
    {items.map(item => (
      <Character  item ={item} />
    ))}
  </section>
  )
}

export default CharacterGrid
