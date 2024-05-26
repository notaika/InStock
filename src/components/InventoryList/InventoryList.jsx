import React from "react";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import { Link } from "react-router-dom";

import "./InventoryList.scss";

export default function InventoryList({
  name,
  category,
  status,
  quantity,
  warehouse,
  id
}) {
  let statusClass = "";
  if (status === "In Stock") {
    statusClass = "inventory-item__instock";
  } else if (status === "Out of Stock") {
    statusClass = "inventory-item__notinstock";
  }

  return (
    <div className="inventory-item">
      <div className="inventory-item__container">
        <div className="inventory-item__name">
          <h2 className="inventory-item__title">Inventory Item</h2>
          <Link to={`/inventory/${id}`} className="inventory-item__link">
            {name}
            <img src={chevronRight} alt="Icon for warehouse navigation" />
          </Link>
        </div>
        <div className="inventory-item__status">
          <h2 className="inventory-item__title">Status</h2>
          <span className={statusClass}>{status}</span>
        </div>
        <div className="inventory-item__category">
          <h2 className="inventory-item__title">Category</h2>
          <span className="inventory-item__detail">{category}</span>
        </div>
        <div className="inventory-item__quantity">
          <h2 className="inventory-item__title">Qty</h2>
          <span className="inventory-item__detail">{quantity}</span>
        </div>
        <div className="inventory-item__warehouse">
          <h2 className="inventory-item__title">Warehouse</h2>
          <span className="inventory-item__detail">{warehouse}</span>
        </div>
        <div className="inventory-item__actions">
        <Link to={`/inventory/delete/${id}`}>
          {/* <Link > */}
            <img src={deleteIcon} alt="Red garbage icon for delete button" className="inventory-item__delete"/>
          </Link>
          <Link to={`/inventory/edit/${id}`}>
          {/* <Link > */}
            <img src={editIcon} alt="A blue pen icon for edit button" className="inventory-item__edit"/>
          </Link>
        </div>
      </div>
    </div>
  );
}
