function createCharacters() {
    let characters = [
        { name: 'Mario', level: 1, health: 100 },
        { name: 'Luigi', level: 5, health: 80 },
        { name: 'Lucy', level: 2, health: 75 },
        { name: 'Cady', level: 3, health: 550 },
    ]
    let charactersPowerUp = characters.map(char => ({ name: char.name.toUpperCase(), level: char.level * 2, health: char.health * 3 }));
    let possibleWinners = charactersPowerUp.filter(char => char.health > 1000);
    return { charactersPowerUp, possibleWinners };
}
let result = createCharacters();
console.log('Characters powerup is:', result.charactersPowerUp);
console.log('Possible winners is:', result.possibleWinners);


function printLeaderboard() {
    let players = [
        { name: 'Mario', score: 100 },
        { name: 'Andy', score: 150 },
        { name: 'Logan', score: 200 },
        { name: 'Justin', score: 300 },
    ];
    const playerWinner = players.sort((a, b) => (b.score - a.score));
    const medals = ['🥇', '🥈', '🥉'];
    for (let i = 0; i < players.length; i++) {
        if (medals[i] !== undefined) {
            medal = medals[i];
        } else {
            medal = (i + 1) + '.';
        }
        console.log(`${medal} ${players[i].name}: ${players[i].score}`);
    }
}
printLeaderboard();

