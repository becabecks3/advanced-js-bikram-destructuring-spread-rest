//RESUELVE LOS EJERCICIOS AQUÍ

//Ejercicio1
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

const [ , ana , ] = empleados;

//Ejercicio 2

const [{ email: emailLuis }] = empleados.filter(empleado => empleado.name === "Luis");
console.log(emailLuis);


//Ejercicio 3
const {a = 5, b = 3} = {a: 3, b: 5};

// Ejercicio 4
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };

const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;
console.log(maximaHoy);
console.log(maximaManana);


const {today, tomorrow} = HIGH_TEMPERATURES;

//Ejercicio 5
function sumEveryOther(...numbers){
    count = 0;
    for (let number of numbers){
        count += number
    } 
    return count;
};

//Ejercicio 6

function addOnlyNums(...arguments) {
   count = 0;
   for (let i = 0; i < arguments.length; i++){
    if( typeof arguments[i] === 'number'){
        count += arguments[i];
        console.log(arguments[i]);
    }
   }
   return count;
};

//Ejercicio 7
function countTheArgs(...anyType) {
 return anyType.length;
};

//Ejercicio 8
function combineTwoArrays (arr1, arr2){
    return [...arr1,...arr2];
};

//Ejercicio 9
function onlyUniques(...unlimited){
 return unlimited.filter((val, i, arr) => {
    if(val === arr[i + 1]){
        arr.splice(i, 1);
    }
    return arr;
 })
}

//Ejercicio 10
function combineAllArrays(...arrays) {
    let combined = [];
    arrays.map(value => combined.push(...value))
    return combined;
}

//Ejercicio 11
function sumAndSquare(...whatever) {
    return whatever.map(value => value ** 2).reduce((acc, currV) => acc + currV)
}




