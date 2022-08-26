import React from 'react'
import "./NewProduct.css"
import { db }from '../../components/database/firebase'
import { useState } from 'react';

export default function NewProduct() {
   const [product, setProduct] = useState({name:'',productId:0,brand:'',description:'',image:'',price:0});

   const handleChange = (event) =>{
      event.preventDefault();
      const { name , value} = event.target;
      setProduct((prev)=>{
      return { ...prev,[name]: value};
      });
      };
const addNewProducts = (event) => {
   event.preventDefault();
   db.collection('Products')
   .add({
      brand : product.brand ,  description : product.description ,image : product.image ,  name : product.name , price : product.price,productId : product.productId  
   }).then((docRef)=> {
   }).catch((err)=> {
   });
};
return (
   <div className='newProduct'>
      <h1 className="newProductTitle">New Product</h1>
      <form className="newProductForm"  >
      <div className="addProductItem">
         <label>Image</label>
         <input type="text" name='image' 
         value={product.image} onChange={handleChange} 
         />
       </div>
       <div className="addProductItem">
          <label>Brand</label>
          <input type="text"  name='brand'value={product.brand} onChange={handleChange} />
       </div>
       <div className="addProductItem">
          <label>Description</label>
          <input type="text" name='description' value={product.description} onChange={handleChange}/>
       </div>
       <div className="addProductItem">
          <label>ProductId</label>
          <input type="number" name='productId'value={product.productId} onChange={handleChange} />
       </div>
       <div className="addProductItem">
          <label>Name</label>
          <input type="text" name='name'value={product.name} onChange={handleChange} />
       </div>
       <div className="addProductItem">
          <label>Price</label>
          <input type="number" name='price'value={product.price} onChange={handleChange} />
       </div>
      
       <button className="addProduct" onClick={addNewProducts} >Create</button>
      </form>      
    </div>
  );
}