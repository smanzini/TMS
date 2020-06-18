// class type
// una interface può estendere una classe per ereditare la signature (tipo di parametri) dei metodi

class Mylogger {
    log (msg:string):void {
      console.log (msg)  
                            }
generateID(): number {
    return Math.round (Math.random()*1000000)
                    }
                }

interface Mylog extends Mylogger {
    email :string
                                    }



//class MyMailLogger implements Mylog {
  //  email: string
  //  log() {
  //  }
  //  generateID():number{
  //      return 1; 
  //  }
// }

//let mailLog: MyMailLogger;
//function logData (logger: MyMailLogger)
