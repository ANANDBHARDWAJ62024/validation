function validateemail()  
{  
var x=document.getElementById("email").value;  
var result2 = document.getElementById('result2');

var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  //alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  document.getElementById("error2").innerHTML="** fill valid email id";
        return false;
  }  else {
    result2.textContent = 'email:' + x;
    //alert(nameField);
}
}  
submitButton.addEventListener('click', validateemail, false);