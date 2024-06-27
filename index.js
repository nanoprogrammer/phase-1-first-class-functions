function receivesAFunction(cb) {
    cb();
}

function returnsANamedFunction() {
    let namedFunction;
    return namedFunction = function() {
        return 'I am hungry!';
    }
}

function returnsAnAnonymousFunction() {
    return (function() {
        return 'This is somewhat confusing!!!'
    })
}