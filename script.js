var head = document.createElement("p");
head.setAttribute("class","heading");
head.innerHTML = "<h1> Calculator</h1>"
document.body.append(head);

var mainBox = document.createElement("div");
mainBox.setAttribute("class","container");

var inputArea = document.createElement("input");
// inputArea.setAttribute("type","text");
inputArea.setAttribute("id","display");
mainBox.append(inputArea);

var br = document.createElement("br");
// br.innerText = "1";
mainBox.append(br);

var br = document.createElement("br");
// br.innerText = "1";
mainBox.append(br);

var clear = document.createElement("button");
clear.setAttribute("class", "clearAll");
clear.innerText = "C";
mainBox.append(clear);

var del = document.createElement("button");
del.setAttribute("class", "deleted");
del.innerText = "del";
mainBox.append(del);

var decimal = document.createElement("button");
decimal.setAttribute("class", "align");
decimal.innerText = ".";
mainBox.append(decimal);

var mul = document.createElement("button");
mul.setAttribute("class", "align");
mul.innerText = "*";
mainBox.append(mul);

var br = document.createElement("br");
// br.innerText = "1";
mainBox.append(br);

var button7 = document.createElement("button");
button7.setAttribute("class", "align");
button7.innerText = "7";
mainBox.append(button7);

var button8 = document.createElement("button");
button8.setAttribute("class", "align");
button8.innerText = "8";
mainBox.append(button8);

var button9 = document.createElement("button");
button9.setAttribute("class", "align");
button9.innerText = "9";
mainBox.append(button9);

var div = document.createElement("button");
div.setAttribute("class", "align");
div.innerText = "/";
mainBox.append(div);

var br = document.createElement("br");
// br.innerText = "1";
mainBox.append(br);

var button4 = document.createElement("button");
button4.setAttribute("class", "align");
button4.innerText = "4";
mainBox.append(button4);

var button5 = document.createElement("button");
button5.setAttribute("class", "align");
button5.innerText = "5";
mainBox.append(button5);

var button6 = document.createElement("button");
button6.setAttribute("class", "align");
button6.innerText = "6";
mainBox.append(button6);

var sub = document.createElement("button");
sub.setAttribute("class", "align");
sub.innerText = "-";
mainBox.append(sub);

var br = document.createElement("br");
// br.innerText = "1";
mainBox.append(br);

var button1 = document.createElement("button");
button1.setAttribute("class", "align");
button1.setAttribute("value","1");
button1.innerText = "1";
mainBox.append(button1);

var button2 = document.createElement("button");
button2.setAttribute("class", "align");
button2.innerText = "2";
mainBox.append(button2);

var button3 = document.createElement("button");
button3.setAttribute("class", "align");
button3.innerText = "3";
mainBox.append(button3);

var add = document.createElement("button");
add.setAttribute("class", "align");
add.innerText = "+";
mainBox.append(add);

var br = document.createElement("br");
// br.innerText = "1";
mainBox.append(br);

var button0 = document.createElement("button");
button0.setAttribute("class", "align");
button0.innerText = "0";
mainBox.append(button0);

var button00 = document.createElement("button");
button00.setAttribute("class", "align");
button00.innerText = "00";
mainBox.append(button00);

var equals = document.createElement("button");
equals.setAttribute("class","merge");
equals.innerText = "=";
mainBox.append(equals);

document.body.append(mainBox);


var select = document.querySelectorAll("button");
// console.log(select);

select.forEach(function(buttons){
    buttons.addEventListener("click", function(){

        if (buttons.innerText === "=") {
            calculate();
        }else{
            display(buttons.innerText);
        }        
    });
});

function display(value){
    document.getElementById("display").value +=value;
}

function calculate() {
    var inputNumber = document.getElementById("display").value;

    try {
        var result = eval(inputNumber);
        document.getElementById("display").value = result;
    } catch (error) {
       alert("Please Enter the Valid format")
    }
}

clear.addEventListener("click", clearAll);

function clearAll(){
    inputArea.value = "";
}

del.addEventListener("click", deleted);

function deleted(){
    // console.log(typeof(inputArea.value));
    inputArea.value = inputArea.value.slice(0, -4);
}

 