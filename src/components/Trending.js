import { Card, Container, Row, Col, Image } from 'react-bootstrap'
import duneImage from '../assets/images/trending/dune.jpg'
import everythingImage from '../assets/images/trending/everything.jpg'
import infiniteImage from '../assets/images/trending/infinite.jpg'
import jokerImage from '../assets/images/trending/joker.jpg'
import lightyearImage from '../assets/images/trending/lightyear.jpg'
import morbiusImage from '../assets/images/trending/morbius.jpg'

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className='text-white'>TRENDING MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className='movieWrapper' id='trending'>
                        <Card className="movieImage">
                            <Image src={duneImage} alt="Dune Movies" className='images' />
                            <div className='bg-dark'>
                                <div className='m-2 p-1 text-white'>
                                <Card.Title className='text-center'>Dune</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={everythingImage} alt="Dune Movies" className='images' />
                            <div className='bg-dark'>
                                <div className='m-2 p-1 text-white'>
                                <Card.Title className='text-center'>Everthing</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={infiniteImage} alt="Dune Movies" className='images' />
                            <div className='bg-dark'>
                                <div className='m-2 p-1 text-white'>
                                <Card.Title className='text-center'>Infinite</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={jokerImage} alt="Dune Movies" className='images' />
                            <div className='bg-dark'>
                                <div className='m-2 p-1 text-white'>
                                <Card.Title className='text-center'>Joker</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={lightyearImage} alt="Dune Movies" className='images' />
                            <div className='bg-dark'>
                                <div className='m-2 p-1 text-white'>
                                <Card.Title className='text-center'>Lightyear</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={morbiusImage} alt="Dune Movies" className='images' />
                            <div className='bg-dark'>
                                <div className='m-2 p-1 text-white'>
                                <Card.Title className='text-center'>Morbius</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container> 
        </div>
    )
}

export default Trending