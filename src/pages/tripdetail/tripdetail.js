import "./tripdetail.css";
import { DataGrid } from "@material-ui/data-grid";

import { triprows } from "../../dummyData";

import { useState } from "react";

export default function TripList() {
  const [data, setData] = useState(triprows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "Trip ID", width: 150 },
    
    { field: "startingpoint", headerName: "Startingpoint", width: 200 },
    {
      field: "destination",
      headerName: "Destination",
      width: 200,
    },
    {
      field: "date",
      headerName: "Date",
      width: 160,
    },
    {
        field: "trip",
        headerName: "Trip Fare",
        width: 200,
      },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            
              <button className="productListcomplete">completed</button>
              <button className="productListcancel">canceled</button>
            
             
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
