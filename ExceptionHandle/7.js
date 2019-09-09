//Anonymous function

function a() {
    try {
        c()
        function c() {
        try {
          // let json = '{bad json}'                 
          // let user = JSON.parse(json); 
         let user = {name: 'majeed'}
         console.log(user.name);

        setTimeout(function() {
        try{
         let json = '{bad json}'
         let user = JSON.parse(json);
         } catch(err){
        console.log(err,"--22--")
      }
   }, 3000)

      } catch(err) {
                  console.log(err, "---3---")
    }
}
    } catch (err) {
        console.log(err, "Error caught")
    }
}

a()