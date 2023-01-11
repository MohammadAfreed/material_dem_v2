import "./productlist.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { productRows } from "../../datatablesource";
import { DeleteOutline } from "@mui/icons-material";
import { useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";


export default function ProductList() {
    const [data, setData] = useState(productRows);
  
    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };
  
    const columns = [
      { field: "id", headerName: "ID", width: 90 },
      {
        field: "product",
        headerName: "Product",
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
      { field: "stock", headerName: "Stock", width: 200 },
      {
        field: "status",
        headerName: "Status",
        width: 120,
      },
      {
        field: "price",
        headerName: "Price",
        width: 160,
      },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <Link to={"/product/" + params.row.id}>
                <button className="productListEdit">Edit</button>
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
        <div className="container">
            <Navbar/>
            <div className="productList" style={{ height: 550, width: '100%' }}>
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={6}
          checkboxSelection
        />
      </div>

        </div>
      
    );
  }