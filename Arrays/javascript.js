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

alert(array.pop());
console.log(array);