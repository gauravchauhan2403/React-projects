import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import CharacterGrid from './CharacterGrid';

const Main = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters`)

      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])
  return (
    <div className="App">
      <h1>BREAKING BAD</h1>
      <CharacterGrid isLoading={isLoading} items={items} />
      
    </div>
  );
}

export default Main;
