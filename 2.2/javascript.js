function print(array) {    
    console.log()
    for(let x = 0; x <= array.length-1; x++) {
        console.log(`Person ${x+1}: ${array[x]}`)
    }
}

let person = ["Franz", "Jenny", "Karen", "Joseph", "Richard", "Florenze"];
print(person);

person.sort();
print(person);

let newperson = person.map((person) => person.toUpperCase());
print(newperson);

// Caesar-Verschlüsselung mit der Rotation 13 fortgeschritten
/*
let text = "Florenze";
let rotation = 13;
let cipherText;

let smallA = "a".charCodeAt(0);
let smallZ = "z".charCodeAt(0);
let bigA = "A".charCodeAt(0);
let bigZ = "Z".charCodeAt(0);

function transformChar(charCode, startAsciiCode) {
    var index = charCode - startAsciiCode;
    var transformedChar = index + rotation;

    if (transformedChar > 25) { transformedChar -= 26; }
    else if (transformedChar < 0) { transformedChar += 26; }

    return startAsciiCode + transformedChar;
}

function transformText(ausgangstext) {
    var ergebnis = "";

    for (var i = 0; i < ausgangstext.length; i++) {
            var charCode = ausgangstext.charCodeAt(i);

            if (charCode >= bigA && charCode <= bigZ) {
                charCode = transformChar(charCode, bigA);
            }
            else if (charCode >= smallA && charCode <= smallZ) {
                charCode = transformChar(charCode, smallA);
            }
        ergebnis += String.fromCharCode(charCode);
    }
        
    return ergebnis;
}

cipherText = transformText(text);

console.log("Aus '" + text + "' wird '" + cipherText + "'.");
*/

function toCaesar(input) {
    const characters = input.split("");
    const newCharacters = characters.map((character) => {
        const charCode = character.charCodeAt();
        if(charCode <= "Z".charCodeAt()) {
            return String.fromCharCode((charCode - "A".charCodeAt() + 13) % 26 + "A".charCodeAt());
        } else {
            return String.fromCharCode((charCode - "a".charCodeAt() + 13) % 26 + "a".charCodeAt());
        }
    });
    return newCharacters.join("");
}

console.log(toCaesar(person[0]));