import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import EditButton from "../../assets/icons/edit-white-24px.svg";
import "./../InventoryItem/InventoryItem.scss";

export default function InventoryItem() {
  const [id, setId] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    const url = new URL(window.location.href);
    const idFromUrl = url.pathname.split("/").pop();
    setId(idFromUrl);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          `http://localhost:8080/api/inventories/${id}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <Header />
      <div className="item-body">
        <div className="item-wrapper">
        <div className="item">
          <div className="item__header">
            <div className="item__left">
              <Link to={`/inventory`}>
                <img
                  src={ArrowBack}
                  alt="Arrow Back"
                  className="item__arrowback"
                />
              </Link>
              <h2 className="item__name">{data.item_name}</h2>
            </div>
            <Link to={`/inventory/edit/${id}`}>
              <button className="item__edit">
                <img src={EditButton} alt="Edit Button Icon" />
                <span className="item__edit-text">Edit</span>
              </button>
            </Link>
          </div>
          <div className="item__body">
            <div className="item__itemdiv item__itemdiv--line">
              <div className="item__items">
                <h4 className="item__itemstyle">ITEM DESCRIPTION: </h4>
                <p className="item__data">{data.description}</p>
              </div>

              <div className="item__items">
                <h4 className="item__itemstyle">CATEGORY:</h4>
                <p className="item__data">{data.category}</p>
              </div>
            </div>
            <div>
              <div className="item__status">
                <div className="item__items">
                  <h4 className="item__itemstyle">STATUS:</h4>
                  {data.status === "In Stock" ? (
                    <p className="item__stock item__stock--instock">
                      {data.status}
                    </p>
                  ) : (
                    <p className="item__stock item__stock--nostock">
                      {data.status}
                    </p>
                  )}
                </div>
                <div className="item__items">
                  <h4 className="item__itemstyle">QUANTITY:</h4>
                  <p className="item__data">{data.quantity}</p>
                </div>
              </div>

              <div className="item__items">
                <h4 className="item__itemstyle">WAREHOUSE:</h4>
                <p className="item__data">{data.warehouse_name}</p>
              </div>
            </div>
          </div>
        </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
