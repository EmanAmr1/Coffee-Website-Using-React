import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import axios from 'axios';
const Products = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`https://api.sampleapis.com/coffee/hot`, {
                    params: {

                    },
                });

                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching Products:', error);
            }
        };
        fetchProducts();
    }, []
    );
    return (

        <>
            <div>Products</div>
            <div className="container-fluid">
                <div className="row justify-content-center ">
                    <div className="d-flex flex-lg-row flex-md-row flex-sm-column justify-content-center  flex-wrap col-12">
                        {product.map((product, index) => (<ProductCard key={index} productItem={product} />))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products