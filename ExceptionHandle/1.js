function a() {
    try {
        b()

        function b() {
            // let json = '{bad json}'
            // let user = JSON.parse(json); 

            let user = {
                name: 'abdul'
            }
            console.log(user.name);
            c()

            function c() {
                try {
                    // let json = '{bad json}'
                    // let user = JSON.parse(json); 

                    let user = {
                        name: 'majeed'
                    }
                    console.log(user.name);

                } catch (err) {
                    console.log(err, "---3---")
                }
                d()

                function d() {
                    try {
                        //  let json = '{bad json}'
                        // let user = JSON.parse(json); 

                        let user = {
                            name: 'bruce'
                        }
                        console.log(user.name);
                    } catch (err) {
                        console.log(err, "inside the function err")
                    }
                }
            }
        }
    } catch (err) {
        console.log(err, "Error caught")
    }
}
a()