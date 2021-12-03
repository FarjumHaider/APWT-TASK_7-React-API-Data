import React, {useState, useEffect} from "react";
import axios from "axios";
import Product from "./Product";


const AllProduct = ()=>{
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/product/list")
        .then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);

    return(
        <div>
        <table id="customers">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Code</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Stock date</th>
                <th></th>
            </tr>
    
      {
        posts.map((post) => <Product id={post.id} p_name={post.p_name} p_code={post.p_code} p_desc={post.p_desc} p_category={post.p_category} p_price={post.p_price} p_quantity={post.p_quantity} p_stock_date={post.p_stock_date} p_rating={post.p_rating} p_purchased={post.p_purchased}/>)
      }
      </table>
    


        </div>
    )

}
export default AllProduct; 