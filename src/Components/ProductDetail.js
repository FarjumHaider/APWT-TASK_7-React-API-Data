
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";



const ProductDetail = () => {
    const { name } = useParams();
    const { id } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/product/details/${id}/${name}`)
            .then(resp => {
                console.log(resp.data);
                setDetails(resp.data);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="column">
            <div className="card">
                <h1>Product details</h1>
                <h3>ID:{details.id}</h3>
                <h3>Name:{details.p_name}</h3>
                <h3>Code:{details.p_code}</h3>
                <h3>Category:{details.p_category}</h3>
                <h3>Price:{details.p_price}</h3>
                <h3>Quantity:{details.p_quantity}</h3>
                <h3>Stock date:{details.p_stock_date}</h3>
            </div>
        </div>

    )

}
export default ProductDetail;