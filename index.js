function receivesAFunction(callback) {
    callback();
}

let namedFun = () => {
    console.log ('Named Fun')
}

function returnsANamedFunction() {
    return namedFun;
}

function returnsAnAnonymousFunction() {
    return () => {
        console.log ('UnNamed Fun')
    }
}
