import "./WarehouseDetails.scss";
import arrowIcon from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-white-24px.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import WarehouseInventoryList from "../WarehouseInventoryList/WarehouseInventoryList";
import sortIcon from "../../assets/icons/sort-24px.svg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const API_URL = import.meta.env.VITE_LOCALHOST;

const WarehouseDetails = ({ id }) => {
  const [warehouseDetails, setWarehouseDetails] = useState([]);
  const [warehouseInventory, setWarehouseInventory] = useState([]);

  const getWarehouseDetails = async () => {
    if (!id) return;

    try {
      const warehouseRequest = await axios.get(
        `${API_URL}/api/warehouses/${id}`
      );
      setWarehouseDetails(warehouseRequest.data);
      console.log(warehouseRequest.data);
    } catch (error) {
      console.error("Error while fetching warehouse data", error);
    }
  };

  async function getWarehouseInventory() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_LOCALHOST}/api/warehouses/${id}/inventories`
      );
      setWarehouseInventory(response.data);
    } catch (error) {
      console.error(`ERROR: Could not fetch inventory data`, error);
    }
  }

  useEffect(() => {
    getWarehouseDetails();
    getWarehouseInventory();
  }, [id]);

  return (
    <>
      <Header />
      <section className="warehouse-details">
        <div className="warehouse-details__header">
          <div className="warehouse-details__title-wrapper">
            <img
              src={arrowIcon}
              alt="back arrow icon"
              className="warehouse-details__icon"
            />
            <h1 className="warehouse-details__title">
              {warehouseDetails.warehouse_name}
            </h1>
          </div>
          <button className="warehouse-details__edit-button">
            <img
              src={editIcon}
              alt="edit-button icon"
              className="warehouse-details__button-icon"
            />
            <p className="warehouse-details__button-text">Edit</p>
          </button>
        </div>
        <div className="warehouse-details__divider"></div>
        <div className="warehouse-details__address">
          <div className="warehouse-details__address-container">
            <div className="warehouse-details__address-header">
              Warehouse Address:
            </div>
            <div className="warehouse-details__address-list--mobile">
              <p>
                {warehouseDetails.address +
                  ", " +
                  warehouseDetails.city +
                  ", " +
                  warehouseDetails.country}
              </p>
            </div>
            <ul className="warehouse-details__address-list--tablet">
              <li>{warehouseDetails.address}</li>
              <li>{warehouseDetails.city + ", " + warehouseDetails.country}</li>
            </ul>
          </div>
          <div className="warehouse-details__contact-container">
            <ul className="warehouse-details__contact">
              <li className="warehouse-details__contact-header">
                Contact Name:
              </li>
              <li>{warehouseDetails.contact_name}</li>
              <li>{warehouseDetails.contact_position}</li>
            </ul>
            <ul className="warehouse-details__contact">
              <li className="warehouse-details__contact-header">
                Contact Information
              </li>
              <li>{warehouseDetails.contact_phone}</li>
              <li>{warehouseDetails.contact_email}</li>
            </ul>
          </div>
        </div>
        <div className="warehouse-list-tablet">
          <h2 className="warehouse-list-tablet__heading warehouse-list-tablet__inventory">
            Inventory Item <img src={sortIcon} alt="Icon for sorting" />
          </h2>
          <h2 className="warehouse-list-tablet__heading warehouse-list-tablet__category">
            Category
            <img src={sortIcon} alt="Icon for sorting" />
          </h2>
          <h2 className="warehouse-list-tablet__heading warehouse-list-tablet__status">
            Status
            <img src={sortIcon} alt="Icon for sorting" />
          </h2>
          <h2 className="warehouse-list-tablet__heading warehouse-list-tablet__quantity">
            Qty
            <img src={sortIcon} alt="Icon for sorting" />
          </h2>
          <h2 className="warehouse-list-tablet__heading warehouse-list-tablet__actions">
            Actions
          </h2>
        </div>
        {warehouseInventory.map((item) => (
          <WarehouseInventoryList
            key={item.id}
            name={item.item_name}
            category={item.category}
            status={item.status}
            quantity={item.quantity}
            id={item.id}
          />
        ))}
      </section>
      <Footer />
    </>
  );
};

export default WarehouseDetails;
