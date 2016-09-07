/**
 * Created by user on 9/5/16.
 */

function Citizen(name,lastname,address) {
    this.name = name;
    this.lastname = lastname;
    this.address = address;
    this.recieved = [];
}

Citizen.prototype.sendLetter = function (taker,postoffice) {
    var letter = new Letter(this,taker);
    var randomLocationToSend = Math.floor(Math.random() * 2);
    var randomLetterBox = Math.floor(Math.random() * postoffice.letterbox.length);
    var date = new Date();
    var infForPostOffice = 'Date:'+date.getDate()+' Month:'+date.getMonth()+' Hour:'+date.getHours()+' Type:'+letter.constructor.name+' From:'+letter.sender.name+' To:'+letter.taker.name;
    //If randomLocationToSend = 0 the letter will be send to Postoffice else it will be send to random LetterBox;
    if (randomLocationToSend == 0) {
        postoffice.storage.push(letter);
        postoffice.dayarchive.push(infForPostOffice);
    }else {
        console.log(randomLetterBox);
        postoffice.letterbox[randomLetterBox].storage.push(letter);
    }

};

Citizen.prototype.sendPackage = function (taker,x,y,z,fragile_trueOrfalse,postoffice) {
    var package = new Package(this,taker,x,y,z);
    var date = new Date();
    var infForPostOffice = 'Date:'+date.getDate()+' Month:'+date.getMonth()+' Hour:'+date.getHours()+' Type:'+package.constructor.name+' From:'+package.sender.name+' To:'+package.taker.name;
    package.checkSides();
    if (fragile_trueOrfalse == true) {
        package.isFragile(true);
    }else {
        package.isFragile(false);
    }
    postoffice.storage.push(package);
    postoffice.dayarchive.push(infForPostOffice);
};