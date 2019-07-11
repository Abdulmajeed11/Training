

//CASE 1: variable outside the function call

l = "p";
function fun_one(){
    y = "test";
    console.log(a)
}

fun_one()
console.log(y)
a = "b";
console.log(a)

O/p:  a is not defined

Reason: the variable is defined after the function call is happening so it will fail
............................................................

//CASE 2: varible inside the function call

l = "p";
function fun_one(){
    y = "test";
    console.log(a)
}
a = "b";
fun_one()
console.log(y)
console.log(a)

O/p:
b 
test 
b

reason: the varible is wihtin the function call so it will execute
....................................................................

//CASE 3 : which b value is printing

l = "p";
function fun_one(){
    y = "test";
  //  console.log(a)
}
a = "b";
fun_one()
console.log(y)
console.log(a)

My output: b                Actual : test
           test                      b 

Reason: value is getting assigned synchronously rather than being asynchronous
...................................................................
