const validation = (event) =>{  
    event.preventDefault()

}

const getFields = () => {
    let formInputs = document.querySelectorAll(".form__input")
    formInputs.forEach((e)=>{
        let input = document.getElementById(e.id)
        console.log(input.value)
    })
}

let form = document.getElementById("form")
window.addEventListener("change",getFields)
form.addEventListener("submit",validation)
