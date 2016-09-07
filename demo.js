/**
 * Created by user on 9/5/16.
 */



var postoffice = new Postoffice();

var creator = new PostofficeFactory(postoffice);

creator.createLetterbox(25);
creator.makeWorkers(30);
var citizen = [];
citizen = creator.makeSevenCitizens();


citizen[1].sendLetter(citizen[6],postoffice);
citizen[1].sendPackage(citizen[3],70,80,65,true,postoffice);
citizen[2].sendPackage(citizen[3],70,80,65,false,postoffice);
citizen[3].sendPackage(citizen[4],70,80,65,true,postoffice);
citizen[5].sendLetter(citizen[6],postoffice);
citizen[4].sendLetter(citizen[6],postoffice);
citizen[2].sendLetter(citizen[6],postoffice);


//Take 1 Lettertaker
for (var i = 0; i < postoffice.workers.length; i++) {
    if (postoffice.workers[i].constructor.name == 'Letterstaker') {
        var lettertaker = postoffice.workers[i];
        break;
    }
}
// Take 1 Postman
for (var j = 0; j < postoffice.workers.length; j++) {
    if (postoffice.workers[j].constructor.name == 'Postman') {
        var postman = postoffice.workers[j];
        break;
    }
}
if (postoffice.storage.length < 50 ) {
    lettertaker.collectLetter(postoffice);
}


postman.deliver(postoffice);
//postoffice.dayarchive.push('Date:31 Month:2 Hour:15 Type:Letter From:Mitko To:Ivan');

postoffice.showShipmentbyDate(7);
postoffice.showPercentOfLetters();
postoffice.showPercentOfFragilePackages(postman);
postoffice.showPostmanWork(postman);