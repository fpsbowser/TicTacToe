
const Gameboard = (() => {
    const gameboard = ['', '', '', '', '', '', '', '', ''];
    modal.showModal()
    
    // Get DOM elements
    let gameboardDisplay = document.getElementById('gameboard')
    let rowOne = document.getElementsByClassName('rowone')
    let column = document.getElementsByClassName('column')
    let rowTwo = document.getElementsByClassName('rowtwo')
    let columnTwo = document.getElementsByClassName('column-two')
    let rowThree = document.getElementsByClassName('rowthree')
    let columnThree = document.getElementsByClassName('column-three')
    let diagonal = document.getElementsByClassName('diagonal')
    let secondDiagonal = document.getElementsByClassName('diagonal-two')
    const resetBtn = document.getElementById('resetButton')
    const form = document.getElementById('modal-form')
    let playerOneToMove = true;


    // Bind events
    gameboardDisplay.addEventListener('click', function(e) {
        const index = [...this.children].filter(el => el.id.indexOf('section') > -1).indexOf(e.target)
        addMarker(e, index)
    })
    form.addEventListener('submit', function() {
        playerOne = Player(document.getElementById('playeronename').value, 'X')
        playerTwo = Player(document.getElementById('playertwoname').value, 'O')
        form.reset()
        return playerOne, playerTwo;
    })
    resetBtn.addEventListener('click', () => {
        resetGame()
    })
    
    // Player factory
    const Player = (name, selection) => {
        return {name, selection};
}
    // Functions
    function addMarker(e, sectionToMark) {
        if (playerOneToMove === true && e.target.innerHTML === "") {
            gameboard.splice(sectionToMark, 1, playerOne.selection)
            playerOneToMove = false
        } else if (playerOneToMove === false && e.target.innerHTML === "") {
            gameboard.splice(sectionToMark, 1, playerTwo.selection)
            playerOneToMove = true
        }
        render()
    }

    function render() {
        // Loop through gameboard array and update textcontent with array values
        // console.log(gameboard)
        for (let i = 0; i < gameboard.length; i++) {
            const selection = document.querySelector(`#gameboard :nth-child(${i + 1})`)
            selection.innerHTML = gameboard[i]
        }
        analyzeGame()
    }

    function displayWinner(player) {
        console.log(`Winner: ${player.name}`)
        alert(`Winner: ${player.name}!`)
    }

    function tieGame() {
        alert(`You tied!`)
        resetGame()
    }

    function analyzeGame() {
            gameboard.includes('') ? null : tieGame()
            checkIfThreeInARow()
            checkIfThreeInAColumn()
            checkIfDiagonalWin()
        }

    function resetGame() {
        playerOneToMove = true
        for (let i = 0; i < gameboard.length; i++) {
            gameboard.splice(i, 1, '')
        }
        render()
    }

    function checkIfThreeInARow() {
        if (rowOne[0].innerHTML === 'X' && rowOne[1].innerHTML === 'X' && rowOne[2].innerHTML === 'X' ||
            rowOne[0].innerHTML === 'O' && rowOne[1].innerHTML === 'O' && rowOne[2].innerHTML === 'O') {
                rowOne[0].innerHTML === 'X' ? displayWinner(playerOne) : displayWinner(playerTwo);
                resetGame()
        } else if (rowTwo[0].innerHTML === 'X' && rowTwo[1].innerHTML === 'X' && rowTwo[2].innerHTML === 'X' ||
            rowTwo[0].innerHTML === 'O' && rowTwo[1].innerHTML === 'O' && rowTwo[2].innerHTML === 'O') {
                rowTwo[0].innerHTML === 'X' ? displayWinner(playerOne) : displayWinner(playerTwo)
                resetGame()
        } else if (rowThree[0].innerHTML === 'X' && rowThree[1].innerHTML === 'X' && rowThree[2].innerHTML === 'X' ||
            rowThree[0].innerHTML === 'O' && rowThree[1].innerHTML === 'O' && rowThree[2].innerHTML === 'O') {
                rowThree[0].innerHTML === 'X' ? displayWinner(playerOne) : displayWinner(playerTwo)
                resetGame()
        }
    }

    function checkIfThreeInAColumn() {
        if (column[0].innerHTML === 'X' && column[1].innerHTML === 'X' && column[2].innerHTML === 'X' ||
            column[0].innerHTML === 'O' && column[1].innerHTML === 'O' && column[2].innerHTML === 'O') {
                column[0].innerHTML === 'X' ? displayWinner(playerOne) : displayWinner(playerTwo);
                resetGame()
        } else if (columnTwo[0].innerHTML === 'X' && columnTwo[1].innerHTML === 'X' && columnTwo[2].innerHTML === 'X' ||
            columnTwo[0].innerHTML === 'O' && columnTwo[1].innerHTML === 'O' && columnTwo[2].innerHTML === 'O') {
                columnTwo[0].innerHTML === 'X' ? displayWinner(playerOne) : displayWinner(playerTwo)
                resetGame()
        } else if (columnThree[0].innerHTML === 'X' && columnThree[1].innerHTML === 'X' && columnThree[2].innerHTML === 'X' ||
            columnThree[0].innerHTML === 'O' && columnThree[1].innerHTML === 'O' && columnThree[2].innerHTML === 'O') {
                columnThree[0].innerHTML === 'X' ? displayWinner(playerOne) : displayWinner(playerTwo)
                resetGame()
        }
    }

    function checkIfDiagonalWin() {
        if (diagonal[0].innerHTML === 'X' && diagonal[1].innerHTML === 'X' && diagonal[2].innerHTML === 'X' ||
            diagonal[0].innerHTML === 'O' && diagonal[1].innerHTML === 'O' && diagonal[2].innerHTML === 'O') {
                diagonal[0].innerHTML === 'X' ? displayWinner(playerOne) : displayWinner(playerTwo)
                resetGame()
        } else if (secondDiagonal[0].innerHTML === 'X' && secondDiagonal[1].innerHTML === 'X' && secondDiagonal[2].innerHTML === 'X' ||
            secondDiagonal[0].innerHTML === 'O' && secondDiagonal[1].innerHTML === 'O' && secondDiagonal[2].innerHTML === 'O') {
                secondDiagonal[0].innerHTML === 'X' ? displayWinner(playerOne) : displayWinner(playerTwo)
                resetGame()
        }
    }
})();
