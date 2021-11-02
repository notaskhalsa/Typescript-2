"use strict";
exports.__esModule = true;
exports.Point1 = void 0;
var Point1 = /** @class */ (function () {
    function Point1(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point1.prototype.Draw = function () {
        console.log("Draw");
    };
    Point1.prototype.getDistance = function (another) {
        console.log("getDistance");
    };
    Object.defineProperty(Point1.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('value cannot be less than 0.');
            }
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point1;
}());
exports.Point1 = Point1;
