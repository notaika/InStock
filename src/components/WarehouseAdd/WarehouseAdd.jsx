import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./WarehouseAdd.scss"
import {TextInput,} from "../../utils/FormHelper";
import arrowIcon from "../../assets/icons/arrow_back-24px.svg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Link, useNavigate } from "react-router-dom";


  const API_URL = import.meta.env.VITE_LOCALHOST;

export default function WarehouseAdd() {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(`${API_URL}/api/warehouses`, values);
      console.log("Warehouse added successfully:", response.data);
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data);
    } finally {
      setSubmitting(false);
    }
  };
  const handleCancel = () => {
    navigate("/");
  };


  return (
    <>
    <Header/>
    <Formik
      initialValues={{
        warehouse_name: "",
        street_address: "",
        city: "",
        country: "",
        contact_name: "",
        position: "",
        phone_number: "",
        email: "",
      }}
      validationSchema={Yup.object({
        warehouse_name: Yup.string().required("This field is required"),
        street_address: Yup.string().required("This field is required"),
        city: Yup.string().required("This field is required"),
        country: Yup.string().required("This field is required"),
        contact_name: Yup.string().required("This field is required"),
        position: Yup.string().required("This field is required"),
        phone_number: Yup.string().required("This field is required"),
        email: Yup.string().required("This field is required").email("Invalid email address"),
      })}
    >
    {({ values }) => (
      <Form className="warehouse-add">
        <div className="warehouse-add__header">
          <div className="warehouse-add__header-box">
            <Link to="/">
            <img
              src={arrowIcon}
              alt="Back arrow"
              className="warehouse-add__header-icon"
            />
            </ Link>
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
            />
            <TextInput
              label="Street Address"
              name="street_address"
              type="text"
              placeholder="Street Address"
              className="warehouse-add__input"
              labelClassName="warehouse-add__label"
            />
            <TextInput
              label="City"
              name="city"
              type="text"
              placeholder="City"
              className="warehouse-add__input"
              labelClassName="warehouse-add__label"
            />
            <TextInput
              label="Country"
              name="country"
              type="text"
              placeholder="Country"
              className="warehouse-add__input"
              labelClassName="warehouse-add__label"
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
            />
            <TextInput
              label="Position"
              name="position"
              type="text"
              placeholder="Position"
              className="warehouse-add__input"
              labelClassName="warehouse-add__label"
            />
            <TextInput
              label="Phone Number"
              name="phone_number"
              type="text"
              placeholder="Phone Number"
              className="warehouse-add__input"
              labelClassName="warehouse-add__label"
            />
            <TextInput
              label="Email"
              name="email"
              type="text"
              placeholder="Email"
              className="warehouse-add__input"
              labelClassName="warehouse-add__label"
            />
          </div>
        </div>


        <div className="warehouse-add__button-container">
          <button type="button" className="warehouse-add__button-item--left"
           >
            Cancel
          </button>
          <button
            type="submit"
            className="warehouse-add__button-item--right"
          >
            + Add Warehouse
          </button>
        </div>
      </Form>
    )}
  </Formik>
  <Footer/>
</>
);
}


