import {Form} from "react-bootstrap"



function ImageProduct(){
    return <>
       <Form>
            <Form.Group>
                <Form.File id="exampleFormControlFile1" label="תמונה המייצגת את המוצר" />
            </Form.Group>
        </Form>
    </>
}

export default ImageProduct