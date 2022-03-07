import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    Col,
    Row,
    Spinner
} from 'reactstrap';

const Jokes = () => {

    const [data, setData] = useState([]);
    const [loading, setloading] = useState(true);
    const varients = (['success', 'danger', 'info', 'primary', 'warning',]);

    useEffect(() => {

        axios.get("https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10")
            .then(res => {
                setData(res.data.jokes);
                setloading(false);
                // console.log(res.data.jokes);
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [])


    const Rndmvarients = Math.floor(Math.random() * varients.length);
    const colors = varients[Rndmvarients];


    return (
        <>
            {/* <Topbar /> */}

            {
                loading
                    ?
                    <div className="position-absolute top-50 start-50 translate-middle">
                        <Spinner
                            color="primary"
                            style={{ width: '3rem', height: '3rem' }}
                        >
                            Loading...
                        </Spinner>
                    </div>
                    :

                    <div className='px-4 py-4'>

                        <Row>
                            {
                                data.map((elem) => {
                                    const { category, joke, id } = elem;

                                    return (

                                        <Col className='col' sm="4" key={id}>
                                            <Card
                                                body
                                                className='jokesCard mx-2 my-2 '
                                                color={colors}
                                                inverse
                                                style={{ height: '250px' }}

                                            >

                                                <CardTitle tag="h3" className="text-center" >
                                                    {category}
                                                </CardTitle>
                                                <CardBody >
                                                    <CardText className='fw-bold'>
                                                        {joke}
                                                    </CardText>
                                                </CardBody>

                                            </Card>
                                        </Col>

                                    )
                                })
                            }

                        </Row>
                    </div>

            }



        </>
    )
}

export default Jokes
