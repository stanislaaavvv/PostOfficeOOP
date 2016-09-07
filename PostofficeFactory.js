/**
 * Created by user on 9/6/16.
 */

var workersFirstName = ['Ivan','Dimitur','Vasil','Petur','Stoyan'];
var workersLastName = ['Karamfilov','Iliev','Petkov','Zaprqnov','Todorov'];
var workersYear = ['15','16','10','22','11'];
function PostofficeFactory (PostOffice) {
  this.postoffice = PostOffice;
};

PostofficeFactory.prototype.addWorker = function (worker) {
    this.postoffice.workers.push(worker);
};

PostofficeFactory.prototype.createLetterbox = function (numberofBoxes) {
    var i = 0;
    var arrayofboxes = [];
    while (i < numberofBoxes){
        arrayofboxes.push(new Letterbox(i+1));
        i++;
    }
    this.postoffice.letterbox = arrayofboxes;

};

PostofficeFactory.prototype.makeWorkers = function (numberofWorkers) {
    var i = 0;
    var arrayofworkers = [];
    while (i < numberofWorkers){
        var firstnameRand = Math.floor(Math.random() * workersFirstName.length);
        var lastnameRand = Math.floor(Math.random() * workersLastName.length);
        var workyearsRand = Math.floor(Math.random() * workersYear.length);
        var checkvalue = Math.floor(Math.random() * 2);
        if (checkvalue == 0) {
            arrayofworkers.push(new Postman(workersFirstName[firstnameRand],workersLastName[lastnameRand],workersYear[workyearsRand]));
        }else {
            arrayofworkers.push(new Letterstaker(workersFirstName[firstnameRand],workersLastName[lastnameRand],0.5))
        }
        i++;
    }
    this.postoffice.workers = arrayofworkers;

};

PostofficeFactory.prototype.makeSevenCitizens = function () {
    var citizen1 = new Citizen('Mitko','Ivanov','ulica Vrubnica');
    var citizen2 = new Citizen('Todor','Kalanov','ulica Vrubnica 2');
    var citizen3 = new Citizen('Ivan','Botevgradski','ulica Vrubnica 23');
    var citizen4 = new Citizen('Georgi','Ismailov','ulica Vrubnica 55');
    var citizen5 = new Citizen('Qsen','Milanov','ulica Vrubnica 22');
    var citizen6 = new Citizen('Uri','Rumenov','ulica Vrubnica 99');
    var citizen7 = new Citizen('Qnislav','Zaprqnov','ulica Vrubnica 11');
    return [citizen1,citizen2,citizen3,citizen4,citizen5,citizen6,citizen7];
};

