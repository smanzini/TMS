//interface serve per riciclare il tipo di dato in qualsiasi altra funzione

interface iUser {
lastname: string,
firstname: string

}

function showUser (user: {lastname: string, firstname: string}){

console.log ('Nome: ' + user.firstname + ' , Cognome: ' + user.lastname)


}

function showUser2 (user: iUser){

    console.log ('Nome: ' + user.firstname + ' , Cognome: ' + user.lastname)
    
    
    }

showUser ({lastname: 'Manzini', firstname: 'Stefano'})
showUser2 ({lastname: 'Manzini', firstname: 'Stefano'})

// diverse proprietà in una interface ma non tutte obbligatorie
interface iUser2 {
    lastname:string,
    firstname: string
    address?: string, //? vuol dire che può essere opzionale
    }

    function showUser3 (user: iUser2){

        console.log ('Nome: ' + user.firstname + ' , Cognome: ' + user.lastname + ' , '+ 'Indirizzo: '+ user.address)
        
        
        }

        showUser3 ({lastname: 'Manzini', firstname: 'Stefano'})
        
interface iUser2 {
            lastname:string,
            firstname: string
            address?: string, //? vuol dire che può essere opzionale
            }