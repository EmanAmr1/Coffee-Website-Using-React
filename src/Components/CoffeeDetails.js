import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const CoffeeDetails = () => {


    const params = useParams();
    const [coffee, setCoffee] = useState({});

    useEffect(() => {

        axios
            .get(`https://api.sampleapis.com/coffee/hot/${params.id}`)
            .then((res) => setCoffee(res.data))
            .catch((err) => console.log(err))

    }, [params.id])


    return (

        <>
            <div className="container">
                <div className="row">
                    <div className="d-flex flex-md-row flex-lg-row  col-lg-12  flex-column  justify-content-cente">
                        <div className="col-lg-6  mx-1 my-1">
                            <img className="col-lg-7" src={coffee.image} alt="" />


                        </div>
                        <div className="col-lg-6">


                            <h2>{coffee.title}</h2>
                            <p style={{ fontSize: '30px' }}>{coffee.description}</p>
                            <p><span style={{ color: 'brown' , fontWeight: 'bold' }}>Type: </span>{coffee.ingredients}</p>
                            <Card.Footer>
                                <small className="favbtn justify-content-center"><button className='details mx-3' style={{ width: '50%' }} >Order Now</button>  <i className="fa-regular fa-heart"></i></small>
                            </Card.Footer>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )


}

export default CoffeeDetails;
