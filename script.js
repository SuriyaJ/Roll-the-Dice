var p1 = 0;
var p2 = 0;
var flag = 1

function calc() {
    var x = Math.floor(Math.random() * 10 % 6) + 1
    document.getElementById('res').innerText = x
    if (flag == 1)

    {
        p1 += x
        document.getElementById('p1').value = p1
        flag = 0
    } else if (flag == 0) {
        p2 += x
        document.getElementById('p2').value = p2
        flag = 1

    }
    if (p1 >= 30) {
        document.getElementById('res').innerText = "player1 won the game"
    } else if (p2 >= 30) {
        document.getElementById('res').innerText = "player2 won the game"
    }
}