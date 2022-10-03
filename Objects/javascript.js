function createUser(name, age, gender) {
    return {
        "name": name,
        "age": age,
        "gender": gender
    };
}

let user = createUser("Robin", 18, "männlich");
console.log(user.gender);

let fruit = "apple";
let user1 = {
    [fruit + "Computer"]: 5
}
console.log(user1);