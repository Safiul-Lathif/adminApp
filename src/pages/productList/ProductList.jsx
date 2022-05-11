import { React, useState } from "react";
import  "./ProductList.css"
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import {productRows} from "../../DummyData" ;
import { Link } from "react-router-dom";

export default function ProductList() { 
  const [data,setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product",
      headerName: "product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "statuss", headerName: "status", width: 90 },

    {
      field: "stock",
      headerName: "Stock",
      width: 130,
    },
    {
      field: "Price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "action",
      headerName: "action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productlistedit"> edit </button>
            </Link>
            <DeleteOutline
               className="productListDelete"
               onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='ProductList'>
       <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(row) => row.id}
      />
    </div>
  );
}