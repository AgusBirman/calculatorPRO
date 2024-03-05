function calculator() {
    function add(...nums) {
        return nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }

    function subtraction(...nums) {
        return nums.reduce((accumulator, currentValue) => accumulator - currentValue);
    }

    function division(...nums) {
        return nums.reduce((accumulator, currentValue) => accumulator / currentValue).toFixed(3);
    }

    function multiplication(...nums) {
        return nums.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    }

    let numbers = [];
    let continueEntering = true;

    while (continueEntering) {
        let input = prompt("Enter a number (or leave blank to finish):");
        if (input === "" || input === null) {
            continueEntering = false;
        } else {
            let number = parseFloat(input);
            if (!isNaN(number)) {
                numbers.push(number);
            } else {
                alert("Please enter a valid number.");
            }
        }
    }


    alert("Numbers entered: " + numbers.join(", "));

 
    let addResult = add(...numbers);
    let subtractionResult = subtraction(...numbers);
    let divisionResult = division(...numbers);
    let multiplicationResult = multiplication(...numbers);

    
alert(`The result of the addition is ${addResult}\n
The result of the subtraction is ${subtractionResult}\n
The result of the division is ${divisionResult}\n
The result of the multiplication is ${multiplicationResult}\n`);

        if(confirm(`Do you want to perform another operation?`)) {
            calculator();
        } else {
            alert(`Chauuu!`);
        }
}

calculator();
