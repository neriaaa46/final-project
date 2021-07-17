import {Container,Row,Form,Button,Col} from "react-bootstrap"
import {Link, useParams} from "react-router-dom"
import "../css/product.css"
import {getProductById, sendImages, pathImages} from "../Dal/api"
import { useState, useEffect } from "react"


function Product(props){

    const {id} = useParams()
    const [product, setProduct] = useState({})
    const [numImagesMatching, setNumImagesMatching] = useState("")
    const [filesImages, setFilesImages] = useState("")

    useEffect(() => { 
        getProduct()
    },[])

    async function getProduct(){
        try{
            let newProduct = await getProductById(id)
            setProduct(newProduct)
        }
        catch(error){
            console.log("error")
        }
}


async function addProductToLocalstorge(){
    if(filesImages.length !== product.quantityImages){
        setNumImagesMatching("מספר התמונות אינו תואם")
    } else{

        const imagesName = await sendAllImages()
        if(imagesName){
            props.setNummberOfCartProducts(props.numOfCartProducts+1)
            const {description, active, quantityImages, categoryId,...productDetails} = product
            productDetails["imagesProduct"] = imagesName

            if(localStorage.getItem("cart")){
                const cart = JSON.parse(localStorage.getItem("cart"))
                cart.push(productDetails)
                localStorage.setItem("cart",JSON.stringify(cart))

            }   else {
                localStorage.setItem("cart",JSON.stringify([productDetails]))
            }
        }
    }
}


async function sendAllImages(){
    const imagesToUplod = new FormData()
    for(let i=0 ; i < filesImages.length ; i++ ){
        imagesToUplod.append('image',filesImages[i])
    }
    const {status, images} = await sendImages(imagesToUplod)
    if(status === "ok"){
        return images
    } 
    return false
}



function addImages(files){
    if(files.length !== product.quantityImages){
        setNumImagesMatching("מספר התמונות אינו תואם")
        setFilesImages([])
    } else{
        setNumImagesMatching("")
        setFilesImages([...files])
    }
}


return <>
    <Container className='mt-5'>
        <Row className="justify-content-around card-product">

            <Col xs={12} md={6}>
                <img className="img-fluid" alt="product" src={`${pathImages}${product.image}`} width="300px"></img>
                <h2 className="mt-2 mb-5 mr-5"> מחיר - {product.price} &#8362;</h2>
            </Col>

            <Col xs={12} md={6}>
                <h3 className="mb-2">שם המוצר : {product.name}</h3>
                <h5 className="mb-4">גודל המוצר : {product.size} ס"מ</h5>
                <p className="description mb-4">{product.description}</p>

                <Form.Group controlId="formFileMultiple" className="input">
                    <Form.Label><b>העלה {product.quantityImages} תמונות</b></Form.Label>
                    <Form.Control type="file" multiple onChange={(e)=>addImages(e.target.files)}/>
                    <small className="text-danger">{numImagesMatching}</small>
                </Form.Group> 

                {!props.isAdmin&&<Row>
                    <Button className="ml-2  mb-2" variant="light" onClick={()=>addProductToLocalstorge()}>הוסף לסל שלי</Button>
                    <Link to="/myProducts"><Button className="" variant="light">חזור למוצרים שלנו</Button></Link>
                </Row>}
            </Col>
        </Row>   
    </Container>

</>
}

export default Product

