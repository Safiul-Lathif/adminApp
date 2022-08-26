import React from "react";
import { db } from "../../components/database/firebase";
import "./productLists.css";
import { Link } from "react-router-dom";
class ProductName extends React.Component{ 
    state ={
        products: null,
        data:''
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
            
            <div className="widgetlg">
                <div className="s">
                <h1 className="producttitle"> Products</h1>
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
            {
                this.state.products && 
                this.state.products.map( e => {
                    
                    return(
                        <tr className="widgetlg1">
                            <td className="widgetlguser">
                            <img src= {e.image} alt="" className="widgetlgimage1" />
                            <span className="widetlgname1">{e.name}</span>
                            </td>
                            <td className="widgetlgtr1">2 may 2022</td>
                            <td className="widgetlgtr1">{e.price}</td>
                            <td className="widgetlgtr1">{e.brand} </td>
                            <td className="widgetlgtr1">  
                            <Link to="/ProductEdit" 
                            // state={{data:e.name}}
                            >
                            <button className="addProduct2" >Edit</button>
                            </Link>   </td>
                        </tr>
                            )
            })
            }
            </table>
            </div>
        )
    }
}
export default ProductName