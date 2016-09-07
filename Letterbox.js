/**
 * Created by user on 9/6/16.
 */

function Letterbox(id) {
    this.id = id;
    this.storage = [];
}

Letterbox.prototype.sendLetter = function (val) {
    this.storage.push(val);
};