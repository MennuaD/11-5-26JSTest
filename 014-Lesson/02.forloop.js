// 1. Importing JSOn data
import stocks from './data.json' with { "type" : "json"};

//highest price
let highest = -Infinity;
let stockHigh = {};
for(let i = 0; i <= stocks.length - 1; i++){
    if(stocks[i].price > highest){
        highest = stocks[i].price;
        stockHigh = stocks[i];
    }   
    
}
console.log(stockHigh);