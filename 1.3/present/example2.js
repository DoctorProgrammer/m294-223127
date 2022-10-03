document.addEventListener('DOMContentLoaded', () => { // dient 
    alert("Hallo Welt");

    function clicked() {
        document.write('Hallo Welt');
    };

    const button = document.getElementById('button');
    const buttonTwo = document.getElementById('buttonTwo')
    buttonTwo.addEventListener('click', () => alert("test"));
    button.addEventListener('click', clicked); // clicked ohne () am schluss
});