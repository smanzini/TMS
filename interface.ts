//interface serve per riciclare il tipo di dato in qualsiasi altra funzione

interface iUser {
lastname: string,
firstname: string

}

function showUser (user: {lastname: string, firstname: string}){

console.log ('ShowUser '+ 'Nome: ' + user.firstname + ' , Cognome: ' + user.lastname)


}

function showUser2 (user: iUser){

    console.log ('ShowUser2 '+ 'Nome: ' + user.firstname + ' , Cognome: ' + user.lastname)
    
    
    }

showUser ({lastname: 'Manzini', firstname: 'Stefano'})
showUser2 ({lastname: 'Manzini', firstname: 'Stefano'})

// diverse proprietà in una interface ma non tutte obbligatorie
interface iUser2 {
    lastname:string,
    firstname: string
    address?: string, // ? vuol dire che può essere opzionale
    }

    function showUser3 (user: iUser2){

        console.log ('ShowUser3 ' + 'Nome: ' + user.firstname + ' , Cognome: ' + user.lastname + ' , '+ 'Indirizzo: '+ user.address)
        
        
        }

        showUser3 ({lastname: 'Manzini', firstname: 'Stefano', address: 'via Luigi Alamanni 8'})

//  iUser 3

interface iUser3 {
            lastname:string,
            firstname: string
            address?: string, //? vuol dire che può essere opzionale
            [propName: string]: any //interface può avere altre proprietà della funzione che non conosco adesso e non vado a dichiarare ora ma possono essere di tipo stringa e any
        }

        function showUser4 (user: iUser3){

            console.log ('ShowUser4 ' + 'Titolo: ' + user.title + ' Nome: ' + user.firstname + ' , Cognome: ' + user.lastname + ' , '+ 'Indirizzo: '+ user.address +' Sesso: ' + user.sex)
            
            
            }
    
            showUser4 ({lastname: 'Manzini', firstname: 'Stefano', title: 'Dr.', address: 'via Luigi Alamanni 8', sex: 'Maschio'}) //sex: 'maschio'