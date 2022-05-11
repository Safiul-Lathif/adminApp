import { Link } from "react-router-dom/cjs/react-router-dom.min"
import"./product.css"
import Chart from "../../components/chart/Chart"
import { productData } from "../userList/dummyData";
import Airpod from "../userList/Airpod.png"
import { Publish } from "@mui/icons-material";
export default function product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
          <h1 className="productTitle">Product</h1>
          <Link to="/NewProduct">
          <button className="productAddButton">Create</button>
          </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="sales" title="Sales Perfomance"/>
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={Airpod} alt="" className="productTopImg" />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id :</span>
              <span className="ProductInfovalue">213</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales :</span>
              <span className="ProductInfovalue">9000</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active :</span>
              <span className="ProductInfovalue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock :</span>
              <span className="ProductInfovalue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
           <form className="productForm">
               <div className="productFormLeft">
                 <label> Product Name</label>
                 <input type="text" placeholder="Apple Airpod"/>
                 <label> In Stock</label>
                 <select name="In Stock" id="idStock">
                   <option value="yes">yes</option>
                   <option value="no">no</option>
                 </select>
                 <label> Active </label>
                 <select name="Active" id="active">
                   <option value="yes">yes</option>
                   <option value="no">no</option>
                 </select>                 
               </div>
               <div className="productFormRight">
                 <div className="productUpload">
                   <img src={Airpod} alt="" className="productUplodeImg" />
                   <label For="file">
                     <Publish/>
                   </label>
                   <input type="file" id="file" style={{display: "none"}} />
                 </div>
                 <button className="productButton"> Update</button>
               </div>
           </form>
      </div>
    </div>
  );
}
