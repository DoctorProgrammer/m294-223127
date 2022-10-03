function createWord(german, english, learnedno, marked) {
    return {
        "Deutsch": german,
        "Englisch": english,
        "Gelernt": learnedno,
        "Markiert": marked
    };
}

let array1 = new Array();
let array = ["Apple", "Orange", "Neger"];
let wordlist = [createWord("Deutsch", "Englisch", 3, false)]

array[2] = "Fettsack";
array[3] = "Neger";

console.log(array[3]);
console.log(array[array.length-1]);
console.log(array.at(-1))

console.log(array.length);
console.log(array);
console.log(wordlist)

console.log(array.pop());
console.log(array);

//mutabel addition of element
array.push("secondLast", "last");
array.unshift("first", "secondFirst");

console.log(array);

//immutable addition of element
const newarray = [...array, "item"];
console.log(newarray);

//immutable map to power 2 of the number
const numbers = [1, 2, 3, 4, 5];
const numbersPower2 = numbers.map((number) => Math.pow(number,2));
console.log(numbersPower2);

const oddNumbers = numbers.filter((number) => number % 2 != 0);
console.log(oddNumbers);