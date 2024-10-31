var a="Syed";
var b=11;
console.log('Hello world')
// console.log is function to print values in console
console.log(typeof a)
console.log(typeof b)

// Coditional stmt
if(b==10){
    console.log('Its a 10 for sure')
}else{
    console.log('its not 10 for sure')
}
console.log(--b)

// Looping stmts

// 1.for loop

for(var i=1;i<=5;i++){
    console.log('Hello World')
}

// 2.foreach used with arrays...
let number=[1,2,3,4,5]
number.forEach(element => {
   console.log(element*2)
});
// or it can be written in this way to too
number.forEach(function(element){
    console.log(element+100);
})
