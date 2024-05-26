import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./WarehouseEdit.scss"
import {TextInput,} from "../../utils/FormHelper";
import arrowIcon from "../../assets/icons/arrow_back-24px.svg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Link, useParams, useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_LOCALHOST;

export default function WarehouseEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    warehouse_name: "",
    address: "", 
    city: "",
    country: "",
    contact_name: "",
    contact_position: "", 
    contact_phone: "", 
    contact_email: "" 
  });

  useEffect(() => {
    async function getWarehouseDetails() {
      try {
        const response = await axios.get(`${API_URL}/api/warehouses/${id}`);
        const warehouseData = response.data;

        setInitialValues({
          warehouse_name: warehouseData.warehouse_name,
          address: warehouseData.address,
          city: warehouseData.city,
          country: warehouseData.country,
          contact_name: warehouseData.contact_name,
          contact_position: warehouseData.contact_position,
          contact_phone: warehouseData.contact_phone,
          contact_email: warehouseData.contact_email
        });
      } catch (error) {
        console.error("Error fetching warehouse details:", error);
      }
    }

    getWarehouseDetails();
  }, [id]);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.put(`${API_URL}/api/warehouses/${id}`, values); 
      console.log(response.data);
      alert("Updated warehouse details successfully!");
      navigate("/"); 
    } catch (error) {
      console.error(error);
      alert("Failed to update the warehouse details, please try again later.");
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
        enableReinitialize
        initialValues={initialValues}
        validationSchema={Yup.object({
          warehouse_name: Yup.string().required("This field is required"),
          address: Yup.string().required("This field is required"),
          city: Yup.string().required("This field is required"),
          country: Yup.string().required("This field is required"),
          contact_name: Yup.string().required("This field is required"),
          contact_position: Yup.string().required("This field is required"),
          contact_phone: Yup.string().required("This field is required"),
          contact_email: Yup.string().required("This field is required").email("Invalid email address")
        })}
        onSubmit={handleSubmit}
      >
        {({ values, setValues }) => (
          <Form className="warehouse-edit"> {/* Updated class name */}
            <div className="warehouse-edit__header">
              <div className="warehouse-edit__header-box">
                <Link to="/">
                  <img src={arrowIcon} alt="Back arrow" className="warehouse-edit__header-icon" />
                </Link>
                <h1 className="warehouse-edit__title">Edit Warehouse</h1>
              </div>
            </div>

            <div className="warehouse-edit__fields-container">
              <div className="warehouse-edit__left-container">
                <h2 className="warehouse-edit__subtitle">Warehouse Details</h2>
                <TextInput
                  label="Warehouse Name"
                  name="warehouse_name"
                  type="text"
                  placeholder="Warehouse Name"
                  className="warehouse-edit__input"
                  labelClassName="warehouse-edit__label"
                />
                <TextInput
                  label="Street Address"
                  name="address" 
                  type="text"
                  placeholder="Street Address"
                  className="warehouse-edit__input"
                  labelClassName="warehouse-edit__label"
                />
                <TextInput
                  label="City"
                  name="city"
                  type="text"
                  placeholder="City"
                  className="warehouse-edit__input"
                  labelClassName="warehouse-edit__label"
                />
                <TextInput
                  label="Country"
                  name="country"
                  type="text"
                  placeholder="Country"
                  className="warehouse-edit__input"
                  labelClassName="warehouse-edit__label"
                />
              </div>

              <div className="warehouse-edit__right-container">
                <h2 className="warehouse-edit__subtitle">Contact Details</h2>
                <TextInput
                  label="Contact Name"
                  name="contact_name"
                  type="text"
                  placeholder="Contact Name"
                  className="warehouse-edit__input"
                  labelClassName="warehouse-edit__label"
                />
                <TextInput
                  label="Position"
                  name="contact_position" // Changed to match initialValues
                  type="text"
                  placeholder="Position"
                  className="warehouse-edit__input"
                  labelClassName="warehouse-edit__label"
                />
                <TextInput
                  label="Phone Number"
                  name="contact_phone" // Changed to match initialValues
                  type="text"
                  placeholder="Phone Number"
                  className="warehouse-edit__input"
                  labelClassName="warehouse-edit__label"
                />
                <TextInput
                  label="Email"
                  name="contact_email" // Changed to match initialValues
                  type="text"
                  placeholder="Email"
                  className="warehouse-edit__input"
                  labelClassName="warehouse-edit__label"
                />
              </div>
            </div>

            <div className="warehouse-edit__button-container">
              <button type="button" className="warehouse-edit__button-item--left" onClick={handleCancel}>
                Cancel
              </button>
              <button type="submit" className="warehouse-edit__button-item--right">
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <Footer />
    </>
  );
}