function fib(n){
    let a=0,b=1,c;
    let res=[];
    if(n<=0){
        return res;
    }
    if(n==1){
        res.push(a);
        return res;
    }
    if(n==2){
        res.push(a);
        res.push(b);
        return res;
    }

    for(let i=0;i<n;i++){
        res.push(a);
        c=a+b;
        a=b;
        b=c;
    }
    return res;
   


    
}
export default fib;