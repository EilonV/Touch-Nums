var gBoard = []
var gBoardSize = 16
var gCurrentNum = 1
var startingTime = Date.now()
var gInter
var gElapsed
var gDifficulty = 0

gBoard = createBoard()
renderBoard(gBoard)


function createBoard() {

    var arr = []
    for (var i = 0; i < gBoardSize; i++) {
        arr[i] = i + 1
    }
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr
}

function renderBoard(board) {

    var strHTML = ''

    for (var i = 0; i < Math.sqrt(gBoardSize); i++) {

        strHTML += '<tr>'

        for (var j = 0; j < Math.sqrt(gBoardSize); j++) {

            strHTML += '<td onClick=\'cellClicked(this)\'>' + board.pop() + '</td>'
        }
        strHTML += '</tr>'
    }

    var elBoxes = document.getElementsByClassName('dataBox')
    var elTalbe = document.querySelector('.board')

    elBoxes[1].innerText = 'Difficulty'
    elTalbe.innerHTML = strHTML
}
function cellClicked(elCell) {

    if (+elCell.innerText === 1) startTimer()
    if (+elCell.innerText === gBoardSize) stopTimer()
    if (+elCell.innerText === gCurrentNum) {
        elCell.style.background = 'rgb(234, 207, 255)'
        gCurrentNum++
    }
}

function getTime() {
    gElapsed = Date.now() - startingTime
    gElapsed /= 1000
    var elBoxes = document.getElementsByClassName('dataBox')
    elBoxes[0].innerText = 'Game time:\n' + gElapsed
}
function startTimer() {
    gInter = setInterval(getTime)
}
function stopTimer() {
    clearInterval(gInter)
}
