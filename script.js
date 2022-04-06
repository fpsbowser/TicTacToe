
const Gameboard = (() => {
    const gameboard = ['x', 'o', 'x', 'o'];
    return {gameboard};
})();

console.log(Gameboard.gameboard);

// Player factory
const Player = (name, selection) => {
    return {name, selection};
}

const dakota = Player('Dakota', 'x');
console.log(dakota.name)
console.log(dakota.selection)