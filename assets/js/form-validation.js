let form = document.getElementById("form")
    const removeClass = (inputActual) => {
        setTimeout(() => {
            inputActual.classList.remove("input__invalid");
            inputActual.classList.remove("input__valid");
        }, 2500);
    }
    const addClassInvalid = (inputActual) => {
        inputActual.classList.remove("input__valid")
        inputActual.classList.add("input__invalid")
        showError(inputActual)   
    }
    const addClassValid = (inputActual) => {
        inputActual.classList.add("input__valid")
        inputActual.classList.remove("input__invalid")
    }

    /* Funcion que aplica la etiqueta de error correspondiente al input */
    const showError = (input) => {
        switch (input) {
            case phone:
                document.querySelector(".span__tel").dataset.content = "*This fild only accept minimum 8 numbers";
                break;
            case email:
                document.querySelector(".span__email").dataset.content = "*Enter a valid email address";
                break;
            case lastName:
                document.querySelector(".span__lastName").dataset.content = "*Only accepts uppercase and lowercase characters"
                break;
            case names:
                document.querySelector(".span__name").dataset.content = "*Only accepts uppercase and lowercase characters"
                break;
            case password :
                document.querySelector(".span__password").dataset.content = "*Should be contain at least one number , one lowercase and uppercase character"
                break;
            case rePassword:
                document.querySelector(".span__rePassword").dataset.content = "*Password must be the same"
                break;
            default:
                input.dataset = "*This field is required"
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
    /* Funcion manejadora del evento input que verifica la integridad de los datos */
    const detectInputValue = (e) => {
        let input = e.target;

        if(input.id === "phone"){        
            (/^[0-9]{8,}$/ig).test(input.value) ? addClassValid(input) : addClassInvalid(input);    
        }else if(input.id === "email"){
            (/\w+\@\w{3,}\.\w{2,3}/ig).test(input.value) ?  addClassValid(input) : addClassInvalid(input);
        }else if(input.id === "names" || input.id === "lastName"){
            (/^[a-z]+$/ig).test(input.value) ?  addClassValid(input) : addClassInvalid(input);
        }
        else if(input.id === "password" ){
            (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/).test(input.value) ? addClassValid(input) : addClassInvalid(input);      
        }else if(input.id === "rePassword"){
            let passwordValue = document.querySelector("#password").value;  
            passwordValue === input.value ? addClassValid(input) : addClassInvalid(input);
        }
        else{
            input.classList.add("input__invalid");
            removeClass(e.target);
        }
    }

document.querySelectorAll(".form__input").forEach(element => element.addEventListener("input",detectInputValue));
form.addEventListener("submit", validation);
