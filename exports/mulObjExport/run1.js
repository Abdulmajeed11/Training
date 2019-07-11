var T = require('./example1.js')
console.log(T.a)

console.log(T.obj)
console.log(T.obj.city)
console.log(T.obj.country)

console.log(T.Quora)
console.log(T.Quora.Founder)
console.log(T.Quora.Details)
console.log(T.Quora.Details.Type)
console.log(T.Quora.Details.AppBase)


// O/p: {}
//      { city: 'hyderabad', country: 'india' }
//      hyderabad
//      india
//      { Founder: 'Adam',
//      Details: { Type: 'Q & A ', AppBase: 'Android' } }
//      Adam
//      { Type: 'Q & A ', AppBase: 'Android' }
//      Q & A  
//      Android
