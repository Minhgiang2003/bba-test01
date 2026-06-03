let findPairsDivisibleBy17 = [];

for (let i = 1; i <= 100; i++) {
    for (let j = i; j <= 100; j++) {
        if ((i + j) % 17 === 0) {
            findPairsDivisibleBy17.push(`(${i}, ${j})`);
        }
    }
}
console.log(`Các cặp số hợp lệ: ${findPairsDivisibleBy17}`);
console.log(`Tổng cặp số hợp lệ: ${findPairsDivisibleBy17.length}`);