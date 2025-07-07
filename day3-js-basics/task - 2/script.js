let a, b, i;

let operator = {
    1: '+',
    2: '-',
    3: '*',
    4: '/'
}

function calcValue() {
    try {
        let value = eval(`${a} ${operator[i]} ${b}`)
        console.log("result is ", value)
        alert("Result is " + value)
    } catch (err) {
        console.log(err)
        alert(err)
    }
}

function runCalc() {
    console.log("Running calculator")
    try {
        a = parseInt(prompt("Enter first number: "))
        console.log("Number a: ", a)
        b = parseInt(prompt("Enter second number: "))
        console.log("Number b: ", b)

        i = parseInt(prompt("Enter operation to be performed: \n1: +\n2: -\n3: *\n4: /"))

        if (i > 4 || i < 1) {
            throw new Error("Incorrect operator. Please select in range 1 to 4");
        }

        if (i == 4 && b == 0) {
            throw RangeError("b should not be 0 when dividing")
        }

        console.log("Operation: ", operator[i])

        calcValue();
    }

    catch (Error) {
        alert(Error)
    }
}