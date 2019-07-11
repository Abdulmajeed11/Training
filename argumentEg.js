// Different examples related to arguments
.....................................................
CASE 1:

test = "p"
function x(test){
    console.log(test);
}

x(1)

o/p: 1

Reason: value is passed as an argument hence the output is 1
.....................................................
CASE 2:

test = "p"
function x(test){
    console.log(test);
}

x(test)

o/p: p

Reson: The variable is passed as an argument to the function hence its getting it value as 'p'
..............................................................
CASE 3:

test = "p"
function x(test){
    console.log(test);
}

x('test')

o/p: test

Reaon: The Sting given is passed as the argument
........................................................
