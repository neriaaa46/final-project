import {Container,Row,Col,Button} from "react-bootstrap"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import validation from "../function/validation"
import { editDataProduct ,getProductById} from "../Dal/api"
import NameProduct from "./addProductComponent/NameProduct"
import ImageProduct from "./addProductComponent/ImageProduct"
import NumOfImages from "./addProductComponent/NumOfImages"
import PriceProduct from "./addProductComponent/PriceProduct"
import SizeOfImagesProduct from "./addProductComponent/SizeOfImagesProduct"
import TextProduct from "./addProductComponent/TextProduct"
import Category from "./addProductComponent/Category"


function EditProduct(){

    const {productId} = useParams()
    const [editProduct, setEditProduct] = useState({
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
                required: false, 
                pattern: false  
            }
        }
    })

    useEffect(() => { 
        getProduct()
    },[])

    async function getProduct(){
        try{
            const prodcutDetails = await getProductById(productId)
            for (const key in editProduct) {
                if(key !== "image"){
                    editProduct[key].value = prodcutDetails[key]
                }
            }
            setEditProduct({...editProduct})
            console.log(editProduct);

        }
        catch(error){
            console.log(error.message)
        }
    }


    async function edit(){
        let isValid = true
        const product = {}

       for (const key in editProduct) {

            product[key] = editProduct[key].value

            setEditProduct(validation({value:editProduct[key].value, name:key}, editProduct))
            if (editProduct[key].errors.length !==0){
                isValid = false
            }
        }

        if(isValid){ 
          
            const product = new FormData()
            product.append('name', editProduct.name.value)
            product.append('categoryId', editProduct.categoryId.value)
            product.append('size', editProduct.size.value)
            product.append('description', editProduct.description.value)
            product.append('price', editProduct.price.value)
            product.append('quantityImages', editProduct.quantityImages.value)
            product.append('productId',productId)
            if(editProduct.image.value){
                product.append('product',editProduct.image.value)
            }
            
            const {status, message} = await editDataProduct(product)
            if(status==="ok"){
                console.log(status)
            } else{
                console.log(message)
            }
        }
    }


    return <>
    <Container>
        <h1>ערוך מוצר</h1>

            <Row className="justify-content-center mt-3">
                <Col xs={10} md={6} lg={4}>
                    <Col className="input">
                        <NameProduct product={editProduct} setProduct={setEditProduct} name={editProduct.name.value}/>
                    </Col>
                    <Col className="input">
                        <PriceProduct product={editProduct} setProduct={setEditProduct} price={editProduct.price.value}/>
                    </Col>
                    <Col className="input">
                        <Category product={editProduct} setProduct={setEditProduct} categoryId={editProduct.categoryId.value}/>
                    </Col>
                </Col>

                <Col xs={10} md={6} lg={4}> 
                    <Col className="input">
                        <NumOfImages product={editProduct} setProduct={setEditProduct} quantityImages={editProduct.quantityImages.value}/>
                    </Col>
                    <Col className="input">
                        <SizeOfImagesProduct product={editProduct} setProduct={setEditProduct} size={editProduct.size.value}/>
                    </Col>
                    <Col xs={10}>
                        <ImageProduct product={editProduct} setProduct={setEditProduct}/>
                    </Col>
                </Col>
            </Row>   

            <Row className="justify-content-center">
                <Col xs={10} md={8}>
                    <TextProduct product={editProduct} setProduct={setEditProduct} description={editProduct.description.value}/>
                </Col>
            </Row>           
            <Row className="justify-content-center mt-4 mb-3">
                <Button variant="light" className="col-4 col-md-2" onClick={()=>edit()}>ערוך מוצר</Button>
            </Row>
              
    </Container>
    </>
}

export default EditProduct