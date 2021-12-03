import React from "react";
import { Link } from "react-router-dom";
const Head = () =>{
    return(
        <div>
            <Link className="button" to="/">Home</Link>
            <Link className="button" to="/product/list">All product</Link>
        </div>
    )
}
export default Head; 