"use strict";
//classes
// Inheritance #
// In TypeScript, we can use common object-oriented patterns. 
// One of the most fundamental patterns in class-based programming is being able to extend 
// existing classes to create new ones using inheritance.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distanceInMeters) {
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof! Woof!');
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.bark(); // assegno la proprietà 'bark' dell'oggetto 'dog' 
dog.move(10); // assegno la proprietà 'move' dell'oggetto 'dog' 
dog.bark();
// ....
var animal = /** @class */ (function () {
    function animal(name) {
        this.name = name;
    }
    animal.prototype.getName = function () {
        return 'il mio nome è' + this.name;
    };
    return animal;
}());
// classes: public, protected, private
// public se per oggetto creato si vuole mantenere la possibilità di cambiare la proprietà dell'oggetto (es. lesson.description)
var Lesson = /** @class */ (function () {
    function Lesson(type, lenght, title, description) {
        // private vuol dire che la proprietà non è neppure accessibile dalle classi che ereditano dalla principale
        this.instances = 0;
        this.type = type; //inizializzo la proprietà all'interno della classe
        this.lenght = lenght;
        this.title = title;
        this.description = description;
        this.instances++;
    }
    Lesson.prototype.getInstances = function () {
        return this.instances;
    };
    return Lesson;
}());
var VideoLesson = /** @class */ (function (_super) {
    __extends(VideoLesson, _super);
    function VideoLesson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoLesson.prototype.setDescription = function (desc) {
        this.description = desc;
    };
    return VideoLesson;
}(Lesson));
var lesson = new Lesson('videocorso', 4, 'intro', ' '); //creo una classe lesson (istanzo la classe principale) all'interno del gruppo di classi Lesson
//lesson.description = 'This is my course description' -> description è una proprietà che ho settato come 'protected' quindi posso accedervi solo creando una estensione della classe (vedi sopra)
//console.log (lesson.description)
