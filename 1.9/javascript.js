for(let x = 1; x <= 100; x++) {
    if(x % 3 && x % 5) {
        console.log(x);
    } else if (x % 5) {
        console.log("Fizz");
    } else if (x % 3) {
        console.log("Buzz");
    } else {
        console.log("FizzBuzz");
    }
}