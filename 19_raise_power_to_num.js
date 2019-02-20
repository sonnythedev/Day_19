function raisePowerToNum(num,pow){
    let output=1;
    for(let i=1; i<=pow; i++){
        output=output*num;
    }
    return output;
}

function raisePowerToNum_recur(num,pow){
    if(pow==1){
        return num;
    }
    return num * raisePowerToNum_recur(num,pow-1);
}

console.log(raisePowerToNum(4,2));
console.log(raisePowerToNum(4,0));
console.log(raisePowerToNum_recur(2,5));


