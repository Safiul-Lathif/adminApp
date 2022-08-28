
import React from "react";
import { db } from "../../components/database/firebase";
import "./order.css";
class Orders extends React.Component{ 
    state ={
        orders: null
    }
    componentDidMount(){
        console.log('mounted')
        db.collection('Orders')
        .get()
        .then( snapshot => {
            const orders = []
            snapshot.forEach( doc => {
                const data = doc.data()
                orders.push(data)
            })
            this.setState({ orders: orders})
                console.log(snapshot)     
        })
        .catch( error => console.log(error) )
    }
    render(){
        const Button = ({ type }) => {
            return <button className= {"Widgetlgbutton " + type }> {type} </button>;
        };
        return(
            
            <div className="widgetlg">
            <h1 className="producttitle"> orders</h1>
            <table className="widgetlgtable">
            <tr className="widgetlgtr">
            <th className="widgetlgth">order ID</th>
            <th className="widgetlgth">Date</th>
            <th className="widgetlgth">Amount</th>
            <th className="widgetlgth">Status</th>
            </tr>
            {
                this.state.orders && 
                this.state.orders.map( e => {
                    return(
                        <tr className="widgetlgtr1">
                            <td className="widgetlgamount1">
                                
                                {e.Id}
                            </td>
                            <td className="widgetlgdate1">{e.createdAt}</td>
                            <td className="widgetlgamount1">{e.cartTotal}</td>
                            <td className="widgetlgstatus1"><Button type={e.paymentMode} /> </td>
                        </tr>
                            )
            })
            }
        </table>
        </div>
        )
            }

}
export default Orders