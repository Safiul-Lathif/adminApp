import React from "react";
import { db } from "../../components/database/firebase";
import "./productLists.css";
import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import ProductsDataService from '../../components/database/product_service';
import delete_forever  from '@mui/icons-material/Language';

// class ProductName extends React.Component{ 
//     state ={
//         products: null,
//         data:''
//     }
    
//     componentDidMount(){
//         console.log('mounted')
//         db.collection('Products')
//         .get()
//         .then( snapshot => {
//             const products = []
//             snapshot.forEach( doc => {
//                 const data = doc.data()
//                 products.push(data)
//             })
//             this.setState({ products: products})
//                     console.log(snapshot)     
//         })
//         .catch( error => console.log(error) )
//     }
//     render(){
    const ProductsList = ({getProductId  }) => {
        const [products, setProducts] = useState([]);
        const [name,setName] = useState("");
        const [brand,setBrand] = useState("");
        const [description,setDescription] = useState("");
        const [productId,setProductId] = useState(0);
        const [image,setImage] = useState("");
        const [price,setPrice] = useState(0);
        const [message,setMessage] = useState({error:false,message:""});
        useEffect(() => {
          getProducts();
        }, []);
      
        const getProducts = async () => {

const data = await ProductsDataService.getAllProducts();
          console.log(data.docs);
          setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
      
        const deleteHandler = async (id) => {
          await ProductsDataService.deleteProduct(id);
          getProducts();
        };
        const editHandler = async (id) => {
            setMessage("");
            try {
              const docSnap = await ProductsDataService.getProduct(id);
              console.log("the record is :", docSnap.data());
              console.log("The id here is : ", id);
              console.log("The id here is : ",docSnap.data().name);
              setName(docSnap.data().name);
              setBrand(docSnap.data().brand);
              setImage(docSnap.data().image);
              setProductId(docSnap.data().productId);
              setPrice(docSnap.data().price);
              setDescription(docSnap.data().description);
            } catch (err) {
              setMessage({ error: true, msg: err.message });
            }
          };
        
        //   useEffect(() => {
        //     console.log("The id here is : ", id);
        //     if (id !== undefined && id !== "") {
        //       editHandler();
        //     }
        //   }, [id]);
        return(
            
            <div className="widgetlg">
                <div className="s">
               
                <h1 className="producttitle"> Products</h1>
                <button  className="addProduct4" onClick={getProducts}>
          Refresh
        </button>        
            <Link to="/NewProduct">
            <button className="addProduct1" >Create</button>
            </Link>  
        
                </div>
            
            <table className="widgetlgtable">
            <tr className="widgetlr">
                            <th className="widgetlgth">Products</th>
                            <th className="widgetlgth">Date</th>
                            <th className="widgetlgth">Amount</th>
                            <th className="widgetlgth">Brand</th>
                            <th className="widgetlgth">Option</th>
            </tr>
            {/* {
                this.state.products && 
                this.state.products.map( e => { */}
            {products.map((doc, index) => {        
                    return(
                        <tr className="widgetlg1" key={doc.id}>
                            <td className="widgetlguser">
                            <img src= {doc.image} alt="" className="widgetlgimage1" />
                            <span className="widetlgname1">{doc.name}</span>
                            </td>
                            <td className="widgetlgtr1">25 Aug 2022</td>
                            <td className="widgetlgtr1">{doc.price}</td>
                            <td className="widgetlgtr1">{doc.brand} </td>
                            <td className="widgetlgtr1">  
                            <Link
                            to="/ProductEdit" 
                            // state={{data:e.name}}
                            >
                            <button className="addProduct2"  onClick={(e) => editHandler(doc.id)}>Edit</button>
                            </Link> 
                          {/* getProductId(doc.id) */}
                            <button className="addProduct3"  onClick={(e) => deleteHandler(doc.id)}>Del</button>
                    
                              </td>
                        </tr>
                            )
            })
            }
            </table>
            </div>
        )
    }

export default ProductsList