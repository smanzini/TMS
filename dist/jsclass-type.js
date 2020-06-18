"use strict";
// class type
// una interface può estendere una classe per ereditare la signature (tipo di parametri) dei metodi
var Mylogger = /** @class */ (function () {
    function Mylogger() {
    }
    Mylogger.prototype.log = function (msg) {
        console.log(msg);
    };
    Mylogger.prototype.generateID = function () {
        return Math.round(Math.random() * 1000000);
    };
    return Mylogger;
}());
//class MyMailLogger implements Mylog {
//  email: string
//  log() {
//  }
//  generateID():number{
//      return 1; 
//  }
// }
//let mailLog: MyMailLogger;
//function logData (logger: MyMailLogger)
