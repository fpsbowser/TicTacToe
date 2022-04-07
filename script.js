
const Gameboard = (() => {
    const gameboard = ['x', 'o', 'x', 'o', '', 'x', '', 'o', ''];
    console.log(gameboard)
    
    // Get DOM elements
    let gameboardDisplay = document.getElementById('gameboard')
    console.log(gameboardDisplay)

    // let section = document.getElementById('section')
    // console.log(section)

    // Bind events
    gameboardDisplay.addEventListener('click', (e) => {
        addMarker(e);
    })

    // Player factory
    const Player = (name, selection) => {
        return {name, selection};
}
    const dakota = Player('Dakota', 'x');
    console.log(dakota.name)
    console.log(dakota.selection)

    // Functions
    function addMarker(event) {
        console.log(event.target.id)
        render()
    }

    function render() {
        // Loop through gameboard array and update textcontent with array values
        console.log('render function called')
        for (let i = 0; i < gameboard.length; i++) {
            // console.log(gameboard[i])
            const selection = document.querySelector(`#gameboard :nth-child(${i + 1})`)
            // console.log(selection)
            selection.innerHTML = gameboard[i]
        }
    }

    

})();

// console.log(Gameboard.gameboard);

// Player factory



