import { useEffect, useState } from "react"
import {InputGroup, Form} from "react-bootstrap"
import validation from "../../function/validation"
import { getCategorys } from "../../Dal/api"


function Category(props){

    const [categorys, setCategorys] = useState([])

    useEffect(async()=>{
        const allCategorys = await getCategorys()
        setCategorys(allCategorys)
    },[])

    return <>
    <div>
    <InputGroup hasValidation>
            <Form.Control 
                as="select" 
                value={props.categoryId}
                custom 
                name ="categoryId" 
                isInvalid = {props.product["categoryId"].inValid}
                onChange={(e)=>{props.setProduct(validation(e.target,props.product))}}>
                    <option value="">בחר קטגוריה</option>
                    {categorys.map((value, index)=>{
                        {console.log(categorys)}
                        return <option key = {index} value={value.categoryId}>{value.name}</option>
                    })}
            </Form.Control>
            {props.product["categoryId"].errors.map((value,index)=>
            {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
        </InputGroup>
    </div>
    </>
}


export default Category