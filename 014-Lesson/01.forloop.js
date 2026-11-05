// 1. Importing JSOn data
import stocks from './data.json' with { "type" : "json"};

for(let i = 0; i <= stocks.length - 1; i++){
    console.log({stocks : stocks[i]});
}