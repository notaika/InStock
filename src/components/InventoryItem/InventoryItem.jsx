import React from "react";
import "./InventoryItem.scss";

export default function InventoryItem({
  name,
  category,
  status,
  quantity,
  warehouse,
}) {
  return (
    <div className="table">
      <div>
        <h2>Inventory Item</h2>
        <p>{name}</p>
      </div>
      <div>
        <h2>Category</h2>
        <p>{category}</p>
      </div>
      <div>
        <h2>Status</h2>
        <p>{status}</p>
      </div>
      <div>
        <h2>Qty</h2>
        <p>{quantity}</p>
      </div>
      <div>
        <h2>Warehouse</h2>
        <p>{warehouse}</p>
      </div>
    </div>
  );
}
