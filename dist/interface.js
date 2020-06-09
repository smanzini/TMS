"use strict";
//interface serve per riciclare il tipo di dato in qualsiasi altra funzione
function showUser(user) {
    console.log('Nome: ' + user.firstname + ' , Cognome: ' + user.lastname);
}
function showUser2(user) {
    console.log('Nome: ' + user.firstname + ' , Cognome: ' + user.lastname);
}
showUser({ lastname: 'Manzini', firstname: 'Stefano' });
showUser2({ lastname: 'Manzini', firstname: 'Stefano' });
function showUser3(user) {
    console.log('Nome: ' + user.firstname + ' , Cognome: ' + user.lastname + ' , ' + 'Indirizzo: ' + user.address);
}
showUser3({ lastname: 'Manzini', firstname: 'Stefano' });
