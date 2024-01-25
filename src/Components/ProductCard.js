import Card from 'react-bootstrap/Card';
import '../CSS/ProductCardCss.css'
const ProductCard = ({ productItem }) => {

    return (

        <>



            <Card className=' col-2 mx-1 my-1 myCard'>
                <Card.Img variant="top" src={productItem.image} />
                <Card.Body>
                    <Card.Title>{productItem.title}</Card.Title>
                   
                </Card.Body>
                <Card.Footer>
                    <small className="favbtn"><button className='details'>More Details</button>  <i className="fa-regular fa-heart"></i></small>
                </Card.Footer>
            </Card>



        </>

    )


}

export default ProductCard