// 1. Importing JSOn data
import stocks from './data.json' with { "type" : "json"};

const summary = {average: 0, max: 0, min : 0} 

let lowest = Infinity;
let highest = -Infinity;
let ct = 0;

for(let i = 0; i <= stocks.length - 1; i++){
    summary.average += stocks[i].price;
    if(stocks[i].price < lowest){
        lowest = stocks[i].price;
        summary.min = stocks[i].price;
    }   
    if(stocks[i].price > highest){
        highest = stocks[i].price;
        summary.max = stocks[i].price;
    }   
    ct++;
}
summary.average /= ct;

console.log(summary);