import {InputGroup,Form} from "react-bootstrap"




function HeaderProduct(){
    return <>
        <InputGroup hasValidation>
        <Form.Control 
        type="text" 
        name="headerProduct"
        placeholder="כותרת למוצר"/>
        </InputGroup>
    </>
}

export default HeaderProduct