/**
 * Created by user on 9/6/16.
 */
function Package (sender,taker,x,y,z) {
    Letter.call(this,sender,taker);
    this.tax = 2;
    this.x = x;
    this.y = y;
    this.z = z;
    this.fragile = false;
    this.standarttax = 2;
}

Package.prototype = Object.create(Letter.prototype);
Package.prototype.constructor = Package;


Package.prototype.checkSides = function () {
    if (this.x > 60 || this.y > 60 || this.z > 60) {
        this.tax += this.standarttax/2;
    }

};

Package.prototype.isFragile = function (trueOrfalse) {
    this.fragile = trueOrfalse;
    if (this.fragile == true) {
        this.tax += this.standarttax/2;
    }
};