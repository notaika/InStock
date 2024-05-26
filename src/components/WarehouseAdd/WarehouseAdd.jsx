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

export default function WarehouseAdd() {
  const API_URL = import.meta.env.VITE_LOCALHOST;

  return (
    <div>
      <h1>Warehouse - Add</h1>
      <p>Welcome to the warehouse (add) page!</p>
    </div>
  )
}
