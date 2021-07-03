import {Form, InputGroup} from "react-bootstrap"
import validation from "../../function/validation"


function ImageProduct(props){
    return <>
      <InputGroup hasValidation>
                <Form.File 
                id="exampleFormControlFile1" 
                label="תמונה המייצגת את המוצר"
                name="image" 
                onChange={(e)=>{props.setNewProduct(validation(e.target,props.newProduct))}}/>
                {props.newProduct["image"].errors.map((value,index)=>
                {return <small key={index} className="text-danger"> {value} </small>})}
        </InputGroup>
    </>
}

export default ImageProduct