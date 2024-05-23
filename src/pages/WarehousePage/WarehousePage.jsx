import WarehouseItem from "../../components/WarehouseItem/WarehouseItem";
import { useState, useEffect } from "react";
import axios from "axios";

export default function WarehousePage() {
  const [warehouses, setWarehouses] = useState([]);

  const getWarehouses = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_LOCALHOST}/api/warehouses`
      );
      setWarehouses(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(`ERROR: Could not fetch warehouses data`, error);
    }
  };

  useEffect(() => {
    getWarehouses();
  }, []);

  return (
    <main className="warehouse">
      <h1>Warehouse</h1>
      <p>Welcome to the warehouse page!</p>
      <div className="warehouse__list-titles">
        <h4 className="warehouse__list-title">Warehouse</h4>
        <h4 className="warehouse__list-title">Address</h4>
        <h4 className="warehouse__list-title">Contact Name</h4>
        <h4 className="warehouse__list-title">Contact Information</h4>
        <h4 className="warehouse__list-title">Actions</h4>
      </div>
      
    <section className="warehouse__container">
      {warehouses.map((warehouse) => (
        <WarehouseItem warehouse={warehouse} key={warehouse.id} />
      ))}
    </section>
    </main>
  );
}
