"use strict";
// classes extension
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//import { stringify } from "querystring";
var Animalbase = /** @class */ (function () {
    //tipo: number -> avrei voluto inserire anche il numero della classe come proprietà, ad esempio 1 per Animalbase e 2 per i derivati
    function Animalbase(name) {
        this.name = name; ////inizializzo la proprietà della classe nel constructor 
        //this.tipo = tipo;
    }
    Animalbase.prototype.getName = function () {
        return 'Il mio nome è ' + this.name; // this.name è la proprietà della classe
    };
    Animalbase.prototype.move = function (distance) {
        console.log('e volo per ' + distance + ' kilometri');
    };
    return Animalbase;
}());
var tortora = new Animalbase('tortora'); // creo una classe tortora all'interno del gruppo di classi Animalbase
console.log(tortora.getName()); // il mio nome è colomba
tortora.move(200); // e volo per 200 kilometri
var Birds = /** @class */ (function (_super) {
    __extends(Birds, _super);
    function Birds(name, place) {
        var _this = _super.call(this, name) || this;
        _this.place = place;
        return _this;
    }
    Birds.prototype.getPlace = function () {
        return this.place; //questa è l'implementazione del metodo
    };
    Birds.prototype.setPlace = function (place) {
        this.place = place; //questa è l'implementazione del metodo
    };
    Birds.prototype.move = function (distance) {
        //super.move(distance); ->così eredito il metodo move con la variabile distanza dalla classe principale
        //ora invece sovrascrivo con console.log e non utilizzo il metodo ereditato
        console.log('e volo senza stancarmi per ' + distance + ' kilometri');
    };
    return Birds;
}(Animalbase));
//ora aggiungo la classe colomba del gruppo Birds che eredita da Animalbase e con due proprietà (non più una) descritte nel nuovo constructor (name e place)
var colomba = new Birds('colomba', 'Genova');
//colomba.setPlace ('cielo')
console.log(colomba.getName() + ' abito a ' + colomba.getPlace());
colomba.move(150);
