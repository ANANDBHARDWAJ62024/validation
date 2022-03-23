function userNameInput(){
    var firstName=document.getElementById('firstName').value
    //var email=document.getElementById('email').value
    var result1 = document.getElementById('result1');

    if (firstName.length < 3) {
        document.getElementById("error1").innerHTML="** fill username";
        return false;
    } else {
        result1.textContent = 'name:' + firstName;
        //alert(nameField);
    }
 }
 
submitButton.addEventListener('click', userNameInput, false);