// Areeba Navaid
// Basic JavaScript Assignment

function getCounter() {
    return Number(document.getElementById("counter").innerText);
}

function setCounter(value) {
    document.getElementById("counter").innerText = value;
}

function tickUp() {
    let current = getCounter();
    setCounter(current + 1);
}

function tickDown() {
    let current = getCounter();
    setCounter(current - 1);
}

function runForLoop() {
    let count = getCounter();
    let result = "";

    for (let i = 0; i <= count; i++) {
        result += i + " ";
    }

    document.getElementById("forLoopResult").innerText = result;
}

function showOddNumbers() {
    let count = getCounter();
    let result = "";

    for (let i = 1; i <= count; i++) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
    }

    document.getElementById("oddNumberResult").innerText = result;
}

function addMultiplesToArray() {
    let count = getCounter();
    let arr = [];

    for (let i = 5; i <= count; i += 5) {
        arr.unshift(i); // puts newest value at the FRONT (reverse order)
    }

    console.log(arr);
}

function printCarObject() {
    let car = {
        cType: document.getElementById("carType").value,
        cMPG: document.getElementById("carMPG").value,
        cColor: document.getElementById("carColor").value
    };

    console.log(car);
}

function loadCar(num) {
    let car;

    if (num === 1) {
        car = carObject1;
    } else if (num === 2) {
        car = carObject2;
    } else if (num === 3) {
        car = carObject3;
    }

    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}

function changeColor(choice) {
    let p = document.getElementById("styleParagraph");

    if (choice === 1) {
        p.style.color = "red";
    } else if (choice === 2) {
        p.style.color = "green";
    } else if (choice === 3) {
        p.style.color = "blue";
    }
}

