var clearBtn = document.getElementById("clearBtn");
var displayBox = document.getElementById("displayBox");
function displayFunction(index) {
    switch (index.srcElement.textContent) {
        case "=":
            var strToEval = displayBox.value;
            var result = eval(strToEval);
            console.log("rrrrrrrrrrr", result);
            displayBox.value = result;
            break;
        case "C":
            displayBox.value = "";
            console.log("CCCCC");
            
            break;
        default:
            displayBox.value += index.srcElement.textContent;
    }
}
var btnsArr = document.getElementsByTagName("button");
for (var i = 0; i < btnsArr.length; i++) {
    btnsArr[i].addEventListener('click', displayFunction)
    console.log(0);
}