import React from 'react';
import Item from './Item';
import './ItemList.css';
import data from './food.json'
import Counter from './Counter'
function ItemList() {

    const spaces = data.map(( { name, tags, images,nutrition }, i) => {

        return (
          <div className="Item">
          <Item
            id = {i}
            key={name}
            name={name}
            image={images[0]}
            tags={tags}
          />
          <Counter />
          </div>

        )
        
      })
      

  return (
    <div className="ItemList">
      { spaces }
    </div>
  )
}

export default ItemList