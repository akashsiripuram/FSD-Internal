//open cmd
//type node
//type the following code

function prime(){
    for(let i=2;i<=100;i++){
        let isPrime=true;
        for(let j=2;j<i;j++){
            if(i%j==0){
                isPrime=false;
                break;
            }
        }
        if(isPrime){
            console.log(i);
        }
    }
}
//after typing the code press enter u can observe undefined
//then type prime() and press enter to see the output