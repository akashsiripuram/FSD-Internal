function* coountUptoN(n){
    for(let i=0;i<=n;i++){
        yield i;
    }
}

const counter=coountUptoN(5);
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());


//output
// { value: 0, done: false }
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: false }
// { value: 5, done: false }