function a() {
    try {
        d()
        function d() {
         try {
             let json = '{bad json}'
             let user = JSON.parse(json);

             let user = {name: 'bruce'}
             console.log(user.name);
             } catch (err) {
             console.log(err, "inside the function err")
            }
          }
    } catch (err) {
        console.log(err, "Error caught")
    }
}

a()



// Note-1: Any given exception will be caught only once by the nearest enclosing catch-block 
// unless it is re-thrown. Of course, any new exceptions raised in the "inner" block (because
// the code in catch-block may do something that throws), will be caught by the "outer" block.


//Note-2: try..catch detects the errors at runtime while there is an error at the compile time, 
//the program dosent get fully compile due to the same variable name,Hence its getting caught at the end
