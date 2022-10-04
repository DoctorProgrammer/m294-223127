const lebenslauf = {
    "Name": "Robin",
    "Alter": 18,
    "Beruf": "Student"
};

for(let key in lebenslauf) {
    console.log(key);
    console.log(lebenslauf[key]);
}

const object = {
    "Beruf": lebenslauf.Beruf,
    "Ledig": true
}

console.log(object);
console.log(lebenslauf.Beruf);