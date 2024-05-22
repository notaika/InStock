import "./WarehouseDetails.scss";

const WarehouseDetails = () => {
  return (
    <section class="warehouse-details">
      <div className="warehouse-details__header">
        <img src="" alt="" className="warehouse-details__icon" />
        <h1 className="warehouse-details__title">Washington</h1>
        <button className="warehouse-details__edit-button">Edit</button>
      </div>
      <div className="warehouse-details__divider"></div>
      <div className="warehouse-details__address">
        <address className="warehouse-details__address-container">
          <ul className="warehouse-details__contact">
            <li className="warehouse-details__contact-header">Contact Name:</li>
            <li>Graeme Lyon</li>
            <li>Warehouse Manager</li>
          </ul>
          <ul className="warehouse-details__contact">
            <li className="warehouse-details__contact-header">
              Contact Information
            </li>
            <li>1 647 504 0911</li>
            <li>glyon@instock.com</li>
          </ul>
        </address>
      </div>
    </section>
  );
};

export default WarehouseDetails;

//warehouse_name - Washington

//Address
// address
// city
// country

//contact_name
//contact_position

//contact_phone
//contact_email
