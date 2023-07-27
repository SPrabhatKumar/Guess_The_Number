const ans = Math.floor(Math.random() * 100 + 1)
let guesses = 0

document.getElementById("submitButton").onclick = function () {
    let guess = document.getElementById("guessField").value
    guesses++;
    if (guess == ans) {
        alert(`Congratulation ! Number  is ${ans} and No: of Guesses is ${guesses}`)
    }
    else if (guess > ans) {
        alert("To big ! try again")
    }
    else {
        alert("To Small ! try again")
    }

}