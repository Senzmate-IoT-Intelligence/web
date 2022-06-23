import "./employee.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { employeeRows } from "../../dummyData";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Employee_List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const getdata = () => {
    Axios.get("http://localhost:5000/api/employee/getall")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
      editable: true,
    },
    {
      field: "role",
      headerName: "Role of Insurance Agent",
      width: 150,
      editable: true,
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "department",
      headerName: "Department",
      width: 100,
      editable: true,
    },

    {
      field: "contactnumber",
      headerName: "ContaCt_number",
      type: "number",
      width: 100,
      editable: true,
    },

    {
      field: "occupation",
      headerName: "Occupation",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "accesspermissions",
      headerName: "Access_permissions",
      type: "number",
      width: 190,
      editable: true,
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/editemployee/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>

            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },

    /*  { field: "_id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
              <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "statuss",
      headerName: "Status",
      width: 120,
    },
    {
      field: "deparment",
      headerName: "Department",
      width: 160,
    },

    {
      field: "posstion",
      headerName: "Job Position",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/editemployee/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    }, */
  ];

  return (
    <div className="user1">
      <div className="userTitleContainer1">
        <h1 className="userTitle1"> Insurance Agent Details</h1>
        <Link to="/newemployee">
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
