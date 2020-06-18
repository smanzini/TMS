// codificare una lista di valori
//DAYS è un tipo di enum che riguarda i giorni

enum DAYS { //DAYS è un arrau
    MON = 1, // si pone 1 il primo giorno della settimana
    TUE,
    WED,
    THU,
    FRI,
    SAT,
    SUN,
}

// console.log (DAYS.MON) ritorna il numero del giorno -> 1
//console.log (DAYS [1]) ritorna il valore stringa corrispondente al numero 1

function isWorkingDay (day: DAYS) {
if (day === DAYS.SUN || day === DAYS.SAT) {
    return 'è festivo';
}
    
return 'è lavorativo';

}

// console.log (DAYS.MON) ritorna il numero del giorno -> 1
//console.log (DAYS [1]) ritorna il valore stringa corrispondente al numero 1
const myFirstDay: DAYS = 1
console.log (DAYS [myFirstDay], isWorkingDay (myFirstDay))//

    const myDay: DAYS = 7

    console.log ((DAYS[myDay]), isWorkingDay(myDay))
