import React from "react";
import "./productEdit.css";
import {db } from '../../components/database/firebase';



class ProductEdit extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         data:props.data
    //     }

    // }
    state ={
        products: null
    }
    componentDidMount(props){
        console.log('mounted')
        //console.log(props.data)
        db.collection('Products').where("name","==",
        "Lemon Tea").get()
      
        .then( snapshot => {
            const products = []
            snapshot.forEach( doc => {
                const data = doc.data()
                products.push(data)
            })
            this.setState({ products: products})
                console.log(snapshot)     
        })
        .catch( error => console.log(error) )
    }
    render(){
return (
    <div className="productedit">
    <h1 className="producttitle"> Products</h1>
{
    this.state.products 
    && 
   this.state.products.map( e =>
  {
        return(
            <ul className="productlist">
            <li className="productlistitm">
                    <img src= {e.image} alt="" className="productimage" />
                <div className="productuser">
    <span className="productusername" >{e.name}</span>
    <span className="productusertitle"> {e.price}</span>
    {/* <span className="productusername" >{props}</span> */}

    </div>
</li>
</ul> 
)
}) }
</div>
    // <div className="productedit">
    // <h1 className="productedittitle">Product Edit</h1>
    
    // <form className="producteditform">
    //     <div className="productedititem">
    //     <label> Image </label>
    //     <input type="text" />
    //     </div>
    //     <div className="productedititem">
    //     <label> Brand </label>
    //     <input type="text" />
    //     </div>
    //     <div className="productedititem">
    //     <label> Description </label>
    //     <input type="text"  />
    //     </div>
    //     <div className="productedititem">
    //     <label> ProductId </label>
    //     <input type="number" />
    //     </div>
    //     <div className="productedititem">
    //     <label> Name</label>
    //     <input type="text" />
    //     </div>
    //     <div className="productedititem">
    //     <label> Price </label>
    //     <input type="number" />
    //     </div>
    // </form>
    // <input type="submit" className="bu" />
    // </div>
                
);
}
}
export default ProductEdit