// Rendering Lists
// http://localhost:3000/isolated/exercise/07.js

import * as React from 'react'

const allItems = [
  {id: 'apple', value: '🍎 apple'},
  {id: 'orange', value: '🍊 orange'},
  {id: 'grape', value: '🍇 grape'},
  {id: 'pear', value: '🍐 pear'},
]

function App() {
  const [items, setItems] = React.useState(allItems)
  React.useEffect(() => {
    const id = setInterval(() => {
      setItems(shuffle)

      return () => clearInterval(id)
    }, 1000)
  }, [])
  function getChangeHandler(item) {
    return event => {
      const newValue = event.target.value
      setItems(allItems =>
        allItems.map(i => ({
          ...i,
          value: i.id === item.id ? newValue : i.value,
        })),
      )
    }
  }

  return (
    <div className="keys">
      <div>
        <h1>Without a key</h1>
        {items.map(item => (
          <input
            className={`${item.id}-input`}
            value={item.value}
            onChange={getChangeHandler(item)}
          />
        ))}
      </div>
      <div>
        <h1>With array index as key</h1>
        {items.map((item, index) => (
          <input
            className={`${item.id}-input`}
            key={index}
            value={item.value}
            onChange={getChangeHandler(item)}
          />
        ))}
      </div>
      <div>
        <h1>With a Proper Key</h1>
        {items.map(item => (
          <input
            className={`${item.id}-input`}
            key={item.id}
            value={item.value}
            onChange={getChangeHandler(item)}
          />
        ))}
      </div>
    </div>
  )
}

export default App

function shuffle(originalArray) {
  const array = [...originalArray]
  let currentIndex = array.length
  let temporaryValue
  let randomIndex

  while (0 != currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}
