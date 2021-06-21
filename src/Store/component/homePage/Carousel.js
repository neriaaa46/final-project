import {Carousel, Container} from 'react-bootstrap'
import "../../css/carousel.css" 
import img1 from "../../img/carousel1.jpg"
import img2 from "../../img/carousel2.jpg"
import img3 from "../../img/carousel3.jpg"

function CarouselImages(){
    return <Container className="carousel">
                <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= {img1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </Container>
}

export default CarouselImages 


