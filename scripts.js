const board = document.querySelectorAll(".box")
const playeronescorebox = document.querySelector(".playeronescore");
const playertwoscorebox = document.querySelector(".playertwoscore");
console.log(board)
playeronescorebox.style.borderBottom = "10px solid var(--primary-color)"

let playeronesturn = true;
let playertwosturn = false;
let boxclicked = false;
let filledspaces = 0;
let playeronescore = 0;
let playertwoscore = 0;

function ChooseBox(boxclicked) {
    if (playeronesturn == true && boxclicked.id != "checked"){
        boxclicked.innerHTML = "X";
        playeronesturn = false;
        playertwosturn = true;
        boxclicked.setAttribute("id", "checked")
        filledspaces += 1
        playeronescorebox.style.borderBottom = ""
        playertwoscorebox.style.borderBottom = "10px solid var(--primary-color)"
        CheckForWin()
    }
    else if (playertwosturn == true && boxclicked.id != "checked"){
        boxclicked.innerHTML = "O"
        playeronesturn = true;
        playertwosturn = false;
        boxclicked.setAttribute("id", "checked")
        filledspaces += 1
        playertwoscorebox.style.borderBottom = ""
        playeronescorebox.style.borderBottom = "10px solid var(--primary-color)"
        CheckForWin()
    }
    
    
}

function CheckForWin () {
    console.log(filledspaces)
        if (board[0].innerHTML == "X" && board[1].innerHTML == "X" && board[2].innerHTML == "X") {
            playeronewins()
            resetboard()
        }
        else if (board[3].innerHTML == "X" && board[4].innerHTML == "X" && board[5].innerHTML == "X") {
            playeronewins()
            resetboard()
        } 
        else if (board[6].innerHTML == "X" && board[7].innerHTML == "X" && board[8].innerHTML == "X") {
            playeronewins()
            resetboard()
        }
        else if (board[0].innerHTML == "X" && board[3].innerHTML == "X" && board[6].innerHTML == "X") {
            playeronewins()
            resetboard()
        }
        else if (board[1].innerHTML == "X" && board[4].innerHTML == "X" && board[7].innerHTML == "X") {
            playeronewins()
            resetboard()
        }
        else if (board[2].innerHTML == "X" && board[5].innerHTML == "X" && board[8].innerHTML == "X") {
            playeronewins()
            resetboard()
        }
        else if (board[0].innerHTML == "X" && board[4].innerHTML == "X" && board[8].innerHTML == "X") {
            playeronewins()
            resetboard()
        }
        else if (board[2].innerHTML == "X" && board[4].innerHTML == "X" && board[6].innerHTML == "X") {
            playeronewins()
            resetboard()
        }
        else if (board[0].innerHTML == "O" && board[1].innerHTML == "O" && board[2].innerHTML == "O") {
            playertwowins()
            resetboard()
        }
        else if (board[3].innerHTML == "O" && board[4].innerHTML == "O" && board[5].innerHTML == "O") {
            playertwowins()
            resetboard()
        } 
        else if (board[6].innerHTML == "O" && board[7].innerHTML == "O" && board[8].innerHTML == "O") {
            playertwowins()
            resetboard()
        }
        else if (board[0].innerHTML == "O" && board[3].innerHTML == "O" && board[6].innerHTML == "O") {
            playertwowins()
            resetboard()
        }
        else if (board[1].innerHTML == "O" && board[4].innerHTML == "O" && board[7].innerHTML == "O") {
            playertwowins()
            resetboard()
        }
        else if (board[2].innerHTML == "O" && board[5].innerHTML == "O" && board[8].innerHTML == "O") {
            playertwowins()
            resetboard()
        }
        else if (board[0].innerHTML == "O" && board[4].innerHTML == "O" && board[8].innerHTML == "O") {
            playertwowins()
            resetboard()
        }
        else if (board[2].innerHTML == "O" && board[4].innerHTML == "O" && board[6].innerHTML == "O") {
            playertwowins()
            resetboard()
        }
        else if (filledspaces == 9) {
            resetboard()
        }
        else {
            console.log("No one won yet")
        }
    }

const playeronewins = () => {
    console.log("player one wins")
    playeronescore += 1;
    playeronescorebox.innerHTML = "Player One's Score: " + playeronescore.toString()
}

const playertwowins = () => {
    console.log("player two wins")
    playertwoscore += 1;
    playertwoscorebox.innerHTML = "Player One's Score: " + playeronescore.toString()
}

const resetboard = () => {
    board.forEach((element) => {
        element.removeAttribute('id');
        element.innerHTML = "";
        filledspaces = 0;
    })
}