import React from 'react'
import "./NewProduct.css"
import { db }from '../../components/database/firebase'
import { useState ,useEffect} from 'react';
import ProductsDataService from '../../components/database/product_service';
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
// export default function NewProduct() {
//    const [product, setProduct] = useState({name:'',productId:0,brand:'',description:'',image:'',price:0});

//    const handleChange = (event) =>{
//       event.preventDefault();
//       const { name , value} = event.target;
//       setProduct((prev)=>{
//       return { ...prev,[name]: value};
//       });
//       };
// const addNewProducts = (event) => {
//    event.preventDefault();
//    db.collection('Products')
//    .add({
//       brand : product.brand ,  description : product.description ,image : product.image ,  name : product.name , price : product.price,productId : product.productId  
//    }).then((docRef)=> {
//    }).catch((err)=> {
//    });
// };
// return (
//    <div className='newProduct'>
//       <h1 className="newProductTitle">New Product</h1>
//       <form className="newProductForm"  >
//       <div className="addProductItem">
//          <label>Image</label>
//          <input type="text" name='image' 
//          value={product.image} onChange={handleChange} 
//          />
//        </div>
//        <div className="addProductItem">
//           <label>Brand</label>
//           <input type="text"  name='brand'value={product.brand} onChange={handleChange} />
//        </div>
//        <div className="addProductItem">
//           <label>Description</label>
//           <input type="text" name='description' value={product.description} onChange={handleChange}/>
//        </div>
//        <div className="addProductItem">
//           <label>ProductId</label>
//           <input type="number" name='productId'value={product.productId} onChange={handleChange} />
//        </div>
//        <div className="addProductItem">
//           <label>Name</label>
//           <input type="text" name='name'value={product.name} onChange={handleChange} />
//        </div>
//        <div className="addProductItem">
//           <label>Price</label>
//           <input type="number" name='price'value={product.price} onChange={handleChange} />
//        </div>
      
//        <button className="addProduct" onClick={addNewProducts} >Create</button>
//       </form>      
//     </div>
//   );
// }

//export default function NewProduct()  {
   const AddProduct = ({ id, setProductid }) => {
   const [name,setName] = useState("");
   const [brand,setBrand] = useState("");
   const [description,setDescription] = useState("");
   const [productId,setProductId] = useState(0);
   const [image,setImage] = useState("");
   const [price,setPrice] = useState(0);
   const [category,setCategory] = useState("");
   const [message,setMessage] = useState({error:false,message:""});
   
   const handleSubmit = async(event) =>{
      event.preventDefault();
      setMessage("");
      if(name ===''|| image === ''|| brand ===""|| description===''|| price===0|| productId===0 || category==='')
      {
         setMessage({error:true,message:"All fields are mandatory"});
         return;
      }
      // const { name , value} = event.target;
      // setProduct((prev)=>{
      // return { ...prev,[name]: value};
      // });
      const newProduct ={
         name,image,brand,description,price,productId,category
      };
     console.log(newProduct);
    
     try{
      await ProductsDataService.addProducts(newProduct);
      console.log("New Product Added Succesfully");
      setMessage({error:false,message:"New Product Added Succesfully"});
     }
     catch(err) {
      setMessage({error:true,message:err.message})
     }
     setName("");
     setBrand("");
     setDescription("");
     setImage("");
     setPrice(0);
     setProductId(0);
     setCategory("");
      };
      const editHandler = async () => {
         setMessage("");
         try {
           const docSnap = await ProductsDataService.getProduct(id);
           console.log("the record is :", docSnap.data());
           setName(docSnap.data().name);
           setBrand(docSnap.data().brand);
           setImage(docSnap.data().image);
           setProductId(docSnap.data().productId);
           setPrice(docSnap.data().price);
           setDescription(docSnap.data().description);
           setCategory(docSnap.data().category);
         } catch (err) {
           setMessage({ error: true, msg: err.message });
         }
       };
     
       useEffect(() => {
         console.log("The id here is : ", id);
         if (id !== undefined && id !== "") {
           editHandler();
         }
       }, [id]);
 return (

 
     
   <div className='newProduct'>
   {message?.msg && (
       <Alert
         variant={message?.error ? "danger" : "success"}
         dismissible
         onClose={() => setMessage("")}
       >
         {message?.msg}
       </Alert>
     )}

      <h1 className="newProductTitle">New Product</h1>
      <form className="newProductForm" onSubmit={handleSubmit} >
      <div className="addProductItem">
         <label>Image</label>
         <input type="text" name='image' 
         value={image} onChange={(e) => setImage(e.target.value)} 
         />
       </div>
       <div className="addProductItem">
          <label>Brand</label>
          <input type="text"  name='brand'value={brand} onChange={(e) => setBrand(e.target.value)} />
       </div>
       <div className="addProductItem">
          <label>Description</label>
          <input type="text" name='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
       </div>
       <div className="addProductItem">
          <label>ProductId</label>
          <input type="number" name='productId'value={productId} onChange={(e) => setProductId(e.target.value)} />
       </div>
       <div className="addProductItem">
          <label>Name</label>
          <input type="text" name='name'value={name} onChange={(e) => setName(e.target.value)} />
       </div>
       <div className="addProductItem">
          <label>Category</label>
          <input type="text" name='name'value={category} onChange={(e) => setCategory(e.target.value)} />
       </div>
       <div className="addProductItem">
          <label>Price</label>
          <input type="number" name='price'value={price} onChange={(e) => setPrice(e.target.value)} />
       </div>
      
       <button className="addProduct" type='Submit'
       //</form> onClick={addNewProducts }
       >Create</button>
      </form>      
    </div>
  );

}

export default AddProduct