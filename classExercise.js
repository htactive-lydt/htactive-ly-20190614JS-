// Syntax

class User {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }

}
// Modify prototype
User.prototype.sayHello = function() {
    console.log("Hello " + this.name);;
};

// Usage:
let user = new User("John");
user.sayHi();
user.sayHello();

// Class inheritance
class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed += speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} stopped.`);
    }
}

// Inherit from Animal by specifying "extends Animal"
class Rabbit extends Animal {
    // Overriding constructor
    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
    }
    hide() {
            console.log(`${this.name} hides!`);
        }
        // Overriding a method
    stop() {
        setTimeout(() => super.stop(), 1000); // call parent stop after 1sec
    }
}

let rabbit = new Rabbit("White Rabbit", 90);

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!

// Static function 
class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static compare(articleA, articleB) {
        return articleA.date - articleB.date;
    }
}

// usage
let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.compare);

console.log(articles[1].title); // CSS