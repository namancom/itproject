function submitAnswer() {
    var score = 0;
    var radios1 = document.getElementsByName("a");
    var val = "";
    for (var i = 0, length = radios1.length; i < length; i++) {
        if (radios1[i].checked) {
            val = radios1[i].value;
            break;
        }
    }
    var radios2 = document.getElementsByName("b");
    var val1 = "";
    for (var j = 0, length = radios2.length; j < length; j++) {
        if (radios2[j].checked) {
            val1 = radios2[j].value;
            break;
        }
    }
    var radios3 = document.getElementsByName("c");
    var val2 = "";
    for (var k = 0, length = radios3.length; k < length; k++) {
        if (radios3[k].checked) {
            val2 = radios3[k].value;
            break;
        }
    }
    var radios4 = document.getElementsByName("d");
    var val3 = "";
    for (var l= 0, length = radios4.length; l < length; l++) {
        if (radios4[l].checked) {
            val3 = radios4[l].value;
            break;
        }
    }
    if (val == "jupiter") {
        score++;
    }
    if (val1 == "saturn") {
        score++;
    }
    if (val2 == "uranus") {
        score++;
    }
    if (val3=="mercury") {
        score++;
    }


    alert("YOUR SCORE IS " + Number(score));

}