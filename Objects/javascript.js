function createUser(name, age, gender) {
    return {
        "name": name,
        "age": age,
        "gender": gender
    };
}

let user = createUser("Robin", 18, "männlich");
alert(user.gender)