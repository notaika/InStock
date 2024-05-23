import { Link } from "react-router-dom";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import "./WarehouseList.scss";

export default function WarehouseList() {
  return (
    <>
      <section className="warehouse__list warehouse__list--mobile">
        <div className="warehouse__list-item">
          <div className="warehouse__list-container">
            <div className="warehouse__list--left">
              <h4 className="warehouse__list-title">Warehouse</h4>
              <Link to="/:id" className="warehouse__list-nav">
                Warehouse
                <img
                  src={chevronRight}
                  alt="Icon for warehouse navigation"
                  className="warehouse__list-title-logo"
                />
              </Link>
              <h4 className="warehouse__list-title">Address</h4>
              <p className="warehouse__address">503 Broadway, New York, USA</p>
            </div>
            <div className="warehouse__list--right">
              <h4 className="warehouse__list-title">Contact Name</h4>
              <p className="warehouse__contact-name">Full Name</p>
              <h4 className="warehouse__list-title">Contact Information</h4>
              <p className="warehouse__contact-information">+1 (629) 555-0129</p>
              <p className="warehouse__contact-information">bmcdonald@instock.com</p>
            </div>
          </div>
          <div className="warehouse__list-functions">
            <img
              src={deleteIcon}
              alt="Red garbage icon for delete button"
              className="warehouse__list-delete"
            />
            <img
              src={editIcon}
              alt="A blue pen icon for edit button"
              className="warehouse__list-edit"
            />
          </div>
        </div>
      </section>

      <section className="warehouse__list warehouse__list--tablet">
        <div className="warehouse__list-content">
          <div className="warehouse__list-titles">
            <h4 className="warehouse__list-title">Warehouse</h4>
            <h4 className="warehouse__list-title">Address</h4>
            <h4 className="warehouse__list-title">Contact Name</h4>
            <h4 className="warehouse__list-title">Contact Information</h4>
            <h4 className="warehouse__list-title">Actions</h4>
          </div>
          <div className="warehouse__list-item">
            <Link to="/:id" className="warehouse__list-nav warehouse__info">
              Warehouse{" "}
              <img
                src={chevronRight}
                alt="Icon for warehouse navigation"
                className="warehouse__list-title-logo"
              />
            </Link>
            <p className="warehouse__address warehouse__info">Address Address Address Address</p>
            <p className="warehouse__contact-name warehouse__info">Full Name</p>
            <div className="warehouse__contact-container warehouse__info">
              <p className="warehouse__contact-information">+1 (629) 555-0129</p>
              <p className="warehouse__contact-information">bmcdonald@instock.com</p>
            </div>
            <div className="warehouse__list-functions warehouse__info">
              <img
                src={deleteIcon}
                alt="Red garbage icon for delete button"
                className="warehouse__list-delete "
              />
              <img
                src={editIcon}
                alt="A blue pen icon for edit button"
                className="warehouse__list-edit"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
