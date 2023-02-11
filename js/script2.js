(function (window) {
    var JohnGreeter = {};
    JohnGreeter.name = "John";
    var greetings = "Hi ";
    JohnGreeter.sayHi = function () {
        console.log(greetings + JohnGreeter.name);
    }
    window.JohnGreeter = JohnGreeter;
})(window);


