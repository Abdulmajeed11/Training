
function a() {
    try {
        b()
        d()

        function b() {
            let user = {name: 'abdul'}
            console.log(user.name);

                function d() {
                    try {
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