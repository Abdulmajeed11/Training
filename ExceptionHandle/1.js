function a() {
    try {
        b()

        function b() {
            let json = '{bad json}'
            let user = JSON.parse(json); 
            c()

            function c() {
                    let json = '{bad json}'
                    let user = JSON.parse(json); 
             d()

              function d() {
                     let json = '{bad json}'
                     let user = JSON.parse(json); 
                }
            }
        }
    } catch (err) {
        console.log(err, "Error caught")
    }
}

a()