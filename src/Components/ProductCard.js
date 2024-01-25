import Card from 'react-bootstrap/Card';
const ProductCard = ({ productItem }) => {

    return (

        <>



            <Card className=' col-2 mx-1 my-1 '>
                <Card.Img variant="top" src={productItem.image} />
                <Card.Body>
                    <Card.Title>{productItem.title}</Card.Title>
                    <Card.Text>
                        {productItem.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{productItem.ingredients}</small>
                </Card.Footer>
            </Card>



        </>

    )


}

export default ProductCard