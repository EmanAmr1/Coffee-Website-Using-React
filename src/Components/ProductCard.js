import Card from 'react-bootstrap/Card';
import '../CSS/ProductCardCss.css'
import Button from 'react-bootstrap/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { addToFav, removeFromFav } from '../store/FavSlice';
import { useDispatch, useSelector } from 'react-redux';


const ProductCard = ({ productItem }) => {

    const dispatch = useDispatch();
    const yourfav = useSelector((state) => state.favoritesCoffee.favCoffees);

    const isCoffeInYourFav = yourfav.some((someFavCoffee) => someFavCoffee.id === productItem.id)

    const handleToggleFavorite = () => {
        if (isCoffeInYourFav) {
            dispatch(removeFromFav(productItem.id));


        } else {
            dispatch(addToFav(productItem));

        }
    };


    const navigate = useNavigate();

    return (

        <>



            <Card className=' col-2 mx-1 my-1 myCard'>
                <Card.Img variant="top" src={productItem.image} />
                <Card.Body>
                    <Card.Title>{productItem.title}</Card.Title>
                    <Button variant="outline-warning" size="sm">
                        Order
                    </Button>{' '}
                </Card.Body>
                <Card.Footer>

                    <small className="favbtn"><button className='details' onClick={() => navigate(`/CoffeeDetails/${productItem.id}`)}  >More</button>   <button style={{ border: 'none' }} onClick={handleToggleFavorite}>
                        {isCoffeInYourFav ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                    </button>
                    </small>
                </Card.Footer>
            </Card>



        </>

    )


}

export default ProductCard