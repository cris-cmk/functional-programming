import { coinCounterRecursive, createCoinCounter } from './coinCounter';
import { toRoman } from './romanNumerals';
import { sieveOfEratosthenes } from './primeSieve';

//sample use case
console.log(sieveOfEratosthenes(30)); 
console.log(coinCounterRecursive(499)); 
const countCoins = createCoinCounter();
console.log(countCoins(499));
console.log(toRoman(3999)); 