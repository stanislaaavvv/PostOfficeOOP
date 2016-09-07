/**
 * Created by user on 9/5/16.
 */
function Postoffice () {
    this.storage = [];
    this.dayarchive = [];
    this.workers = [];
    this.letterbox = [];
}






Postoffice.prototype.sendLetter = function (letter) {
    this.storage.push(letter);
};

Postoffice.prototype.sendPackage = function (package) {
    this.storage.push(package);
};

Postoffice.prototype.showShipmentbyDate = function (date) {
    document.write('Shipments for date:'+date+''+'<br>')
    var strday = date.toString();
    if (strday.length == 1) {
        for (var i = 0 ; i < this.dayarchive.length ; i++) {
            if (this.dayarchive[i][5] == strday) {
                document.write(this.dayarchive[i]+'<br>');
            }
        }
    }
    if (strday.length == 2) {
        for (var i = 0 ; i < this.dayarchive.length ; i++) {
            if (this.dayarchive[i][5] == strday[0] && this.dayarchive[i][6] == strday[1]) {
                document.write(this.dayarchive[i]+'<br>');
            }
        }
    }
};

Postoffice.prototype.showPercentOfLetters = function () {
    var numberOfLetter = 0;
    for (var i = 0; i < this.dayarchive.length ; i++) {
        var indexOfType = postoffice.dayarchive[i].indexOf('Type') + 5;

        if (this.dayarchive[i][indexOfType] == 'L') {
            numberOfLetter++;
        }
    }
    var finalPercent = Math.floor((numberOfLetter / this.dayarchive.length) * 100);

    document.write('Percent of letters from all shipments is: '+finalPercent+'%'+'<br>');

};

Postoffice.prototype.showPercentOfFragilePackages = function (postman) {
    var numberOfFragilePackages = 0;
    var numberOfPackages = 0;
    for (var i = 0; i < postman.donework.length ; i++) {
        if (postman.donework[i].fragile) {
            numberOfFragilePackages++;
        }
        if (postman.donework[i].constructor.name == 'Package') {
            numberOfPackages++;
        }
    }
    console.log('Fragile:'+numberOfFragilePackages);
    console.log('Number'+numberOfPackages);
    var percent = Math.floor((numberOfFragilePackages / numberOfPackages) * 100);
    document.write('Percent of fragile packages from all packages is: '+percent+'%'+'<br>');
};

Postoffice.prototype.showPostmanWork = function (postman) {
    document.write('Today '+postman.name+' '+postman.lastname+' delivered '+postman.donework.length+' shipments!'+'<br>');
    var numletters = 0;
    var numpackages = 0;
    for (var i = 0; i < postman.donework.length ; i++) {
        if (postman.donework[i].constructor.name == 'Letter') {
            numletters++;
        }
        if (postman.donework[i].constructor.name == 'Package') {
            numpackages++;
        }
    }
    document.write('Postman delivered:'+numletters+' letters and '+numpackages+' packages!'+'<br>');
};

