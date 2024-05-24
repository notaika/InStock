import { useState, useEffect } from "react";
import axios from "axios";
import "./InventoryPage.scss"
import InventoryList from "../../components/InventoryList/InventoryList";

export default function InventoryPage() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    getInventories();
  }, []);
  async function getInventories() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_LOCALHOST}/api/inventories`
      );
      setInventory(response.data);
    } catch (error) {
      console.error(`ERROR: Could not fetch inventory data`, error);
    }
  }
  return (
    <main className="inventories">
      <div className="inventory-header">
        <h1>Inventory</h1>
        <input type="search" name="search" placeholder="Search..."/>
        <button>Add New Item</button>
      </div>
      <div className="inventory-table">
        <div className="table-heading">
          <p>Inventory Item</p>
          <p>Category</p>
          <p>Status</p>
          <p>Qty</p>
          <p>Warehouse</p>
        </div>
        {inventory.map((item) => (
          <InventoryList
            key={item.id}
            name={item.item_name}
            category={item.category}
            status={item.status}
            quantity={item.quantity}
            warehouse={item.warehouse_name}
          />
        ))}
      </div>
      <div></div>
    </main>
  );
}
