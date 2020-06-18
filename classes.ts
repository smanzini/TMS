//classes
// Inheritance #
// In TypeScript, we can use common object-oriented patterns. 
// One of the most fundamental patterns in class-based programming is being able to extend 
// existing classes to create new ones using inheritance.

class Animal { //Animal è una classe ovvero un oggetto
    move(distanceInMeters: number) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal { // This example shows the most basic inheritance feature: classes inherit properties and methods from base classes. Here, Dog is a derived class that derives from the Animal base class using the extends
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark(); // assegno la proprietà 'bark' dell'oggetto 'dog' 
dog.move(10); // assegno la proprietà 'move' dell'oggetto 'dog' 
dog.bark();

// ....

class animal {
    name: string
    constructor(name:string) {
this.name = name;
    }
getName() { //getName è un metodo e ha il formato metodo (x:) {}
    return 'il mio nome è' + this.name;
    }
}

// classes: public, protected, private
// public se per oggetto creato si vuole mantenere la possibilità di cambiare la proprietà dell'oggetto (es. lesson.description)

class Lesson { //qui definisco il gruppo di classi Lesson ma non creo la classe che creo sotto con 'let lesson = new Lesson' 
    public type: string // 'type' è la proprietà della classe; 'public' vuol dire che posso definire la proprietà della classe 'Lesson' sia all'interno dell'oggetto 'Lesson' ovvero qui e anche all'interno della classe ovvero nel 'constructor' più sotto
    public lenght: number
    public title: string
    protected description?: string //protected vuol dire che non posso accedere alla proprietà dall'oggetto ma devo creare una classe 'extended' che eredita le proprietà dalla mia classe
                                    // private vuol dire che la proprietà non è neppure accessibile dalle classi che ereditano dalla principale
   private instances: number = 0
   
    constructor(type: string, 
        lenght: number,
        title: string,
        description?: string){
    this.type = type; //inizializzo la proprietà all'interno della classe
    this.lenght = lenght;
    this.title = title;
    this.description = description;
    this.instances++
    }
    getInstances (){
        return this.instances;
    }
}
class VideoLesson extends Lesson {
    setDescription (desc : string){
    this.description = desc;
    }
}
let lesson = new Lesson('videocorso', 4, 'intro',' '); //creo una classe lesson (istanzo la classe principale) all'interno del gruppo di classi Lesson

//lesson.description = 'This is my course description' -> description è una proprietà che ho settato come 'protected' quindi posso accedervi solo creando una estensione della classe (vedi sopra)
//console.log (lesson.description)
