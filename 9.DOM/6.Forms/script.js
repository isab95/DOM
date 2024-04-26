const nameInput = document.getElementById("firstname");
const element = document.getElementById("display-firstname");
const ageInput = document.getElementById("age");
const pwdInput = document.getElementById("pwd");
const pwdConfirmInput = document.getElementById("pwd-confirm");
const div = document.querySelectorAll("div")
const paragraph = document.createElement('p');
div[1].appendChild(paragraph);

function nameForm(){
    const firstname = nameInput.value;
    element.innerText = firstname;  
}//end nameForm method
function checkAge(){
    const age =ageInput.value;
    if (Number(age) >= 18){
        document.getElementById("a-hard-truth").style.visibility = "visible";
    }
    else{
        document.getElementById("a-hard-truth").style.visibility = "hidden";
    }
}//end checkAge fonction
function changeBorderColor(elem){
    elem.style.borderColor = "red";
}

// if(input1.length < 6 ){
//     elem1.style.borderColor = "red";
//     paragraph.innerHTML = "Your password is too short, it need to be at least 6 character long";
// }
// else{
//     elem1.style.borderColor = "green";
//     elem2.style.borderColor = "red";
// }

nameInput.addEventListener("keyup",nameForm);
ageInput.addEventListener("keyup", checkAge);
pwdInput.addEventListener("keyup", changeBorderColor(pwdInput))
pwdConfirmInput.addEventListener("keyup", changeBorderColor(pwdConfirmInput))