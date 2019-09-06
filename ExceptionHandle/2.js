
function a() {
    try {
        b()

        function b() {
            let user = {name: 'abdul'}
            console.log(user.name);
            c()

            function c() {
                let user = {name: 'majeed'}
                console.log(user.name);
                d()

                function d() {
                    try {
                        let json = '{bad json}'
                        let user = JSON.parse(json);
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