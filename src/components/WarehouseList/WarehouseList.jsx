import { Link } from "react-router-dom";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import "./WarehouseList.scss";

export default function WarehouseList({ warehouse }) {
  return (
    <>
      <section className="warehouse__list warehouse__list--mobile">
        <div className="warehouse__list-item">
          <div className="warehouse__list-container">
            <div className="warehouse__list--left">
              <h4 className="warehouse__list-title">Warehouse</h4>
              <Link to={`/warehouse/${warehouse.id}`} className="warehouse__list-nav">
                {warehouse.warehouse_name}
                <img
                  src={chevronRight}
                  alt="Icon for warehouse navigation"
                  className="warehouse__list-title-logo"
                />
              </Link>
              <h4 className="warehouse__list-title">Address</h4>
              <p className="warehouse__address">
                {warehouse.address}, <br /> {warehouse.city}, {warehouse.country}
              </p>
            </div>
            <div className="warehouse__list--right">
              <h4 className="warehouse__list-title">Contact Name</h4>
              <p className="warehouse__contact-name">{warehouse.contact_name}</p>
              <h4 className="warehouse__list-title">Contact Information</h4>
              <p className="warehouse__contact-information">{warehouse.contact_phone}</p>
              <p className="warehouse__contact-information">{warehouse.contact_email}</p>
            </div>
          </div>
          <div className="warehouse__list-functions">
            <Link to={`warehouse/delete/${warehouse.id}`} className="warehouse__function-link">
              <img
                src={deleteIcon}
                alt="Red garbage icon for delete button"
                className="warehouse__list-delete"
              />
            </Link>
            <Link to={`/warehouse/edit/${warehouse.id}`} className="warehouse__function-link">
              <img
                src={editIcon}
                alt="A blue pen icon for edit button"
                className="warehouse__list-edit"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="warehouse__list warehouse__list--tablet">
        <div className="warehouse__list-content">
          <div className="warehouse__list-item">
            <Link to={`/warehouse/${warehouse.id}`} className="warehouse__list-nav warehouse__info">
              {warehouse.warehouse_name}
              <img
                src={chevronRight}
                alt="Icon for warehouse navigation"
                className="warehouse__list-title-logo"
              />
            </Link>
            <p className="warehouse__address warehouse__info">
              {warehouse.address}, {warehouse.city}, {warehouse.country}
            </p>
            <p className="warehouse__contact-name warehouse__info">{warehouse.contact_name}</p>
            <div className="warehouse__contact-container warehouse__info">
              <p className="warehouse__contact-information">{warehouse.contact_phone}</p>
              <p className="warehouse__contact-information">{warehouse.contact_email}</p>
            </div>
            <div className="warehouse__list-functions warehouse__info">
              <Link to={`/warehouse/delete/${warehouse.id}`} className="warehouse__function-link">
                <img
                  src={deleteIcon}
                  alt="Red garbage icon for delete button"
                  className="warehouse__list-delete"
                />
              </Link>
              <Link to={`/warehouse/edit/${warehouse.id}`} className="warehouse__function-link">
                <img
                  src={editIcon}
                  alt="A blue pen icon for edit button"
                  className="warehouse__list-edit"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
