"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shapes = void 0;
var Shapes = /** @class */ (function () {
    function Shapes(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Shapes.prototype.getInfo = function () {
        return "x=".concat(this._x, ", y=").concat(this._y);
    };
    return Shapes;
}());
exports.Shapes = Shapes;
