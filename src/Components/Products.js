import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import axios from 'axios';
import '../CSS/ProductsCss.css'
import { Form } from "react-bootstrap";
const Products = () => {

    const [product, setProduct] = useState([])
    const [search,setSearch]=useState("")


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
            <div className="d-flex justify-content-center my-5 ourPro" >Our Products </div>
            <div className="container-fluid">
                <div className="row justify-content-center ">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2 ms-5"
                        aria-label="Search"
                        style={{width:'50%',border:'3px solid black'}}
                        onChange={(e)=>setSearch(e.target.value)}
                    />
                    <div className="d-flex flex-lg-row flex-md-row flex-sm-column justify-content-center  flex-wrap col-12">
                        {product.filter((product)=> { return search.toLowerCase() === ''? product : product.title.toLowerCase().includes(search); })
                        .map((product, index) => (<ProductCard key={index} productItem={product} />))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products