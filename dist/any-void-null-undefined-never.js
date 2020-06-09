"use strict";
// es. arrivano dei dati da un WS e non conosciamo la struttura se sono strinfa, numerico, array, oggetto, indichiamo come 'any'
var età = 45;
età = [1, 3, 4];
età = 'fuck 45';
console.log(età);
var userData = [45, 'Stefano', 'Manzini', { address: 'Milano' }];
userData = ['444'];
