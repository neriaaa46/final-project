import {Form,InputGroup} from "react-bootstrap"


function SizeOfImagesProduct(){
    return <>
        <InputGroup hasValidation>
        <Form.Control 
        type="text" 
        name="size"
        placeholder="גודל המוצר" />
    </InputGroup>
    </>
}

export default SizeOfImagesProduct