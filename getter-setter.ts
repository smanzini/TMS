// getter & setter
// es. variabile pubblica e si vuole intervenire prima che l'utente modifichi questa variabile

class User {
    private _name:string //_ per indicare che è privata e quindi utente non può modificarla
    // perché non mette constructor?
    constructor (_name:string) {
        this._name = _name
    }

    set name (name:string){ //name è il nome della proprietà e name è il tipo di parametro
        this._name = name.toUpperCase ();
                            }
    get name(){
        return this._name; //la proprietà _name che è l'Uppercase di name
                 }
             }


let user = new User('stefano');
user.name = ('stefano')
console.log (user.name);

