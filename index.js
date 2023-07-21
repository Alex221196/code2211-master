const a = 5
function myFn(){
    let a = 22
    function innerFn(){
        console.log(a)
    }
    innerFn()
    }
    myFn()