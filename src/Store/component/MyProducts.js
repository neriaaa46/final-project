import {Card,Container,Row,Col} from "react-bootstrap"
import "../css/product.css"
import {useState,useEffect} from "react"
import {getProducts} from "../Dal/api"
import { useHistory } from "react-router-dom"



function MyProducts(){

    const [products,setProducts] = useState([])
    const history = useHistory()
    
    useEffect(() => { 
        getProductsFromDal()
    },[])

    
    async function getProductsFromDal(){
        try{
            let newArrayProducts = await getProducts()
            setProducts([...newArrayProducts])
        }
        catch{
            console.log("error")
        }
    }
    
    

    return <>
     <Container className="d-flex flex-wrap mx-auto mt-5">
         <Row>
            {products.map((product,index)=>{ 
                return <Col xs={8} md={4} lg={3} key={index} className="mb-3 mb-3 mx-auto mx-md-0">
                     <Card className="card-myProducts" onClick={()=>{history.push(`/product/${product.id}`)}}>
                        <h4 className="text-center mb-3">{product.name}</h4>
                        <div>
                            <Card.Img variant="top" src = {product.image}/>
                        </div>
                        <Card.Body>
                            <h6 className="text-center">
                                גודל - {product.size}
                            </h6>
                            <h5 className="text-center">
                            מחיר - {product.price} &#8362;
                            </h5>
                        </Card.Body>
                     </Card>
                 </Col>
            })}
         </Row>              
        </Container>
    </>
}

export default MyProducts