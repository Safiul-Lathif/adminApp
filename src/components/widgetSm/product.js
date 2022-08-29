
import React from "react";
import { db }from '../database/FireBase'
import "./Product.css";
class ProductName extends React.Component{
    state ={
        products: null
    }
    componentDidMount(){
        console.log('mounted')
        db.collection('Products')
        .get()
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
        return(
            <div className="products">
                <h1 className="producttitle"> Products</h1>
            {
                this.state.products && 
                this.state.products.map( e => {
                    return(
                        <ul className="productlist">
                        <li className="productlistitm">
                                <img src= {e.image} alt="" className="productimage" />
                            <div className="productuser">
                <span className="productusername" >{e.name}</span>
                <span className="productusertitle"> {e.price}</span>
                </div>
        </li>
        </ul> 
        )
        }) }
            </div>
        )
    }
}
export default ProductName