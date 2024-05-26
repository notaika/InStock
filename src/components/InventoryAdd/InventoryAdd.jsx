import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./InventoryAdd.scss";
import {
  TextInput,
  TextAreaInput,
  RadioInput,
  SelectInput,
} from "../../utils/FormHelper";
import arrowIcon from "../../assets/icons/arrow_back-24px.svg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Link, useNavigate, useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_LOCALHOST;

export default function InventoryAdd({ addItem }) {
  const { id } = useParams(); 
  const [inventoryItem, setInventoryItem] = useState();
  const [warehouseList, setWarehouseList] = useState([]);
  const navigate = useNavigate();

  const getInventoryItem = async() => {
    try {
      const inventoryRequest = await axios.get(`${API_URL}/api/inventories/${id}`);
      setInventoryItem(inventoryRequest.data);
    } catch (error) {
      console.error("Error retrieving inventory item", error);
    }
  }

  console.log(inventoryItem);

  const getWarehouseList = async () => {
    try {
      const warehouseRequest = await axios.get(`${API_URL}/api/warehouses`);
      setWarehouseList(warehouseRequest.data);
    } catch (error) {
      console.error("Error retrieving warehouses", error);
    }
  };

  useEffect(() => {
    getWarehouseList();
    !addItem && getInventoryItem();
  }, []);

  if(!warehouseList) {
    return <div className="loader">loading...</div>
  }

  if(!addItem && !inventoryItem) {
    return <div className="loader">loading..</div>
  }

  const errorMessage = "This field is required";
  const categories = [
    "Electronics",
    "Gear",
    "Apparel",
    "Accessories",
    "Health",
  ];

  return (
    <>
    < Header />
      <Formik
        initialValues={{
          item_name: addItem ? "" : inventoryItem[0].item_name,
          description: addItem ? "" : inventoryItem[0].description,
          category: addItem ? "" : inventoryItem[0].category,
          status: addItem ? "In Stock" : inventoryItem[0].status, //inventoryItem[0].status,
          quantity: addItem ? "1" : inventoryItem[0].quantity, //TODO: fix api to allow 0 quantity
          warehouse_id: addItem ? "" : inventoryItem[0].warehouse_id //TODO: set warehouse 
        }}
        validationSchema={Yup.object({
          item_name: Yup.string().required(errorMessage),
          description: Yup.string().required(errorMessage),
          category: Yup.string().required(errorMessage),
          status: Yup.string().required(errorMessage),
          quantity: Yup.number().when("status", {
            is: "In Stock",
            then: (schema) =>
              schema.required(errorMessage).positive().integer(),
          }),
          warehouse_id: Yup.number().required(errorMessage),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values);
          try {
            if (addItem) {
              await axios.post(`${API_URL}/api/inventories`, values);
            } else {
              await axios.put(`${API_URL}/api/inventories/${id}`, values);
          }
          } catch (error) {
            console.error("Error creating or updating inventory item", error);
          } finally {
            setSubmitting(false);
            navigate(`/inventory/${id}`);
          }
        }}
      >
        {({ values }) => (
          <Form className="inventory-add">
            <div className="inventory-add__header">
              <div className="inventory-add__title-wrapper">
                <Link to="/inventory">
                <img
                  src={arrowIcon}
                  alt="Back arrow"
                  className="inventory-add__header-icon"
                />
                </ Link>
                <h1 className="inventory-add__title">{ addItem ? "Add New Inventory Item" : "Edit Inventory Item" }</h1>
              </div>
            </div>

            <div className="inventory-add__fields-container">
              <div className="inventory-add__left-container">
                <h2 className="inventory-add__subtitle">Item Details</h2>
                <TextInput
                  label="Item Name"
                  name="item_name"
                  type="text"
                  
                  placeholder="Item Name"
                  className="inventory-add__input"
                  labelClassName="inventory-add__label"
                />

                <TextAreaInput
                  label="Description"
                  name="description"
                  placeholder="Please enter a brief item description..."
                  className="inventory-add__input-area"
                  labelClassName="inventory-add__label"
                />

                <SelectInput
                  label="Category"
                  name="category"
                  className="inventory-add__dropdown-input"
                  labelClassName="inventory-add__dropdown-label"
                >
                  <option value="">Please select</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}

                </SelectInput>
              </div>

              <div className="inventory-add__right-container">
                <h2 className="inventory-add__subtitle">Item Availability</h2>

                <div className="inventory-add__radio-container">
                  Status
                  <div className="inventory-add__radio-buttons">
                    <RadioInput name="status" value="In Stock" className="inventory-add__radio-item">
                      In Stock
                    </RadioInput>
                    <RadioInput name="status" value="Out Of Stock">
                      Out Of Stock
                    </RadioInput>
                  </div>
                </div>

                {values.status !== "Out Of Stock" && (
                  <TextInput
                    label="Quantity"
                    name="quantity"
                    type="text"
                    placeholder="0"
                    className="inventory-add__input inventory-add__input--small"
                    labelClassName="inventory-add__label"
                  />
                )}

                <SelectInput
                  label="Warehouse"
                  name="warehouse_id"
                  className="inventory-add__dropdown-input"
                  labelClassName="inventory-add__dropdown-label"
                >
                  <option value="">Please select</option>
                  {warehouseList.map((i) => (
                    <option key={i.id} value={i.id}>
                      {i.warehouse_name}
                    </option>
                  ))}
                </SelectInput>
              </div>
            </div>

            <div className="inventory-add__button-container">
              <button type="button" className="inventory-add__button-item--left"
              onClick={() => console.log('clicked')}
               >
                Cancel
              </button>
              <button
                type="submit"
                className="inventory-add__button-item--right"
              > { addItem ? "+ Add Item" : "Save" }
                
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <Footer />
    </>
  );
}
