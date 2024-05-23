import "./WarehouseDetails.scss";
import arrowIcon from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_LOCALHOST;

const WarehouseDetails = ({id}) => {
  const [warehouseDetails, setWarehouseDetails] = useState([])

  const getWarehouseDetails = async() => {
    if (!id) return;

    try {
      const warehouseRequest = await axios.get(`${API_URL}/api/warehouses/${id}`);
      setWarehouseDetails(warehouseRequest.data);
      console.log(warehouseRequest);
    } catch (error) {
      console.error("Error while fetching warehouse data", error)
    }
  };

  useEffect(() => {
    getWarehouseDetails();
  }, [id]);


  return (
    <section className="warehouse-details">
      <div className="warehouse-details__header">
        <img src={arrowIcon} alt="back arrow icon" className="warehouse-details__icon" />
        <h1 className="warehouse-details__title">{warehouseDetails.warehouse_name}</h1>
        <button className="warehouse-details__edit-button">
          <img src={editIcon} alt="edit-button icon" className="warehouse-details__button-icon"/>
          <p className="warehouse-details__button-text">Edit</p>
        </button>
      </div>
      <div className="warehouse-details__divider"></div>
      <div className="warehouse-details__address">
        <div className="warehouse-details__address-container">
          <ul className="warehouse-details__contact">
            <li className="warehouse-details__contact-header">Contact Name:</li>
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
    </section>
  );
};

export default WarehouseDetails;
