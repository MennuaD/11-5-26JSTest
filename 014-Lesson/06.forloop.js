// 1. Importing JSOn data
import stocks from './data.json' with { "type" : "json"};


let max = -Infinity;
let maxStock = {};

stocks.reduce((a, c) => {
    a = c.price;
    if(a > max){
        max = a;
        maxStock = stocks[stocks.indexOf(c)];
    }
}, 0)




console.log(maxStock);