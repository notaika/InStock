import React from 'react'
import { useEffect, useState } from 'react';
import Axios from "axios";
import Header from '../Header/Header'
import './../InventoryItem/InventoryItem.scss'
import ArrowBack from '../../assets/icons/arrow_back-24px.svg'
import EditButton from '../../assets/icons/edit-white-24px.svg'


export default function InventoryItem() {
  const [id, setId] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    const url = new URL(window.location.href); //Takes the url
    const idFromUrl = url.pathname.split('/').pop(); //Split the url path and pops the id
    setId(idFromUrl); //update id from url to the id in useState
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(`http://localhost:8080/api/inventories/${id}`);
        setData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <Header />
        <div className="inventory">

         <div className="inventory__header">
          <img className="inventory__arrowback" src={ArrowBack} alt="Arrow Back" />
          <h2 className="inventory__name">{data.item_name}  <img className="inventory__circle" src={EditButton} alt="Edit Button" /></h2>
         </div>

        <div className="inventory__orders">
          <div className="inventory__QA inventory__QA--divi">
          <div className="inventory__items inventory__items--row1 ">
            <h4 className="inventory__itemstyle">ITEM DESCRIPTION: </h4>
            <p className="inventory__data">{data.description}</p>
          </div>

          <div className="inventory__items inventory__items--row2">
            <h4 className="inventory__itemstyle">CATEGORY:</h4>
            <p className="inventory__data">{data.category}</p>
          </div>
        </div>  
         <div>
          <div className="inventory__status">
            <div className="inventory__items">
                <h4 className="inventory__itemstyle inventory__items--row3">STATUS:</h4>
                {data.status === "In Stock" ? 
                (<p className="inventory__stock inventory__stock--instock">{data.status}</p>) : 
                (<p className="inventory__stock inventory__stock--nostock">{data.status}</p>)}
            </div>
            <div className="inventory__items inventory__items--row4">
                <h4 className="inventory__itemstyle">QUANTITY:</h4>
                <p className="inventory__data">{data.quantity}</p>
            </div>
          </div>


          <div className="inventory__items inventory__items--row5">
            <h4 className="inventory__itemstyle">WAREHOUSE:</h4>
            <p className="inventory__data">{data.warehouse_name}</p>
          </div>
          </div>

          </div>

    </div>
  </div>
  );
}




  



