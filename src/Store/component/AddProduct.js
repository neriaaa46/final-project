import {Container,Row,Col,Button} from "react-bootstrap"
import { useState } from "react"
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
        category: {
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
        quntityOfImages: {
            value: '',
            name:"מספר תמונות הנדרש להעלות",
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

            setNewProduct(validation({value:newProduct[key].value,name:key},newProduct))
            if (newProduct[key].errors.length !==0){
                isValid = false
            }
        }

        if(isValid){ 
            addProdcut(product)
        }
    }


    return <>
    <Container>
        <h1>הוספת מוצר :</h1>
            
            <Row className="justify-content-center">
                <Col xs={10} md={4}>
                    <Col className="mt-3">
                        <NameProduct newProduct={newProduct} setNewProduct={setNewProduct}/>
                    </Col>
                    <Col className="mt-3">
                        <PriceProduct newProduct={newProduct} setNewProduct={setNewProduct}/>
                    </Col>
                    <Col className="mt-3">
                        <Category newProduct={newProduct} setNewProduct={setNewProduct}/>
                    </Col>
                </Col>

                <Col xs={10} md={4}>
                    <Col className="mt-3">
                        <NumOfImages newProduct={newProduct} setNewProduct={setNewProduct}/>
                    </Col>
                    <Col className="mt-3">
                        <SizeOfImagesProduct newProduct={newProduct} setNewProduct={setNewProduct}/>
                    </Col>
                    <Col className="mt-3">
                    <ImageProduct newProduct={newProduct} setNewProduct={setNewProduct}/>
                    </Col>
                </Col>
            </Row>   

            <Row className="justify-content-center mt-3">
                <Col xs={10} md={8}>
                    <TextProduct newProduct={newProduct} setNewProduct={setNewProduct}/>
                </Col>
            </Row>           
            <Row className="justify-content-center mt-3 mb-3">
                <Button variant="light" className="col-4 col-md-2 ml-4" onClick={()=>addNewProduct()}>הוסף מוצר</Button>
            </Row>
              
    </Container>
    
    </>
}

export default AddProduct