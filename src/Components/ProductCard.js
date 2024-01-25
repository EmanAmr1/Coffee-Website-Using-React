import Card from 'react-bootstrap/Card';
import '../CSS/ProductCardCss.css'
import Button from 'react-bootstrap/Button';
import React from 'react';
const ProductCard = ({ productItem }) => {
    
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
                    <small className="favbtn"><button className='details'>More</button>  <i className="fa-regular fa-heart"></i></small>
                </Card.Footer>
            </Card>



        </>

    )


}

export default ProductCard