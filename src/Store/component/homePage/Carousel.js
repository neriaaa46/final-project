import {Carousel, Container} from 'react-bootstrap'
import "../../css/index.css" 


function CarouselImages(){
    return <Container className="carousel-home-page">
                <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src='/img/carousel1.jpg'
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className="carousel-text-h">איננו זוכרים ימים, אנו זוכרים רגעים</h3>
                    <p className="carousel-text-p">BLOCK-PIC מנציחים לך את הזכרון</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src='/img/carousel2.jpg'
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3 className="carousel-text-h">אתה תתעד את הרגע אנחנו נדאג שתזכור אותו </h3>
                    <p className="carousel-text-p">BLOCK-PIC מנציחים לך את הזכרון</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src='/img/carousel3.jpg'
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3 className="carousel-text-h">תמונה אחת שווה אלף מילים</h3>
                    <p className="carousel-text-p">BLOCK-PIC מנציחים לך את הזכרון</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src='/img/carousel5.jpg'
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3 className="carousel-text-h">מתנה בלתי נשכחת לכל אירוע</h3>
                    <p className="carousel-text-p">BLOCK-PIC מנציחים לך את הזכרון</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </Container>
}

export default CarouselImages 


