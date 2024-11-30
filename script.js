const Form = document.querySelector("form");
const Username = document.querySelector("div #Username");
const Password = document.querySelector("div #Password");


// console.log(Password);


 Form.addEventListener("submit", FormHandler);

function FormHandler(e){
     e.preventDefault();
    console.log(e);

    const formInfo ={
        Username: Username.value,
        Password : Password.value,
        
    }
    
    Username.value="";
    Password.value="";
        
   
    console.log(formInfo);

}