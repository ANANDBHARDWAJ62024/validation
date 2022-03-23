function displayRadioValue() {
    var ele = document.getElementsByName('gender');
    //var result4 = document.getElementById('result4');
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        document.getElementById("result4").innerHTML= "Gender:"+ele[i].value;
                
                //result4.textContent = 'gender:' + ele;
    }
}
submitButton.addEventListener('click', displayRadioValue, false);