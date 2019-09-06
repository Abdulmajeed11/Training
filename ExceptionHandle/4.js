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




// Note: Any given exception will be caught only once by the nearest enclosing catch-block 
// unless it is re-thrown. Of course, any new exceptions raised in the "inner" block (because
// the code in catch-block may do something that throws), will be caught by the "outer" block.



