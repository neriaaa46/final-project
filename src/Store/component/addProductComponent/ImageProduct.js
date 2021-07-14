import {Form, InputGroup} from "react-bootstrap"
import validation from "../../function/validation"


function ImageProduct(props){
    return <>
      <div style={{height:"115px"}}>
      <InputGroup hasValidation>
                <Form.File  
                label="תמונה המייצגת את המוצר"
                name="image" 
                onChange={(e)=>{props.setProduct(validation({value:e.target.files[0], name:e.target.name},props.product))}}/>
                {props.product["image"].errors.map((value,index)=>
                {return <small key={index} className="text-danger"> {value} </small>})}
      </InputGroup>
      </div>
    </>
}

export default ImageProduct