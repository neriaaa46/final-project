import {MdSubject} from "react-icons/md"
import {Form,InputGroup} from "react-bootstrap"
import validation from "../../function/validation"


function Subject(props) {
    return <>   
             <InputGroup hasValidation>
                <InputGroup.Text><MdSubject/></InputGroup.Text>
                <Form.Control 
                    as="select" 
                    custom 
                    name ="subject" 
                    isInvalid = {props.inputs["subject"].inValid}
                    onChange={(e)=>{props.setInputs(validation(e.target,props.inputs))}}>
                        <option value="">בחר נושא</option>
                        <option value="1">התחברות לאתר</option>
                        <option value="2">הזמנה מהאתר</option>
                        <option value="3">מוצר פגום</option>
                        <option value="4">משלוח מתעכב</option>
                        <option value="5">אחר...</option>
                </Form.Control>
                {props.inputs["subject"].errors.map((value,index)=>
                {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
            </InputGroup>
    </>
}

export default Subject