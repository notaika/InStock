import React from "react";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import { Link } from "react-router-dom";
import "./WarehouseInventoryList.scss";

export default function WarehouseInventoryList({
  name,
  category,
  status,
  quantity,
  id
}) {
  let statusClass = "";
  if (status === "In Stock") {
    statusClass = "warehouse-inventory__instock";
  } else if (status === "Out of Stock") {
    statusClass = "warehouse-inventory__notinstock";
  }

  console.log(  name,
    category,
    status,
    quantity,
    id)

  return (
    <>
      <div className="warehouse-inventory">
        <div className="warehouse-inventory__container">
          <div className="warehouse-inventory__name">
            <h2 className="warehouse-inventory__title">Inventory Item</h2>
            <Link to={`/inventory/${id}`} className="warehouse-inventory__link">
              {name}
              <img src={chevronRight} alt="Icon for warehouse navigation" />
            </Link>
          </div>
          <div className="warehouse-inventory__status">
            <h2 className="warehouse-inventory__title">Status</h2>
            <span className={statusClass}>{status}</span>
          </div>
          <div className="warehouse-inventory__category">
            <h2 className="warehouse-inventory__title">Category</h2>
            <span className="warehouse-inventory__detail">{category}</span>
          </div>
          <div className="warehouse-inventory__quantity">
            <h2 className="warehouse-inventory__title">Qty</h2>
            <span className="warehouse-inventory__detail">{quantity}</span>
          </div>
          <div className="warehouse-inventory__actions">
            <Link>
              <img
                src={deleteIcon}
                alt="Red garbage icon for delete button"
                className="warehouse-inventory__delete"
              />
            </Link>
            <Link>
              <img
                src={editIcon}
                alt="A blue pen icon for edit button"
                className="warehouse-inventory__edit"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
