"use strict";
exports.__esModule = true;
var message = "hello world";
console.log(message);
var isBoolean = false;
var isNumber = 3;
var list1 = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3];
var person = ['richu', 5];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
