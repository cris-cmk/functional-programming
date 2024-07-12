import { coinCounterRecursive, createCoinCounter } from './coinCounter';
import { toRoman } from './romanNumerals';
import { sieveOfEratosthenes } from './primeSieve';

//sample use case
console.log(sieveOfEratosthenes(30)); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
console.log(coinCounterRecursive(499)); // [19, 2, 0, 4]
const countCoins = createCoinCounter();
console.log(countCoins(499)); // [19, 2, 0, 4]
console.log(toRoman(3999)); // MMMCMXCIX