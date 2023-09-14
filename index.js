function add(id) {
    var num = parseInt(document.getElementById(id).textContent);
    document.getElementById(id).textContent = num + 1;
}

function subtract(id) {
    var num = parseInt(document.getElementById(id).textContent);
    document.getElementById(id).textContent = num - 1;
}

function reset() {
    document.getElementById('number1').textContent = '20';
    document.getElementById('number2').textContent = '20';
}

let buttons = document.querySelectorAll(".btn");
buttons.forEach(function(button) {
    console.log(button.textContent); // Пример: вывести текст на каждой кнопке
});