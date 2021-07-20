import {MdSubject} from "react-icons/md"
import {Form,InputGroup} from "react-bootstrap"
import validation from "../../function/validation"


function Subject(props) {
    return <>  
        <div>
        <InputGroup hasValidation>
            <InputGroup.Text><MdSubject/></InputGroup.Text>
            <Form.Control 
                as="select" 
                custom 
                name ="subject" 
                isInvalid = {props.inputs["subject"].inValid}
                onChange={(e)=>{props.setInputs(validation(e.target,props.inputs))}}>
                    <option value="">בחר נושא</option>
                    <option value="התחברות לאתר">התחברות לאתר</option>
                    <option value="הזמנה מהאתר">הזמנה מהאתר</option>
                    <option value="מוצר פגום">מוצר פגום</option>
                    <option value="משלוח מתעכב">משלוח מתעכב</option>
                    <option value="אחר">אחר...</option>
            </Form.Control>
            {props.inputs["subject"].errors.map((value,index)=>
            {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
        </InputGroup>
        </div>
    </>
}

export default Subject