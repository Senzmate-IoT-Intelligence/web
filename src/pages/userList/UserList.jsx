import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Employee_List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getdata();
  });

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const getdata = () => {
    Axios.get("http://localhost:5000/api/customer/getall")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const columns = [
    {
      field: "name",
      headerName: " Name",
      width: 200,
    },

    { field: "email", headerName: "Email", width: 200 },
    {
      field: "nic",
      headerName: "NIC",
      width: 120,
    },
    {
      field: "contactnumber",
      headerName: "Contact Number",
      width: 160,
    },
    {
      field: "insurancetype",
      headerName: "Insurance Type",
      width: 120,
    },

    {
      field: "action",
      headerName: "Action",
      width: 500,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>

            <Link to={"/vehicledetail/" + params.row._id}>
              <button className="userListvehicle">Vehicle Detail</button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="user1">
      <div className="userTitleContainer1">
        <h1 className="userTitle1"> Custome Details</h1>
        <Link to="/newUser">
          <button className="userAddButton6">Create</button>
        </Link>
      </div>

      <div className="userList">
        <DataGrid
          getRowId={(row) => row._id}
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      </div>
    </div>
  );
}
