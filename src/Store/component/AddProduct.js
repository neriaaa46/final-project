import {Container,Row,Col,Button,Alert} from "react-bootstrap"
import { useState, useEffect } from "react"
import { useHistory } from "react-router"
import validation from "../function/validation"
import { addProdcut } from "../Dal/api"
import NameProduct from "./addProductComponent/NameProduct"
import ImageProduct from "./addProductComponent/ImageProduct"
import NumOfImages from "./addProductComponent/NumOfImages"
import PriceProduct from "./addProductComponent/PriceProduct"
import SizeOfImagesProduct from "./addProductComponent/SizeOfImagesProduct"
import TextProduct from "./addProductComponent/TextProduct"
import Category from "./addProductComponent/Category"


function AddProduct(){

    const history = useHistory()
    useEffect(()=>{
        if(localStorage.getItem("user")){
            if(!JSON.parse(localStorage.getItem("user")).admin){
                history.push("/")
            }
        } else{
            history.push("/")
        }
    },[])


    const[addProductMessage,setAddProductMessage] = useState("")
    const [newProduct, setNewProduct] = useState({
        name: {
            value: '', 
            name:"שם מוצר",
            inValid:false,
            errors: [], 
            validations: {
                required: true, 
                pattern: false
            }
        }, 
        categoryId: {
            value: '',
            name:"קטגוריה",
            inValid:false,
            errors:[], 
            validations:{
                required: true, 
                pattern: false
            }
        },
        size: {
            value: '',
            name:"גודל",
            inValid:false,
            errors:[], 
            validations:{
                required: true, 
                pattern: false 
            }
        },
        description: {
            value: '',
            name:"תיאור",
            inValid:false,
            errors:[], 
            validations:{
                required: true, 
                pattern: false
            }
        },
        price: {
            value: '',
            name:"מחיר",
            inValid:false,
            errors:[], 
            validations:{
                required: true, 
                pattern: false  
            }
        },
        quantityImages: {
            value: '',
            name:"מספר תמונות",
            inValid:false,
            errors:[], 
            validations:{
                required: true, 
                pattern: false  
            }
        },
        image: {
            value: '',
            name:"תמונה",
            inValid:false,
            errors:[], 
            validations:{
                required: true, 
                pattern: false  
            }
        }
    })


    async function addNewProduct(){
        let isValid = true
        const product = {}

       for (const key in newProduct) {

            product[key] = newProduct[key].value

            setNewProduct(validation({value:newProduct[key].value, name:key}, newProduct))
            if (newProduct[key].errors.length !==0){
                isValid = false
            }
        }

        if(isValid){ 
           
            const product = new FormData()
            product.append('name', newProduct.name.value)
            product.append('categoryId', newProduct.categoryId.value)
            product.append('size', newProduct.size.value)
            product.append('description', newProduct.description.value)
            product.append('price', newProduct.price.value)
            product.append('quantityImages', newProduct.quantityImages.value)
            product.append('product', newProduct.image.value)
            
            const {status, message} = await addProdcut(product)
            if(status==="ok"){
                setAddProductMessage(message)
                setTimeout(() => {
                    setAddProductMessage("")
                }, 2000)
            } else{
                console.log(message)
            }
        }
    }


    return <>
    <Container>
        <h1>הוספת מוצר</h1>
            
            <Row className="justify-content-center mt-3">
                <Col xs={10} md={6} lg={4}>
                    <Col className="input">
                        <NameProduct product={newProduct} setProduct={setNewProduct}/>
                    </Col>
                    <Col className="input">
                        <PriceProduct product={newProduct} setProduct={setNewProduct}/>
                    </Col>
                    <Col className="input">
                        <Category product={newProduct} setProduct={setNewProduct}/>
                    </Col>
                </Col>

                <Col xs={10} md={6} lg={4}> 
                    <Col className="input">
                        <NumOfImages product={newProduct} setProduct={setNewProduct}/>
                    </Col>
                    <Col className="input">
                        <SizeOfImagesProduct product={newProduct} setProduct={setNewProduct}/>
                    </Col>
                    <Col xs={10} className="input">
                        <ImageProduct product={newProduct} setProduct={setNewProduct}/>
                    </Col>
                </Col>
            </Row>   

            <Row className="justify-content-center">
                <Col xs={10} md={8}>
                    <TextProduct product={newProduct} setProduct={setNewProduct}/>
                </Col>
            </Row>           
            <Row className="justify-content-center mt-3">
                <Button variant="light" className="col-4 col-md-2" onClick={()=>addNewProduct()}>הוסף מוצר</Button>
            </Row>
            <Row className="alert justify-content-center mb-4">
                {addProductMessage&&<Alert className="alert-message" variant="dark">{addProductMessage}</Alert>}
            </Row>
              
    </Container>
    </>
}

export default AddProduct