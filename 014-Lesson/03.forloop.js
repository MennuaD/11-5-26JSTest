// 1. Importing JSOn data
import stocks from './data.json' with { "type" : "json"};

let lowest = Infinity;
let stockLow = {};
for(let i = 0; i <= stocks.length - 1; i++){
    if(stocks[i].price < lowest){
        lowest = stocks[i].price;
        stockLow = stocks[i];
    }   
}
console.log(stockLow);