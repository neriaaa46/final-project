


function clearInputsDetails(inputsDetails){
    
    inputsDetails["email"].inValid = false
    inputsDetails["email"].value = ""
    inputsDetails["email"].errors = []

    inputsDetails["password"].inValid = false
    inputsDetails["password"].value = ""
    inputsDetails["password"].errors = []

    inputsDetails["confirmPassword"].inValid = false
    inputsDetails["confirmPassword"].value = ""
    inputsDetails["confirmPassword"].errors = []

    inputsDetails["firstName"].inValid = false
    inputsDetails["firstName"].value = ""
    inputsDetails["firstName"].errors = []

    inputsDetails["lastName"].inValid = false
    inputsDetails["lastName"].value = ""
    inputsDetails["lastName"].errors = []

    inputsDetails["textArea"].inValid = false
    inputsDetails["textArea"].value = ""
    inputsDetails["textArea"].errors = []

}

export default clearInputsDetails