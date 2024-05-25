import React from 'react'
import Header from '../Header/Header'
import './../InventoryItem/InventoryItem.scss'

export default function InventoryItem() {
  return (
    <div>
      <Header />
      <div className="inventoryItems">
      <h1>Inventory - Item</h1>
      <p>Welcome to the inventory (item) page!</p>
      </div>
    </div>
  )
}
