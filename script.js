function calculate(op) {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    let result = 0;

    if (op === "+") {
        result = a + b;
    }
    else if (op === "-") {
        result = a - b;
    }
    else if (op === "*") {
        result = a * b;
    }
    else if (op === "/") {
        result = a / b;
    }

    document.getElementById("result").innerHTML = "Result: " + result;
}
