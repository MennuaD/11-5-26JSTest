// 1. Importing JSOn data
import stocks from './data.json' with { "type" : "json"};

const summary = {totalPrice: 0, numOfStocks: 0}; 

let lowest = Infinity;
let highest = -Infinity;
let ct = 0;

summary.totalPrice = stocks.reduce((a, c) => 
    a + c.price , 0)
summary.numOfStocks = stocks.length;



console.log(summary);