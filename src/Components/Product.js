import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Product = (props) =>{
    return(
        <tr className="card_1">
            <td>{props.id}</td>
            <td>{props.p_name}</td>
            <td>{props.p_code}</td>
            <td>{props.p_desc}</td>
            <td>{props.p_category}</td>
            <td>{props.p_price}</td>
            <td>{props.p_quantity}</td>
            <td>{props.p_stock_date}</td>
            
            <Link className="buttonDetails" to={"/product/details/"+props.id+"/"+props.p_name}><p>details</p></Link>
        </tr>
        

    )
}
export default Product; 
