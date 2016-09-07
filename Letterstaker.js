/**
 * Created by user on 9/5/16.
 */
function Letterstaker(name,lastname,workyears) {
    Postman.call(this,name,lastname,workyears);
}

Letterstaker.prototype = Object.create(Postman.prototype);
Letterstaker.prototype.constructor = Letterstaker;

Letterstaker.prototype.collectLetter = function (postoffice) {
    var date = new Date();
    for (var i = 0; i < postoffice.letterbox.length; i++) {
        if (postoffice.letterbox[i].storage.length >= 1) {
            for (var j = 0; j < postoffice.letterbox[i].storage.length; j++) {
                var letter = postoffice.letterbox[i].storage[j];
                postoffice.storage.push(letter);
                var infForPostOffice = 'Date:'+date.getDate()+' Month:'+date.getMonth()+' Hour:'+date.getHours()+' Type:'+letter.constructor.name+' From:'+letter.sender.name+' To:'+letter.taker.name;
                postoffice.dayarchive.push(infForPostOffice);
            }
            postoffice.letterbox[i].storage = [];
        }
    }
};