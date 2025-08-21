import { useEffect , useState } from "react";
import ProductCard from "../components/ProductCard";
import API from "../api";

const Products = ({addToCart}) => {

    const [products , setProducts] = useState([]);

    useEffect (() => {
        API.get ("/products")
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err));
    },[]);

    return (

        <div className="container mt-4">
            <h2>Products</h2>
            <div className="row">
                {products.map((p) => (
                    <div className="col-md-3" key={p._id}>
                        <ProductCard product = {p} addToCart = {addToCart} />
                        </div>
                ))}
            
        </div>
        </div>
    )

}

export default Products;
