import { useState, useEffect } from "react";
import axios from "axios";
import "./InventoryPage.scss";
import InventoryList from "../../components/InventoryList/InventoryList";
import sortIcon from "../../assets/icons/sort-24px.svg";

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
    <>
      <main className="inventories">
        <div className="inventory-header">
          <h1>Inventory</h1>
          <input type="search" name="search" placeholder="Search..." />
          <button>Add New Item</button>
        </div>
        <div>
          <div className="inventory-tablet">
            <h2 className="inventory-tablet__heading inventory-tablet__inventory">
              Inventory Item <img src={sortIcon} alt="Icon for sorting" />
            </h2>
            <h2 className="inventory-tablet__heading inventory-tablet__category">
              Category
              <img src={sortIcon} alt="Icon for sorting" />
            </h2>
            <h2 className="inventory-tablet__heading inventory-tablet__status">
              Status
              <img src={sortIcon} alt="Icon for sorting" />
            </h2>
            <h2 className="inventory-tablet__heading inventory-tablet__quantity">
              Qty
              <img src={sortIcon} alt="Icon for sorting" />
            </h2>
            <h2 className="inventory-tablet__heading inventory-tablet__warehouse">
              Warehouse
              <img src={sortIcon} alt="Icon for sorting" />
            </h2>
            <h2 className="inventory-tablet__heading inventory-tablet__actions">
              Actions
              <img src={sortIcon} alt="Icon for sorting" />
            </h2>
          </div>
          {inventory.map((item) => (
            <InventoryList
              key={item.id}
              name={item.item_name}
              category={item.category}
              status={item.status}
              quantity={item.quantity}
              warehouse={item.warehouse_name}
              id={item.id}
            />
          ))}
        </div>
        <div></div>
      </main>
    </>
  );
}
