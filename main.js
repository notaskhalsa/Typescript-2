"use strict";
exports.__esModule = true;
var point_1 = require("./point");
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    // console.log(i);  //// since its not var variable it is showing the error, and we can't call it outside the scope of the function in which we declared it.
}
doSomething();
////            Types
var a = 1;
var b = 'a';
var c = true;
var d;
//// arrays
var e;
var f;
/// enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Yellow"] = 3] = "Yellow";
})(Color || (Color = {}));
var backgroundColor = Color.Red;
///         type assertions
var message;
message = 'abc';
var endsWithC = message.endsWith('c');
var endsWithD = message.endsWith('d');
////            Arrow functions
var log = function (message) {
    console.log(message);
};
var doLog = function (message) { return console.log(message); };
var drawPoint = function (point) {
};
///             Classes
var point = new point_1.Point1(1, 2);
// point.setX(10);
var x = point.x;
point.x = 10;
point.Draw();
