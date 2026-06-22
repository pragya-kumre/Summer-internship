const promise=new Promise((res,rej)=>{
    let s=true;//false
    if(s){
        res("fullfilled");
    
    }else{
        rej("Rejected")

    }
});
//console.log(promise);

promise.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
})
.finally(()=>{
    console.log("finally");
})


async function greet () {
    return ("hello")
};
console.log(greet());

function fetchdata (){
    setTimeout
}