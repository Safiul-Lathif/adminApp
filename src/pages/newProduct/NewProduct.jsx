import React from 'react'
import "./NewProduct.css"

export default function NewProduct() {
  return (
    <div className='newProduct'>
      <h1 className="newProductTitle">New Product</h1>
      <form className="newProductForm">
       <div className="addProductItem">
          <label>Image</label>
          <input type="file" id='file'/>
       </div>
       <div className="addProductItem">
          <label>Name</label>
          <input type="text" />
       </div>
       <div className="addProductItem">
          <label>Stock</label>
          <input type="text" />
       </div>
       <div className="addProductItem">
          <label>Active</label>
           <select name="active" id="active">
              <option value="yes">yes</option>
              <option value="no">no</option>
           </select>
       </div>
       <button className="addProduct">Create</button>
      </form>      
    </div>
  );
}
