
let form = document.getElementById("form")

    const removeClass = (inputActual) => {
        setTimeout(() => {
            inputActual.classList.remove("input__invalid");
            inputActual.classList.remove("input__valid");
        }, 2000);
    }
    const addClassInvalid = (inputActual) => {
        inputActual.classList.remove("input__valid")
        inputActual.classList.add("input__invalid")
       // console.log(inputActual)
        showError(inputActual)   
    }
    const addClassValid = (inputActual) => {
        inputActual.classList.add("input__valid")
        inputActual.classList.remove("input__invalid")
    }

    const showError = (input) => {
        switch (input) {
            case phone:
                document.querySelector(".span__tel").dataset.content = "*This fild only accept numbers";
                break;
            case email:
                document.querySelector(".span__email").dataset.content = "*Enter a valid email address";
                break;
            case lastName:
                document.querySelector(".span__lastName").dataset.content = "*Only accepts uppercase and lowercase letters"
                break;
            case names:
                document.querySelector(".span__name").dataset.content = "*Only accepts uppercase and lowercase letters"
                break;
            case rePassword:
                document.querySelector(".span__rePassword").dataset.content = "*Password must be the same"
                break;
            default:
                console.log("no entra")
                break;
        } 

    }

    

    /* funcion manejadora del evento submit */
    const validation = (event) =>{       
        document.querySelectorAll(".form__input").forEach(element => {
              let inputActual = element;
              if(inputActual.value === '' || inputActual === null ){
                event.preventDefault();    
                inputActual.classList.add("input__invalid");
                removeClass(inputActual)
                document.querySelectorAll("span").forEach((el)=> el.dataset.content = "*This field is required")
              }       
        });
    };
    /* Funcion manejadora del evento input que verifica los datos ingresados */
    const detectInputValue = (e) => {
        //console.log(e.target.id)
        /* if(e.target.value !== ''){
           e.target.classList.remove("input__invalid");
           e.target.classList.add("input__valid");
        } */
        let input = e.target,
            password = 'a'
   
        if(input.id === "phone"){        
            (/^[0-9]+$/ig).test(input.value) ? addClassValid(input) : addClassInvalid(input);
            
        }else if(input.id === "email"){
            (/\w+\@\w{3,}\.\w{2,3}/ig).test(input.value) ?  addClassValid(input) : addClassInvalid(input)

        }else if(input.id === "names" || input.id === "lastName"){
            (/^[a-z]+$/ig).test(input.value) ?  addClassValid(input) : addClassInvalid(input);
        
        }
        else if(input.id === "password" ){
            input.value.length > 6 && input.value.length < 20 ? addClassValid(input) : addClassInvalid(input)
            
        }else if(input.id === "rePassword"){
            let passwordValue = document.querySelector("#password").value  
            passwordValue === input.value ? addClassValid(input) : addClassInvalid(input)
        }
        else{
            input.classList.add("input__invalid");
           // removeClass(e.target)
        }
    }

document.querySelectorAll(".form__input").forEach(element => element.addEventListener("input",detectInputValue))

form.addEventListener("submit", validation);
