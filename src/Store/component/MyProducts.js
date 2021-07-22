import {Card,Container,Row,Col} from "react-bootstrap"
import "../css/index.css"
import { useHistory } from "react-router-dom"
import {useState,useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import {FaEdit} from "react-icons/fa"
import {pathImages, deleteProduct, getProducts} from "../Dal/api"



function MyProducts(props){

    const [products,setProducts] = useState([])
    const history = useHistory()
    
    useEffect(() => { 
        getAllProducts()
    },[])

    
    async function getAllProducts(){
        try{
            let isAdmin = false
            if(localStorage.getItem("user")){
                const {admin} = JSON.parse(localStorage.getItem("user"))
                isAdmin = admin
            }
            let newArrayProducts = await getProducts(isAdmin)
            setProducts([...newArrayProducts])
        }
        catch(error){
            console.log(error.message)
        }
    }

    async function changeActive(productId, active){
       const {status, message} = await deleteProduct(productId, {active})
       if(status==="ok"){
        getAllProducts()
       }
    }
    

    return <>
      <Container className="d-flex flex-wrap mx-auto mt-5">
         <Row>
            {products.map((product,index)=>{
                return <Col xs={8} md={4} lg={3} key={index} className="mb-3 mx-auto mx-md-0">
                     <Card className="card-myProducts">
                        <div onClick={()=>{history.push(`/product/${product.productId}`)}}>
                            <Card.Img variant="top" src ={`${pathImages}${product.image}`}/>
                        </div>
                        <Card.Body className="card-myProducts-body">
                        <h5 className="text-center">{product.name}</h5>
                            <h6 className="text-center">
                                גודל - {product.size} ס"מ
                            </h6>
                            <h5 className="text-center">
                            מחיר - {product.price} &#8362;
                            </h5>
                        </Card.Body>
                            {!!props.isAdmin&&<Row className="flex-row-reverse">
                            {!product.active&&<FontAwesomeIcon icon={faEye} size={"lg"} className="ml-4 mb-2 icon-card my-product-icon" onClick={()=>changeActive(product.productId, product.active)}/>}
                            {!!product.active&&<FontAwesomeIcon icon={faEyeSlash} size={"lg"} className="ml-4  mb-2 icon-card my-product-icon" onClick={()=>changeActive(product.productId, product.active)}/>}
                            <FaEdit size={22} className="ml-2 icon-card my-product-icon" onClick={()=>{history.push(`/editProduct/${product.productId}`)}}/>
                        </Row>}
                     </Card>
                 </Col>
            })}
         </Row>              
        </Container>
    </>
}

export default MyProducts