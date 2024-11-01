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
    console.log('Adding 100 to each element = ',element+100);
})


// some function practice by my own
inc = function(ele){
    let result=ele*100;
    return result;

}
console.log('4 into 100 = ',inc(4));

console.log('__________________________')

// array
var myarray =['apple','banana','orange'];
console.log(myarray[1]);

// object
var myob = {
    name:'syed',
    age:25,
    city:'hyderabad',
    display:function(){
        console.log('Heloo world')
    }
}
console.log(myob)
console.log('__________________________')

//ES6

//1.let and const 
/*function myes(al){
    let al=al+10; //the let declaration is only limited inside the function
    console.log(al);
}
*/
// myes(5)

//arrow function
  //fn-name = function => return-what
    myes = () => 'This is Arrow Function';
console.log(myes());

//template literals
const tname = 'John Banega Don';
console.log(`Kon banega don: ${tname}`);

//foreach in array
var forarray = [5,6,7,8,9];
forarray.forEach(element => {
    var sum = element+sum;
    return sum;
});


















