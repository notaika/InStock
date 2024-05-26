import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./WarehouseAdd.scss";
import { TextInput } from "../../utils/FormHelper";
import arrowIcon from "../../assets/icons/arrow_back-24px.svg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Link, useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_LOCALHOST;

export default function WarehouseAdd() {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(`${API_URL}/api/warehouses`, values);
      console.log(response.data);
      alert("Added new warehouse successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error adding new warehouse:", error);
      alert("Failed to add the new warehouse, please try again later.");
    }
    setSubmitting(false);
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <>
      <Header />
      <Formik
        initialValues={{
          warehouse_name: "",
          address: "",
          city: "",
          country: "",
          contact_name: "",
          contact_position: "",
          contact_phone: "",
          contact_email: "",
        }}
        validationSchema={Yup.object({
          warehouse_name: Yup.string().required("This field is required"),
          address: Yup.string().required("This field is required"),
          city: Yup.string().required("This field is required"),
          country: Yup.string().required("This field is required"),
          contact_name: Yup.string().required("This field is required"),
          contact_position: Yup.string().required("This field is required"),
          contact_phone: Yup.string().required("This field is required"),
          contact_email: Yup.string()
            .required("This field is required")
            .email("Invalid email address"),
        })}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form className="warehouse-add">
            <div className="warehouse-add__header">
              <div className="warehouse-add__header-box">
                <Link to="/">
                  <img
                    src={arrowIcon}
                    alt="Back arrow"
                    className="warehouse-add__header-icon"
                  />
                </Link>
                <h1 className="warehouse-add__title">Add New Warehouse</h1>
              </div>
            </div>

            <div className="warehouse-add__fields-container">
              <div className="warehouse-add__left-container">
                <h2 className="warehouse-add__subtitle">Warehouse Details</h2>
                <TextInput
                  label="Warehouse Name"
                  name="warehouse_name"
                  type="text"
                  placeholder="Warehouse Name"
                  className="warehouse-add__input"
                  labelClassName="warehouse-add__label"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.warehouse_name}
                />
                <TextInput
                  label="Address"
                  name="address"
                  type="text"
                  placeholder="Address"
                  className="warehouse-add__input"
                  labelClassName="warehouse-add__label"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                />
                <TextInput
                  label="City"
                  name="city"
                  type="text"
                  placeholder="City"
                  className="warehouse-add__input"
                  labelClassName="warehouse-add__label"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                />
                <TextInput
                  label="Country"
                  name="country"
                  type="text"
                  placeholder="Country"
                  className="warehouse-add__input"
                  labelClassName="warehouse-add__label"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.country}
                />
              </div>

              <div className="warehouse-add__right-container">
                <h2 className="warehouse-add__subtitle">Contact Details</h2>
                <TextInput
                  label="Contact Name"
                  name="contact_name"
                  type="text"
                  placeholder="Contact Name"
                  className="warehouse-add__input"
                  labelClassName="warehouse-add__label"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.contact_name}
                />
                <TextInput
                  label="Position"
                  name="contact_position"
                  type="text"
                  placeholder="Position"
                  className="warehouse-add__input"
                  labelClassName="warehouse-add__label"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.contact_position}
                />
                <TextInput
                  label="Phone Number"
                  name="contact_phone"
                  type="text"
                  placeholder="Phone Number"
                  className="warehouse-add__input"
                  labelClassName="warehouse-add__label"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.contact_phone}
                />
                <TextInput
                  label="Email"
                  name="contact_email"
                  type="email"
                  placeholder="Email"
                  className="warehouse-add__input"
                  labelClassName="warehouse-add__label"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.contact_email}
                />
              </div>
            </div>

            <div className="warehouse-add__button-container">
              <button
                type="button"
                className="warehouse-add__button-item--left"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button type="submit" className="warehouse-add__button-item--right">
                + Add Warehouse
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <Footer />
    </>
  );
}
