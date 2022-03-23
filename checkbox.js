function getValue() {
    var checkboxes = 
        document.getElementsByName('skill');
        var result5 = document.getElementById('result5');
    var result = "";

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            result += checkboxes[i].value 
                + " " + "  ";
        }
    }
    // document.write("<p> You have selected : "
    //         + result + "</p>");
    result5.textContent = 'skill:' + result;
}
submitButton.addEventListener('click',getValue , false);