var msg = 'Hello World';
console.log(msg);
const app = {};

app.minSum = (num, k)  => {
    // Write your code here
    const sorted = num.sort((a,b) => parseInt(a) - parseInt(b));
    while(k-- > 0 ){
        let max = sorted[0];
       // console.log('max',max);
        num.splice(0,1);
        let replaced = Math.ceil(max/2);
        let inserted = false;
        let i = 0;
        while(!inserted){
            if(i == num.length || replaced > num[i]){
               // console.log(i, replaced);
                num.splice(i,0, replaced);
                inserted = true;
                while(num.indexOf(max) > -1 ){
                    k--;
                    //console.log('=======',k)
                    if(k < 1 ) break;
                    let newMax = sorted[0];
                    //console.log('newMax',newMax);
                    num.splice(0,1);
                    num.splice(i,0, replaced);
                   
                }
            }
            i++;
        }

    }
    return num.reduce((a,b) => a+b, 0);
}

module.exports = app;
