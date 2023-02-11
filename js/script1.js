(function(window){
    var RobGreeter = {};
    RobGreeter.name = "Rob";
    var greetings = "Hello ";
    RobGreeter.sayHello = function() {
        console.log(greetings + RobGreeter.name);
    }
    window.RobGreeter = RobGreeter;
})(window);