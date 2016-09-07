/**
 * Created by user on 9/5/16.
 */

function  Postman(name,lastname,workyears){
    this.name = name;
    this.lastname = lastname;
    this.workyears = workyears;
    this.donework = [];
}

Postman.prototype.deliver = function (postoffice) {
    for (var i = 0; i < postoffice.storage.length; i++) {
        if (postoffice.storage[i].constructor.name == 'Package') {
            this.donework.push(postoffice.storage[i]);
            postoffice.storage[i].taker.recieved.push(postoffice.storage[i]);
        }else if (postoffice.storage[i].constructor.name == 'Letter') {
            this.donework.push(postoffice.storage[i]);
            postoffice.storage[i].taker.recieved.push(postoffice.storage[i]);
        }
    }
    postoffice.storage = [];
};

