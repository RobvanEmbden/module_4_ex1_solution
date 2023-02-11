function makeMultiplier (multiplier) {

    function b () {
        console.log("Multiplier is: " + multiplier);
    }

    b();

    return (
        function (x) {
            return multiplier * x;
        }
    );
}

var doubelAll = makeMultiplier(2);
console.log(doubelAll(10));