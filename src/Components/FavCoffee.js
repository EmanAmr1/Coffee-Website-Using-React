import { addToFav, removeFromFav } from '../store/FavSlice';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const FavCoffee = () => {

    const dispatch = useDispatch();
    const yourfav = useSelector((state) => state.favoritesCoffee.favCoffees);
    const navigate = useNavigate();
   

    const handleRemoveFromFavorites = (coffeeId) => {
        dispatch(removeFromFav(coffeeId));
        
    };



    return (
        <>
          <div className="mt-5 d-flex flex-md-row flex-lg-row  col-lg-12  flex-column flex-wrap justify-content-center" >
            {yourfav.map((coffee) => (
                <Card key={coffee.id} className='col-2 mx-1 my-1 myCard'>
                    <Card.Img variant="top" src={coffee.image} />
                    <Card.Body>
                        <Card.Title>{coffee.title}</Card.Title>
                        <Button variant="outline-warning" size="sm">
                            Order
                        </Button>{' '}
                    </Card.Body>
                    <Card.Footer>
                        
                        <small className="favbtn">
                            <button className='details' onClick={() => navigate(`/CoffeeDetails/${coffee.id}`)}>
                                More
                            </button >{' '}
                            <button style={{border:'none'}} onClick={() => handleRemoveFromFavorites(coffee.id)}>
                        <i className="fa-solid fa-heart"></i>
                        </button>

                           
                        </small>
                    </Card.Footer>
                </Card>
               
            ))}
             </div>
        </>
    );
};

export default FavCoffee;