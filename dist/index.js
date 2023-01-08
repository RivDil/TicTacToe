var all = document.querySelectorAll('.main-square--game');
var b1 = document.getElementById('div1');
var b2 = document.getElementById('div2');
var b3 = document.getElementById('div3');
var b4 = document.getElementById('div4');
var b5 = document.getElementById('div5');
var b6 = document.getElementById('div6');
var b7 = document.getElementById('div7');
var b8 = document.getElementById('div8');
var b9 = document.getElementById('div9');
var newAll = Array.from(all);
var player1 = 'X';
var player2 = 'O';
var currentP = player1;
currentPlayer === null || currentPlayer === void 0 ? void 0 : currentPlayer.innerHTML = "".concat(currentP, " turn");
function twoPlayers() {
    all.forEach(function (element) {
        element.addEventListener('mouseup', function pressed() {
            element.innerHTML = currentP;
            element.disabled = true;
            setTimeout(verifyW, 200);
            turn();
        });
    });
}
function cpuGame() {
    all.forEach(function (element) {
        element.addEventListener('click', function pressed() {
            element.innerHTML = currentP;
            element.disabled = true;
            verifyW(all);
            turn();
            cputurn(newAll);
            turn();
        });
    });
}
function turn() {
    if (currentP == player1) {
        currentP = player2;
    }
    else {
        currentP = player1;
    }
    currentPlayer === null || currentPlayer === void 0 ? void 0 : currentPlayer.innerHTML = "".concat(currentP, " turn");
}
function verifyW(arr) {
    if ((b1 === null || b1 === void 0 ? void 0 : b1.textContent) == 'X' && (b2 === null || b2 === void 0 ? void 0 : b2.textContent) == 'X' && (b3 === null || b3 === void 0 ? void 0 : b3.textContent) == 'X') {
        alert("X Wins!");
        all.forEach(function (i) { i.disabled = true; });
    }
    else if ((b1 === null || b1 === void 0 ? void 0 : b1.textContent) == 'X' && (b5 === null || b5 === void 0 ? void 0 : b5.textContent) == 'X' && (b9 === null || b9 === void 0 ? void 0 : b9.textContent) == 'X') {
        all.forEach(function (i) { i.disabled = true; });
        alert("X Wins!");
    }
    else if ((b1 === null || b1 === void 0 ? void 0 : b1.textContent) == 'X' && (b4 === null || b4 === void 0 ? void 0 : b4.textContent) == 'X' && (b7 === null || b7 === void 0 ? void 0 : b7.textContent) == 'X') {
        all.forEach(function (i) { i.disabled = true; });
        alert("X Wins!");
    }
    else if ((b3 === null || b3 === void 0 ? void 0 : b3.textContent) == 'X' && (b6 === null || b6 === void 0 ? void 0 : b6.textContent) == 'X' && (b9 === null || b9 === void 0 ? void 0 : b9.textContent) == 'X') {
        all.forEach(function (i) { i.disabled = true; });
        alert("X Wins!");
    }
    else if ((b2 === null || b2 === void 0 ? void 0 : b2.textContent) == 'X' && (b5 === null || b5 === void 0 ? void 0 : b5.textContent) == 'X' && (b8 === null || b8 === void 0 ? void 0 : b8.textContent) == 'X') {
        all.forEach(function (i) { i.disabled = true; });
        alert("X Wins!");
    }
    else if ((b7 === null || b7 === void 0 ? void 0 : b7.textContent) == 'X' && (b5 === null || b5 === void 0 ? void 0 : b5.textContent) == 'X' && (b3 === null || b3 === void 0 ? void 0 : b3.textContent) == 'X') {
        all.forEach(function (i) { i.disabled = true; });
        alert("X Wins!");
    }
    else if ((b7 === null || b7 === void 0 ? void 0 : b7.textContent) == 'X' && (b8 === null || b8 === void 0 ? void 0 : b8.textContent) == 'X' && (b9 === null || b9 === void 0 ? void 0 : b9.textContent) == 'X') {
        all.forEach(function (i) { i.disabled = true; });
        alert("X Wins!");
    }
    else if ((b4 === null || b4 === void 0 ? void 0 : b4.textContent) == 'X' && (b5 === null || b5 === void 0 ? void 0 : b5.textContent) == 'X' && (b6 === null || b6 === void 0 ? void 0 : b6.textContent) == 'X') {
        all.forEach(function (i) { i.disabled = true; });
        alert("X Wins!");
    }
    else if ((b1 === null || b1 === void 0 ? void 0 : b1.textContent) == 'O' && (b2 === null || b2 === void 0 ? void 0 : b2.textContent) == 'O' && (b3 === null || b3 === void 0 ? void 0 : b3.textContent) == 'O') {
        all.forEach(function (i) { i.disabled = true; });
        alert("O Wins!");
    }
    else if ((b1 === null || b1 === void 0 ? void 0 : b1.textContent) == 'O' && (b5 === null || b5 === void 0 ? void 0 : b5.textContent) == 'O' && (b9 === null || b9 === void 0 ? void 0 : b9.textContent) == 'O') {
        all.forEach(function (i) { i.disabled = true; });
        alert("O Wins!");
    }
    else if ((b1 === null || b1 === void 0 ? void 0 : b1.textContent) == 'O' && (b4 === null || b4 === void 0 ? void 0 : b4.textContent) == 'O' && (b7 === null || b7 === void 0 ? void 0 : b7.textContent) == 'O') {
        all.forEach(function (i) { i.disabled = true; });
        alert("O Wins!");
    }
    else if ((b3 === null || b3 === void 0 ? void 0 : b3.textContent) == 'O' && (b6 === null || b6 === void 0 ? void 0 : b6.textContent) == 'O' && (b9 === null || b9 === void 0 ? void 0 : b9.textContent) == 'O') {
        all.forEach(function (i) { i.disabled = true; });
        alert("O Wins!");
    }
    else if ((b2 === null || b2 === void 0 ? void 0 : b2.textContent) == 'O' && (b5 === null || b5 === void 0 ? void 0 : b5.textContent) == 'O' && (b8 === null || b8 === void 0 ? void 0 : b8.textContent) == 'O') {
        all.forEach(function (i) { i.disabled = true; });
        alert("O Wins!");
    }
    else if ((b7 === null || b7 === void 0 ? void 0 : b7.textContent) == 'O' && (b5 === null || b5 === void 0 ? void 0 : b5.textContent) == 'O' && (b3 === null || b3 === void 0 ? void 0 : b3.textContent) == 'O') {
        all.forEach(function (i) { i.disabled = true; });
        alert("O Wins!");
    }
    else if ((b7 === null || b7 === void 0 ? void 0 : b7.textContent) == 'O' && (b8 === null || b8 === void 0 ? void 0 : b8.textContent) == 'O' && (b9 === null || b9 === void 0 ? void 0 : b9.textContent) == 'O') {
        all.forEach(function (i) { i.disabled = true; });
        alert("O Wins!");
    }
    else if ((b4 === null || b4 === void 0 ? void 0 : b4.textContent) == 'O' && (b5 === null || b5 === void 0 ? void 0 : b5.textContent) == 'O' && (b6 === null || b6 === void 0 ? void 0 : b6.textContent) == 'O') {
        all.forEach(function (i) { i.disabled = true; });
        alert("O Wins!");
    }
    else if ((b1 === null || b1 === void 0 ? void 0 : b1.disabled) == true && (b2 === null || b2 === void 0 ? void 0 : b2.disabled) == true && (b3 === null || b3 === void 0 ? void 0 : b3.disabled) == true && (b4 === null || b4 === void 0 ? void 0 : b4.disabled) == true && (b5 === null || b5 === void 0 ? void 0 : b5.disabled) == true && (b6 === null || b6 === void 0 ? void 0 : b6.disabled) == true && (b7 === null || b7 === void 0 ? void 0 : b7.disabled) == true && (b8 === null || b8 === void 0 ? void 0 : b8.disabled) == true && (b9 === null || b9 === void 0 ? void 0 : b9.disabled) == true) {
        alert('Tie!');
    }
}
function cputurn(arr) {
    function fdisabled(arr) {
        return arr.disabled == false;
    }
    var arrFilter = arr.filter(fdisabled);
    if (currentP == player2) {
        var random = arrFilter[Math.floor(Math.random(arrFilter) * arrFilter.length)];
        console.log(random);
        if (arrFilter.length > 0) {
            random.innerHTML = currentP;
            random.disabled = true;
        }
    }
}
