// es. arrivano dei dati da un WS e non conosciamo la struttura se sono strinfa, numerico, array, oggetto, indichiamo come 'any'

let età: any = 45;
età = [1, 3, 4]
età = 'fuck 45';

console.log (età)

let userData: any[] = [45, 'Stefano', 'Manzini', {address: 'Milano'}]
userData = ['444']
