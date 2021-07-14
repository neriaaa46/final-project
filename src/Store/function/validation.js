

function validation({value,name},inputsDetails){

    const newErrors = []
    let inValid = false
    const {validations} = inputsDetails[name]
    
    if(validations.required && !value){
      newErrors.push(`נדרש - ${inputsDetails[name].name}`)
      inValid = true
    }

    if(validations.pattern && !validations.pattern.test(value)){
          newErrors.push(`${inputsDetails[name].name} - ${inputsDetails[name].appropriateError}`)
          inValid = true
    }

    if(name==="confirmPassword" && inputsDetails["password"].value !== value){
        newErrors.push("אין התאמה לסיסמא שנבחרה")
        inValid = true
    }
    
    inputsDetails[name].inValid = inValid
    inputsDetails[name].value = value
    inputsDetails[name].errors = newErrors

   return  {...inputsDetails}

}

export default validation