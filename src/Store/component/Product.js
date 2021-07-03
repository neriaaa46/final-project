import {Container,Row,Form,Button, Col} from "react-bootstrap"
import {Link, useParams} from "react-router-dom"
import "../css/product.css"
import {getProductById} from "../Dal/api"
import { useState, useEffect } from "react"


function Product(props){

    const {id} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => { 
        getProduct()
    },[])

    async function getProduct(){
        try{
            let newProduct = await getProductById(id)
            setProduct(newProduct)
        }
        catch{
            console.log("error")
        }
}


function addProductToLocalstorge(){
    
    props.setNummberOfCartProducts(props.numOfCartProducts+1)
    if(localStorage.getItem("cart")){
        const cart = JSON.parse(localStorage.getItem("cart"))
        cart.push(product)
        localStorage.setItem("cart",JSON.stringify(cart))
    } else {
        localStorage.setItem("cart",JSON.stringify([product]))
    }
}


return <>
    <Container className='mt-5'>
        <Row className="justify-content-around card-product">

            <Col xs={12} md={6}>
                <img className="img-fluid" alt="product" src={product.image} width="300px" ></img>
                <h2 className="mt-2 mb-5 mr-5"> מחיר - {product.price} &#8362;</h2>
            </Col>

            <Col xs={12} md={6}>
                <h3 className="mb-2">שם המוצר : {product.name}</h3>
                <h5 className="mb-4">גודל המוצר : {product.size}</h5>
                <p className="description mb-4">{product.description}</p>

                <Form.Group controlId="formFileMultiple">
                    <Form.Label><b>העלה {product.quntityOfImages} תמונות</b></Form.Label>
                    <Form.Control type="file" multiple/>
                </Form.Group> 

                <Row className="mt-5">
                    <Button className="ml-2  mb-2" variant="light" onClick={()=>addProductToLocalstorge()}>הוסף לסל שלי</Button>
                    <Link to="/myProducts"><Button className="" variant="light">חזור למוצרים שלנו</Button></Link>
                </Row>
            </Col>

        </Row>   
    </Container>

</>
}

export default Product

