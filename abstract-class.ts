// una classe in cui abbiamo implementato un metodo di tipo abstract 
//che non si puà instanziare (ovvero creare delle istanze o classi del gruppo) 
//ma bisogna per forza estendere e la classe estesa deve implementare tutti i metodi
//import { match } from "assert"

abstract class Logger { //Logger è una classe abstract che quindi non si puà istanziare (non posso creare new)
    abstract log (msg: string) : void //metodo abstract 'log'
    generateid (): number { //questo è il metodo (non astratto) della classe Logger ma non viene ereditato dalle classi estese
        return Math.round (Math.random()*10)
                            }
                        }

interface Log {
msg: string
id: number
getMessage ():string //questa è solo la signature di un metodo non la sua implementazione
                    // non posso fare implementazione di questo metodo nell'interface ma più sotto
}

class consoleLogger extends Logger implements Log { //devo estendere la classe 
    msg: string = "";
    id: number = 0;
    log (msg:string): any { //occorre implementare tutti i metodi che sono abstract nella classe originale
        console.log(msg)
                         }
    getMessage(){
        return this.msg; //implementazione del metodo getMessage definito nell'interface
    }
                        }



let clog = new consoleLogger(); //la classe clog ha ereditato il metodo log che è stato implementato nella classe estesa
                                // e ha ereditato anche il metodo generatedid dalla classe Logger perché non è un metodo abstract
console.log('Logging to console')
console.log (clog.generateid())