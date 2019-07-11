var R = require('./example1.js')

//variable exe 
console.log(R.a);
console.log(R.text);

//function exe
R.ab()
console.log(R.abc(5))

//object exe
console.log(R.obj)
console.log(R.obj.city)
console.log(R.obj.country)


console.log(R.Facebook)
console.log(R.Facebook.Founder)
console.log(R.Facebook.Details)
console.log(R.Facebook.Details.Type)
console.log(R.Facebook.Details.AppBase)


// O/p: 1000
//      hello
//      hello world
//      5
// 	{ city: 'hyderabad', country: 'india' }
// 	hyderabad
// 	india
// 	{ Founder: 'Mark zuckerberg',
//   	Details: { Type: 'Social media ', AppBase: 'Android & Ios' } }
// 	Mark zuckerberg
// 	{ Type: 'Social media ', AppBase: 'Android & Ios' }
// 	Social media 
// 	Android & Ios
