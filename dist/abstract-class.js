"use strict";
// una classe in cui abbiamo implementato un metodo di tipo abstract 
//che non si puà instanziare (ovvero creare delle istanze o classi del gruppo) 
//ma bisogna per forza estendere e la classe estesa deve implementare tutti i metodi
//import { match } from "assert"
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
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.generateid = function () {
        return Math.round(Math.random() * 10);
    };
    return Logger;
}());
var consoleLogger = /** @class */ (function (_super) {
    __extends(consoleLogger, _super);
    function consoleLogger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.msg = "";
        _this.id = 0;
        return _this;
    }
    consoleLogger.prototype.log = function (msg) {
        console.log(msg);
    };
    consoleLogger.prototype.getMessage = function () {
        return this.msg; //implementazione del metodo getMessage definito nell'interface
    };
    return consoleLogger;
}(Logger));
var clog = new consoleLogger(); //la classe clog ha ereditato il metodo log che è stato implementato nella classe estesa
// e ha ereditato anche il metodo generatedid dalla classe Logger perché non è un metodo abstract
console.log('Logging to console');
console.log(clog.generateid());
