function a() {
    try {
            c()
            function c() {
                try {
                    let user = { name: 'majeed' }
                    console.log(user.name);
                    d()
                    } catch (err) {
                     console.log(err, "---3---")
                     //throw err;
                     }


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
        }
    } catch (err) {
        console.log(err, "Error caught")
    }
}
a()