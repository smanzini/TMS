class MathCalc {
    // PI = 3.1459 -> se fosse una proprietà dell'oggetto metterei PI= 3.1459 
    static readonly PI = 3.1459; //proprietà statica che fa parte della classe e non dell'istanza della classe
    static readonly rate = 1.12;
    static calcPerimetroDelCerchio (r:number){ //metodo statico che ha il formato metodo(x:){}
        return 2*MathCalc.PI*r;
                                            }
    calcEurtoDollar (eur:number){
        return eur/ MathCalc.rate
    }
                }

let calc = new MathCalc //calc è 

//se fosse una proprietà dell'oggetto qui metterei console.log (calc.PI) perché PI sarebbe una proprietà dell'oggetto 
//console.log ('PiGreco è pari a ' + MathCalc.PI) // invece metto console.log (Mathcalc.PI) perché PI è una proprietà statica della classe
console.log ('PiGreco è pari a ' + MathCalc.PI + ' quindi con raggio pari a 10, il perimetro del cerchio è ' + MathCalc.calcPerimetroDelCerchio(10))
console.log ('10 euro sono pari a ' + calc.calcEurtoDollar (10)+ ' dollari')