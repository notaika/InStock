import React from "react";
import { Form, Formik, useField } from "formik";
import axios from "axios";
import { useEffect, useState } from "react";
import "./InventoryAdd.scss";

const API_URL = import.meta.env.VITE_LOCALHOST;

const TextInput = ({ label, labelClassName, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name} className={labelClassName}>
        {label}
      </label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const RadioInput = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "radio" });
  return (
    <div>
      <label className="radio-input">
        <input type="radio" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const SelectInput = ({ label, labelClassName, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.name} className={labelClassName}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default function InventoryAdd() {
  // TODO:
  // const postInventoryItem = async () => {
  //   try {
  //     const warehouseRequest = await axios.post(`${API_URL}/api/inventories`)
  //   } catch (error) {
  //     console.error('Error creating a new inventory item', error)
  //   }
  // };

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

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 15) {
      errors.name = "Must be 15 characters or less";
    }

    if (!values.description) {
      errors.description = "Required";
    } else if (values.description.length > 20) {
      errors.description = "Must be 20 characters or less";
    }

    return errors;
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          description: "",
          category: "",
          status: "inStock",
          quantity: "",
          warehouse: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values }) => (
          <Form className="inventory-add">
            <h1 className="inventory-add__title">Add New Inventory Item</h1>

            <div className="inventory-add__left-container">
              <h2 className="inventory-add__subtitle">Item Details</h2>
              <TextInput
                label="Item Name"
                name="name"
                type="text"
                className="inventory-add__input"
                labelClassName="inventory-add__label"
              />

              <TextInput
                label="Description"
                name="description"
                type="text"
                placeholder="Description"
                className="inventory-add__input"
                labelClassName="inventory-add__label"
              />

              <SelectInput
                label="Category"
                name="category"
                className="inventory-add__dropdown-input"
                labelClassName="inventory-add__dropdown-label"
              >
                <option value="">Please select</option>
                <option value="electronics">Electronics</option>
                <option value="gear">Gear</option>
                <option value="apparel">Apparel</option>
                <option value="health">Health</option>
              </SelectInput>
            </div>

            <div className="inventory-add__right-container">
              <h2 className="inventory-add__subtitle">Item Availability</h2>

              <div className="inventory-add__radio-container">
                Status
                <div className="inventory-add__radio-buttons">
                <RadioInput name="status" value="inStock">
                  InStock
                </RadioInput>
                <RadioInput name="status" value="outOfStock">
                  Out Of Stock
                </RadioInput>
                </div>
              </div>

              {values.status !== "outOfStock" && (
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
                name="warehouse"
                className="inventory-add__dropdown"
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

            <div className="inventory-add__button-container">
              <button type="submit">Cancel</button>
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
