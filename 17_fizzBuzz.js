

function fizzBuzz(num){
    let output=[];
    for(let i=1; i<=num; i++){
        if(i%5==0 && i%3==0){
            output.push('Fizz Buzz');
        }
        else if(i%3==0){
            output.push('Fizz');
        }
        else if(i%5==0){
            output.push('Buzz');
        }
        else{
            output.push(i);
        }
        
    }
    return output;
}

console.log(fizzBuzz(15));

