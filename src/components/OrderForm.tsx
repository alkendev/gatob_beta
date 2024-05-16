import React, { useState } from 'react'

const OrderForm: React.FC = () => {
  const [foodItems, setFoodItems] = useState<string[]>([])
  const [quantity, setQuantity] = useState<number>(0)

  const handleAddItem = () => {
    setFoodItems([...foodItems, 'New Item'])
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value))
  }

  return (
    <div>
      <h2>Order Form</h2>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {foodItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default OrderForm
