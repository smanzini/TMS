"use strict";
// codificare una lista di valori
//DAYS è un tipo di enum che riguarda i giorni
var DAYS;
(function (DAYS) {
    DAYS[DAYS["MON"] = 1] = "MON";
    DAYS[DAYS["TUE"] = 2] = "TUE";
    DAYS[DAYS["WED"] = 3] = "WED";
    DAYS[DAYS["THU"] = 4] = "THU";
    DAYS[DAYS["FRI"] = 5] = "FRI";
    DAYS[DAYS["SAT"] = 6] = "SAT";
    DAYS[DAYS["SUN"] = 7] = "SUN";
})(DAYS || (DAYS = {}));
// console.log (DAYS.MON) ritorna il numero del giorno -> 1
//console.log (DAYS [1]) ritorna il valore stringa corrispondente al numero 1
function isWorkingDay(day) {
    if (day === DAYS.SUN || day === DAYS.SAT) {
        return 'è festivo';
    }
    return 'è lavorativo';
}
// console.log (DAYS.MON) ritorna il numero del giorno -> 1
//console.log (DAYS [1]) ritorna il valore stringa corrispondente al numero 1
var myFirstDay = 1;
console.log(DAYS[myFirstDay], isWorkingDay(myFirstDay)); //
var myDay = 7;
console.log((DAYS[myDay]), isWorkingDay(myDay));
