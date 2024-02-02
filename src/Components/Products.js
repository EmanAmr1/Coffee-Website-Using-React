import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import axios from 'axios';
import '../CSS/ProductsCss.css'
import { Form } from "react-bootstrap";
import Pagination from 'react-bootstrap/Pagination';

const Products = () => {

    const [product, setProduct] = useState([])

//search
    const [search, setSearch] = useState("")

    //category
    const [selectedCategory, setSelectedCategory] = useState("");
    const categories = ["Coffee", "Espresso", "Choklad", "Te", "Mjölk", "Is", "Citronsaft"]

    //pagination
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = product.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = product.slice(startIndex, endIndex);

    const paginationItems = [];
    for (let number = 1; number <= totalPages; number++) {
        paginationItems.push(
            <Pagination.Item
                key={number}
                active={number === currentPage}
                onClick={() => setCurrentPage(number)}
            >
                {number}
            </Pagination.Item>,
        );
    }

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





            <div className="category-buttons">

                <button
                    className={`${selectedCategory === '' ? 'selected-button' : ''} my-4`}
                    onClick={() => setSelectedCategory('')}
                >
                    All
                </button>
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`${selectedCategory === category ? 'selected-button' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="container-fluid">
                <div className="row justify-content-center ">




                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2 ms-5"
                        aria-label="Search"
                        style={{ width: '50%', border: '3px solid black' }}
                        onChange={(e) => setSearch(e.target.value)}
                    />


                    <div className="d-flex flex-lg-row flex-md-row flex-sm-column justify-content-center  flex-wrap col-12">
                        {currentData.filter((product) => {
                            return (search.toLowerCase() === '' ? product : product.title.toLowerCase().includes(search))
                                && (selectedCategory === '' || product.ingredients.includes(selectedCategory))
                        })
                            .map((product, index) => (<ProductCard key={index} productItem={product} />))}
                    </div>


                    <p className="my-4 ms-5 pag">

                        <Pagination className="pagi">{paginationItems}</Pagination>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Products