var T = require('./example2.js')
console.log(T)
console.log(T.book)
console.log(T.book.Book)
console.log(T.book.Author)


console.log(T.book.Phone)
console.log(T.book.Phone.Brand)
console.log(T.book.Phone.Brand.company)

// o/p: { book:
//      { Book: 'sherlock holmes',
//       Author: 'Sir Arthur Conan Doyle',
//      Phone: { Name: 'pixel', Brand: [Object] } } }
//      { Book: 'sherlock holmes',
//      Author: 'Sir Arthur Conan Doyle',
//      Phone: { Name: 'pixel', Brand: { company: 'google' } } }
//      sherlock holmes
//      Sir Arthur Conan Doyle
//      { Name: 'pixel', Brand: { company: 'google' } }
//      { company: 'google' }
//      google
