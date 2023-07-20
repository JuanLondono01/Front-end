//Eye view controller

let eye = document.querySelector(".fa-solid")
let passInput = document.querySelector("#passInput");

eye.addEventListener("click", function(){
    if (passInput.type === "password") {
        passInput.type = "text"
        eye.classList.remove("fa-eye")
        eye.classList.add("fa-eye-slash")
    }else{
        passInput.type = "password"
        eye.classList.add("fa-eye")
        eye.classList.remove("fa-eye-slash")
    }
})
//Eye view controller end


//Same password checker

let register = document.querySelector(".register");
let pass2 = document.querySelector("#pass2");
let confirm = document.querySelector("#confirm-pass2")

register.addEventListener("click", () =>{
    if(pass2.value !== confirm.value){
        alert("webon");
    }
})

//Same password checker end


//Changer between sing-in and register

let reg = document.getElementById('reg');
let sing2 = document.getElementById('sing2');
let form1 = document.getElementById('formulario-sing-in')
let form2 = document.getElementById('formulario-register')

reg.addEventListener("click", () =>{
    form1.style.zIndex = 1;
    form2.style.zIndex = 2;
})

sing2.addEventListener("click", () =>{
    form1.style.zIndex = 2;
    form2.style.zIndex = 1;
    
})

//Changer between sing-in and register end




