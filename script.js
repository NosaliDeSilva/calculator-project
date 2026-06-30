function calculate(operation){


let a = Number(document.getElementById("num1").value);

let b = Number(document.getElementById("num2").value);


let result;


if(operation=="+"){
    result=a+b;
}

else if(operation=="-"){
    result=a-b;
}

else if(operation=="*"){
    result=a*b;
}

else if(operation=="/"){
    result=a/b;
}


document.getElementById("result").innerHTML =
"Result: " + result;


}
