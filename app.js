var msg = 'Hello World';
console.log(msg);
const app = {};

function minSum(num, k){

    // Write your code here
    const sorted = num.sort((a,b) => parseInt(a) - parseInt(b));
    while(k-- > 0 ){
        let max = sorted[0];
        let size = sorted.length;
        let lastIndex = sorted.lastIndexOf(max);
        //console.log('k',k, 'max',max, 'lastIndex', lastIndex, 'SIZE', size);
        if(lastIndex+1 === size){
            console.log('its over...')
            break;
        }
        num.splice(0,lastIndex+1);
        let replaced = Math.ceil(max/2);
        let inserted = false;
        let i = 0;
        while(!inserted){
            if(i == num.length || replaced > num[i]){
                 
                num.splice(i, 0, replaced);        
                for(let j=lastIndex; j > 0; j--){
                    num.splice(i, 0, replaced);
                }
                inserted = true;
                k = k - lastIndex;                
            }
            i++;
        }

    }
  
    return num.reduce((a,b) => a+b, 0);
}

app.minSum = minSum;



module.exports = app;
