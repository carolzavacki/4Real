

let emptyArray = [];
let myBox = ['hello', 1, 2, 3, true, 'hi'];

        //toString() converts an array to a string of (comma separated) array values.
        //For Array objects, the toString method joins the array and returns one string containing each array element separated by commas.
        //JavaScript calls the toString method automatically when an array is to be represented as a text value or when an array is referred to in a string concatenation.
console.log("********************************");
console.warn(".toString();")
//eg1
    let colors = ['green', 'yellow', 'blue'];
    console.log(colors); //(3) ['green', 'yellow', 'blue']
    console.error("from array to strig")
    console.log(colors.toString()); //green,yellow,blue
//eg2
    const fruitsArray = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruitsArray);
    let fruitsString = fruitsArray.toString();
    console.error("from array to strig")
    console.log(fruitsString)

//practice1
    let array1 = [1, 2, 'a1', '2b', false];
    console.log("Random array .toString()", array1);
    let array1ToString = array1.toString();
    console.error('from array to String');
    console.log(array1ToString)

//practice 2
    let anotherArray = ['blue', 'green', 'yellow', 'purple']
    console.log("array to string", anotherArray.toString());

//practice3
    let yetAnotherArray = ['dog', 'cat', 'donkey', 'horse'];
    let elementFromArray1 = yetAnotherArray[3];
    console.log(elementFromArray1);
    let elementFromArray2 = yetAnotherArray[2].toString;
    console.log(elementFromArray2); // error ƒ toString() { [native code] }


console.log("********************************");
console.warn(".join(separator);")
        //The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object),
        // separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
        //If arr.length is 0, the empty string is returned.
        //If an element is undefined, null or an empty array [], it is converted to an empty string.
//eg1
    let colors2 = ['green', 'yellow', 'blue'];
    console.log(colors2.join('-')); // green-yellow-blue //It is similar to toString() method, but here you can specify the separator instead of the default comma.
//eg2

    const elements = ['Fire', 'Air', 'Water'];
    console.log(elements.join());
    // expected output: "Fire,Air,Water"
    console.log(elements.join(''));
    // expected output: "FireAirWater"
    console.log(elements.join('-'));
    // expected output: "Fire-Air-Water"

//practice1
    let cars = ['car', 'truck', 'moped', 'plane'];
    console.log("joined cars: ", cars.join());

    let oddNumbers = [1,3,5,7,9];
    console.log("Joined odd numbers: ", oddNumbers.join(''));
//practice2
    let evenNumbers = [];
    console.log("Even numbers joined: ", evenNumbers.join()); //Even numbers joined:  
    let emptyEvenNumbers = evenNumbers.join();
    console.log("Even numbers joined try 2 : ", emptyEvenNumbers);

//practice 3
    evenNumbers = [2, 4, 6, 8];
    console.log("Even numbers joined try 3 : ", evenNumbers.join('**'));


console.log("********************************");

console.warn(".concat()");
    //The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
    //The concat method does not alter this or any of the arrays provided as arguments but instead returns a shallow copy that contains copies of the same elements combined from the original arrays. Elements of the original arrays are copied into the new array as follows:
   
 //eg1  
    let firstNumbers = [1, 2, 3];
    let secondNumbers = [4, 5, 6];
    let merged = firstNumbers.concat(secondNumbers);
    console.log(merged); // [1, 2, 3, 4, 5, 6]

 //eg2 
    let letters = ['a', 'b', 'c', 'd'];
    let numbers6 = [1, 2, 3, 4];
    let alphaNumerics = letters.concat(numbers6);
    console.log('A concatination ', alphaNumerics);   

//eg3
    let num1 = [1,2,3];
    let num2 = [4,5,6];
    let num3 = [7,8,9];
    const numbers7 = num1.concat(num2, num3);
    console.log("3 arrays concatination ", numbers7)


//practice1
    console.log(letters.concat(1, [2, 3]));

    console.log("********************************");

let browsers = ['chrome', 'firefox', 'edge'];
browsers.push('safari', 'opera mini');
console.log(browsers); // ["chrome", "firefox", "edge", "safari", "opera mini"] // adds items to the end of an array and changes the original array.

let browsers2 = ['chrome', 'firefox', 'edge'];
browsers2.pop(); // "edge"
console.log(browsers2); // ["chrome", "firefox"]  removes the last item of an array and returns it.


let browsers3 = ['chrome', 'firefox', 'edge'];
browsers3.shift(); // "chrome"
console.log(browsers3); // ["firefox", "edge"]  removes the first item of an array and returns it.

let browsers4 = ['chrome', 'firefox', 'edge'];
browsers4.unshift('safari');
console.log(browsers4); //  ["safari", "chrome", "firefox", "edge"]  adds an item(s) to the beginning of an array and changes the original array. //can also add multiple items at once

/*
splice()
This method changes an array, by adding, removing and inserting elements.
        array.splice(index[, deleteCount, element1, ..., elementN])

        Index here is the starting point for removing elements in the array
        deleteCount is the number of elements to be deleted from that index
        element1, …, elementN is the element(s) to be added
*/

