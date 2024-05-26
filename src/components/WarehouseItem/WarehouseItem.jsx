import React from "react";
import WarehouseDetails from "../WarehouseDetails/WarehouseDetails";
import { useParams } from "react-router-dom";
import WareHouseInventoryList from "../WarehouseInventoryList/WarehouseInventoryList";

export default function WarehouseItem() {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <WarehouseDetails id={id} />
    </div>
  );
}
