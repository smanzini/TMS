"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car(version, //proprietà nel constructor
    name, model, year, color) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.version = version; //inizializzo la prima proprietà nel constructor
        //this.color = color -> ma non è necessario inizializzare le altre proprietà 
        // esiste già l'inizializzazione delle proprietà nel constructor (ovvero this.proprietà) perché il constructor lo fa in maniera automatica
        // non posso crere il metodo 'setVersion (version:string)' che va ad impostare la version
        // perché non posso inizializzare qui la propietà con 'this.version = version' perché version è solo readonly;
        // posso inizializzarla in alto quando definisco la classe Car con 'readonly version:string = '1.2'
        // oppure inserisco il valore (sotto) con let car = new Car ('2.1') 
    }
    Car.prototype.getVersion = function () {
        return this.version; //ritorna la proprietà
    };
    Car.prototype.getColor = function () {
        return this.color;
    };
    Car.prototype.getYear = function () {
        return this.year;
    };
    return Car;
}());
var car = new Car('2.1', 'Fiat', '500', '1987', 'rosso fiammante');
console.log('La versione è ' + car.getVersion());
console.log('Il colore è ' + car.getColor());
console.log('L anno è ' + car.getYear());
