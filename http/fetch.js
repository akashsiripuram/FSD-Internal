const data=fetch("https://jsonplaceholder.typicode.com/posts")
.then((response)=>response.json())
.then((json)=>console.log(json))
.catch((error)=>console.log("Error:",error))


console.log(data);