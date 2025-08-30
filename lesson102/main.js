function hi(name) {
  return `Hello "${name}"`;
}

console.log(hi("Alexandr"));

//////////////////////////////////////

let numbers = [1, 4, 80, 30, 2, 2];

function moreTen(array) {

for (let i = 0; i < array.length; i++) 
  {
  
if (array[i] > 10) {
  console.log(array[i]);
}
}
}
moreTen(numbers);

//////////////////////////////////


function calculator(number1, number2, operation) {
    if (operation === 'plus') {
        return number1 + number2; 
    } else if (operation === 'minus') {
        return number1 - number2; 
    } else if (operation === 'multiply') {
        return number1 * number2; 
    } else if (operation === 'divide') {
        return number1 / number2; 
    }
}


let result = calculator(2, 3, 'minus');


console.log(result); 