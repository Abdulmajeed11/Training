//Length
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
console.log(sln)         //  O/p: 26 
 // Note:counting starts from 0th position

//indexOf
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
console.log(pos)           // O/p : 7

//lastIndexOf
//The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.
var str = "Please locate where 'locate' occurs!";
var pos1 = str.lastIndexOf("locate");
var pos2 = str.lastIndexOf("z");
console.log(pos1)          // O/p: 21
console.log(pos2)          // O/p : -1

//Both indexOf(), and lastIndexOf() return -1 if the text is not found.
//Both methods accept a second parameter as the starting position for the search

var str = "Please locate where 'locate' occurs!";
var pos1 = str.indexOf("locate", 15);
var pos2 = str.indexOf("locate", 22);
console.log(pos1,pos2)       // O/p: 21 -1

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate", 15);
console.log(pos)      //  o/p: 7


//search
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
console.log(pos)                  // O/p : 7

// note : Indexof vs search diff
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions)

//slice
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log(res)               // O/p: Banana

var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);     // O/p: Banana

var str = "Apple, Banana, Kiwi";
var res = str.slice(7);            // O/p : Banana,Kiwi
console.log(res)

var str = "Apple, Banana, Kiwi";
var res = str.slice(-12);         // O/p :  Banana,Kiwi
console.log(res)

//Substring() method
//substring() is similar to slice().The difference is that substring() cannot accept negative indexes.
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);
console.log(res)          // O/p: banana

//substr() Method
//substr() is similar to slice().The difference is that the second parameter specifies the length of the extracted part.
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);
console.log(res);                   //O/p :Banana

var str = "Apple, Banana, Kiwi";
var res = str.substr(7);
console.log(res);                   //O/p : Banana, Kiwi

var str = "Apple, Banana, Kiwi";
var res = str.substr(-4);          
console.log(res)                 // O/p : kiwi

//Replacing String
//The replace() method replaces a specified value with another value in a string:
str = "how r you?";
var n = str.replace("r", "are");
console.log(n)

//note: By default, the replace() method is case sensitive.

//Converting to Upper and Lower Case
var text1 = "Hello World!";      
var text2 = text1.toUpperCase(); 
console.log(text2);            // o/p : HELLO WORLD!

var text1 = "Hello World!";       
var text3 = text1.toLowerCase();
console.log(text3)                // o/p: hello world!

//Concat
var text1 = "Hello" + " " + "World!";
var text2 = "Hello".concat(" ", "!");
console.log(text1)
console.log(text2)

//Trim()
var str = "       Hello World!        ";
console.log(str.trim());    // o/p : Hello World!

//charAT
var str = "HELLO WORLD";
console.log(str.charAt(0));       //o/p: H

//charCodeAt
var str = "HELLO WORLD";
str.charCodeAt(0);         // O/p : 72 (returns value in unicode)

var str = "HELLO WORLD";
console.log(str[3]);                   // O/p: L

//Converting a String to an Array, using split
var txt = "Hello";       
console.log(txt.split(""));   //o/p:  [ 'H', 'e', 'l', 'l', 'o' ]

//Endswith()
var str = "Hello world, welcome to the universe.";
var n = str.endsWith("universe.");
console.log(n)               // o/p : true

//toString()
var str = "Hello World!";
var res = str.toString(); 
console.log(res)                       // o/p : Hello World!