let colors3 = ['green', 'yellow', 'blue', 'purple'];
colors3.splice(0, 3);
console.log(colors3); // ["purple"] // deletes ["green", "yellow", "blue"]


let colors4 = ['green', 'yellow', 'blue', 'purple'];
colors4.splice(3);
console.log(colors4); // ["green", "yellow", "blue"] // deletes ['purple']



let schedule = ['I', 'have', 'a', 'meeting', 'tommorrow'];
// removes 4 first elements and replace them with another
schedule.splice(0, 4, 'we', 'are', 'going', 'to', 'swim');
console.log(schedule); 
// ["we", "are", "going", "to", "swim", "tommorrow"]

//To add items, we need to set the deleteCount to zero
let schedule2 = ['I', 'have', 'a', 'meeting', 'with'];
// adds 3 new elements to the array
schedule2.splice(5, 0, 'some', 'clients', 'tommorrow');
console.log(schedule2); 
// ["I", "have", "a", "meeting", "with", "some", "clients", "tommorrow"]

/*
slice()
This method is similar to splice() but very different. It returns subarrays instead of substrings.
This method copies a given part of an array and returns that copied part as a new array. It does not change the original array.
*/

let numbers = [1, 2, 3, 4]
numbers.slice(0, 3) // returns [1, 2, 3]
console.log(numbers) // returns the original array

let message = 'congratulations'
const abbrv = message.slice(0, 7) + 's!'; 
console.log(abbrv) // returns "congrats!"

/** 
 split()
This method is used for strings. It divides a string into substrings and returns them as an array.

Here’s the syntax:string.split(separator, limit);

The separator here defines how to split a string either by a comma.
The limit determines the number of splits to be carried out
*/

let firstName = 'Bolaji';
// return the string as an array
firstName.split() // ["Bolaji"]

let firstName2 = 'hello, my name is bolaji, I am a dev.';
firstName2.split(',', 2); // ["hello", " my name is bolaji"]

let firstName3 = 'Bolaji';
firstName3.split('') // ["B", "o", "l", "a", "j", "i"] //If we declare an empty array, like this  firstName.split(''); then each item in the string will be divided as substrings:


let fruits = ['apple', 'orange', false, 3]
fruits.indexOf('orange'); // returns 1
fruits.indexOf(3); // returns 3
fruits.indexOf(null); // returns -1 (not found)

/**
 filter()
This method creates a new array if the items of an array pass a certain condition.

let results = array.filter(function(item, index, array) {
  // returns true if the item passes the filter
});
 */

const countryCode = ['+234', '+144', '+233', '+234'];
const nigerian = countryCode.filter( code => code === '+234');
console.log(nigerian); // ["+234", "+234"]


/**
 * map()
This method creates a new array by manipulating the values in an array.
 */

const userNames = ['tina', 'danny', 'mark', 'bolaji'];
const display = userNames.map(item => {
    return '<li>' + item + '</li>';
})
const render = '<ul>' + display.join('') + '</ul>';
document.write(render);

// adds dollar sign to numbers
const numbers3 = [10, 3, 4, 6];
const dollars = numbers3.map( number => '$' + number);
console.log(dollars);
// ['$10', '$3', '$4', '$6'];

//reduce() is used to calculate a single value based on an array.
// let value = array.reduce(function(previousValue, item, index, array) {
//     // ...
//   }, initial);


// const numbers2 = [100, 300, 500, 70];
// let sum = 0;
// for (let n of numbers2) {
// sum += n;
// }
// console.log(sum);

const numbers2 = [100, 300, 500, 70];
const sum = numbers2.reduce((accummulator, value) =>
accummulator + value
, 0);
console.log(sum); // 970


const colors5 = ['green', 'yellow', 'blue'];
colors5.forEach((item, index) => console.log(index, item));
// returns the index and the every item in the array
// 0 "green"
// 1 "yellow"
// 2 "blue"

//iteration can be done without passing the index argument

const colors6 = ['green', 'yellow', 'blue'];
colors6.forEach((item) => console.log(item));
// returns every item in the array
// "green"
// "yellow"
// "blue"


// every() This method checks if all items in an array pass the specified condition and returntrue if passed, else false.

const numbers4= [1, -1, 2, 3];
let allPositive = numbers4.every((value) => {
return value >= 0;
})
console.log(allPositive); // would return false

//some() This method checks if an item (one or more) in an array pass the specified condition and return true if passed, else false.

const numbers5 = [1, -1, 2, 3];
let atLeastOnePositive = numbers5.some((value) => {
return value >= 0;
})
console.log(atLeastOnePositive); // would return true

//includes() This method checks if an array contains a certain item. It is similar to .some(), but instead of looking for a specific condition to pass, it checks if the array contains a specific item.

let users = ['paddy', 'zaddy', 'faddy', 'baddy'];
users.includes('baddy'); // returns true