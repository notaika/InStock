import WarehouseList from "../../components/WarehouseList/WarehouseList";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import sortIcon from "../../assets/icons/sort-24px.svg";
import "./WarehousePage.scss";

export default function WarehousePage() {
  const [warehouses, setWarehouses] = useState([]);

  const getWarehouses = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_LOCALHOST}/api/warehouses`
      );
      setWarehouses(response.data);
    } catch (error) {
      console.error(`ERROR: Could not fetch warehouses data`, error);
    }
  };

  useEffect(() => {
    getWarehouses();
  }, []);

  return (
    <main className="home-page">
      <div className="warehouse__wrapper">
        <Header />
        <article className="warehouse">
          <div className="warehouse__header">
            <h1 className="warehouse__title">Warehouses</h1>
            <form className="warehouse__form">
              <input
                type="text"
                className="warehouse__search-input"
                placeholder="Search..."
              />
              <Link to="/warehouse/add" className="warehouse__search-btn">
                + Add New Warehouse
              </Link>
            </form>
          </div>
          <div className="warehouse__list-titles">
            <h4 className="warehouse__list-title">
              Warehouse{" "}
              <img
                src={sortIcon}
                alt="A sort icon"
                className="warehouse__sort"
              />
            </h4>
            <h4 className="warehouse__list-title">
              Address
              <img
                src={sortIcon}
                alt="A sort icon"
                className="warehouse__sort"
              />
            </h4>
            <h4 className="warehouse__list-title">
              Contact Name
              <img
                src={sortIcon}
                alt="A sort icon"
                className="warehouse__sort"
              />
            </h4>
            <h4 className="warehouse__list-title">
              Contact Information
              <img
                src={sortIcon}
                alt="A sort icon"
                className="warehouse__sort"
              />
            </h4>
            <h4 className="warehouse__list-title">
              Actions
              <img
                src={sortIcon}
                alt="A sort icon"
                className="warehouse__sort"
              />
            </h4>
          </div>

          <section className="warehouse__container">
            <div className="warehouse__map">
              {warehouses.map((warehouse) => (
                <WarehouseList warehouse={warehouse} key={warehouse.id} />
              ))}
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
