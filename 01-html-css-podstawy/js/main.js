//alert('Hello Ania');


// console.log('Hello World');
// //fasdfsadfs
// console.log('Hello World2');

// okna dialogowe 
//prompt - input do wpisania
//const myName = prompt('jak masz na imie');

//console.log(myName)

// Tworzenie zdań ze zmiennych za pomocą znaku +
//console.log('Hello ' + myName)

// 2 za pomocą template string
//console.log(`Hello ${myName}`)

//Warunki
// console.log(10>10)
// console.log(10 ==10)
// console.log('damian' == 'damian')

//Instrukcje warunkowe

// const value1 = 'papier'
// const value2 = 'kamien'
// const value3 = 'nozyce'

const user1 = prompt('podaj wartosc')
const user2 = prompt('podaj wartosc')


// if(age >= 18){
//     console.log('Mozesz wejsc')
// } else {
//     console.log('Jestes za młody')
// }

//rozszerzone

// if(number1 >= number2) {
//     console.log(`Liczba ${number1} jest większa od liczby ${number2}`)
// } else {
//     console.log(`Liczba ${number1} nie jest większa od liczby ${number2}`)
// }

if(user1 =='Kamien'&& user2 =='Papier'){
    console.log(`${user2} wygrywa`)
} else if(user1 == 'Papier'&& user2 =='Kamien'){
console.log(`${user1} wygrywa`)
}

    

// } else if (value1 =='Kamien'&& value2 =='Nozyce') {
//     console.log(`${value1} wygrywa`)
// } else  if (value1 =='Papier'&& value2 =='Nozyce') {
//     console.log(`${value2} wygrywa`)
// }
