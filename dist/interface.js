"use strict";
//interface serve per riciclare il tipo di dato in qualsiasi altra funzione
function showUser(user) {
    console.log('ShowUser ' + 'Nome: ' + user.firstname + ' , Cognome: ' + user.lastname);
}
function showUser2(user) {
    console.log('ShowUser2 ' + 'Nome: ' + user.firstname + ' , Cognome: ' + user.lastname);
}
showUser({ lastname: 'Manzini', firstname: 'Stefano' });
showUser2({ lastname: 'Manzini', firstname: 'Stefano' });
function showUser3(user) {
    console.log('ShowUser3 ' + 'Nome: ' + user.firstname + ' , Cognome: ' + user.lastname + ' , ' + 'Indirizzo: ' + user.address);
}
showUser3({ lastname: 'Manzini', firstname: 'Stefano', address: 'via Luigi Alamanni 8' });
function showUser4(user) {
    console.log('ShowUser4 ' + 'Titolo: ' + user.title + ' Nome: ' + user.firstname + ' , Cognome: ' + user.lastname + ' , ' + 'Indirizzo: ' + user.address + ' Sesso: ' + user.sex);
}
showUser4({ lastname: 'Manzini', firstname: 'Stefano', title: 'Dr.', address: 'via Luigi Alamanni 8', sex: 'Maschio' }); //sex: 'maschio'
