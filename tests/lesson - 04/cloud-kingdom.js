let  playerName = 'Mario';
let  currentLives = 3;
const coinsLevel1 = 25; 
const coinsLevel2 = 30; 
const coinsLevel3 = 45;

let totalCoins = coinsLevel1 + coinsLevel2 + coinsLevel3;
let averageCoins = totalCoins/3;
let remainderCoins = totalCoins % 3;

console.log(`Tổng số coins của 3 level là: ${totalCoins}`);
console.log(`Trung bình coins của 3 level là: ${averageCoins}`);
console.log(`Số coin dư khi chia tổng cho 3 là: ${remainderCoins}`);
console.log(`PlayerName: ${playerName}`);
console.log(`currentLives: ${currentLives}`);