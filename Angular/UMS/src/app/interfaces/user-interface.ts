//import { UserInterface } from './user-interface';
// (40) creo il file interface con Angular
// (82) creo una nuova classe userClass che esporto per poterla utilizzare in altri files (Hidran lo chiama User) che implementa UserInterface per poter settare l'id degli utenti -> viene importato automaticamente UserInterface MA NON serve, per cui lo tolgo (in alto)
export class userClass implements UserInterface {
            id: number;
            pnr: string;
            service: string;
            name: string;
            lastname: string;
            from: string;
            to: string;
            date: string;
            rate;
            constructor () {
                this.id= 0; // (82) inizializzo tutti i valori a zero o vuoti -> quindi se id è zero allora sto inserendo un nuovo utente, se invece è maggiore di zero, vuol dire che sto modificando un utente
                this.pnr='';
                this.date='';
                this.from='';
                this.to='';
                this.lastname='';
                this.name='';
                this.service='';
                this.rate=0;
            }
}
export interface UserInterface { //(41) tipicizzo i parametri dell'array -> al posto del nome User utilizzato da Hidran, utilizzo UserInterface
            id: number;
            pnr: string;
            service: string;
            name: string;
            lastname: string;
            from: string;
            to: string;
            date: string;
            rate: number;
}
