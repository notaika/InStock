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

const API_URL = import.meta.env.VITE_LOCALHOST;

export default function InventoryAdd() {
  const [warehouseList, setWarehouseList] = useState([]);

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
  }, []);

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
      <Formik
        initialValues={{
          item_name: "",
          description: "",
          category: "",
          status: "In Stock",
          quantity: "",
          warehouse_id: "",
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
            const warehouseRequest = await axios.post(
              `${API_URL}/api/inventories`,
              values
            );
            console.log(warehouseRequest);
          } catch (error) {
            console.error("Error creating a new inventory item", error);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ values }) => (
          <Form className="inventory-add">
            <div className="inventory-add__header">
              <div className="inventory-add__title-wrapper">
                <img
                  src={arrowIcon}
                  alt="Back arrow"
                  className="inventory-add__header-icon"
                />
                <h1 className="inventory-add__title">Add New Inventory Item</h1>
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
                    <RadioInput name="status" value="In Stock">
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
                    className="inventory-add__input"
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
              >
                Add Item
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <Footer />
    </>
  );
}
