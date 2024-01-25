import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
const ProductCard = ({productItem}) => {

    return (

        <>

            
                <Card className='d-flex col-2 mx-1 my-1 '>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>{productItem.title}</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
               
          

        </>

    )


}

export default ProductCard