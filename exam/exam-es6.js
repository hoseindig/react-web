console.log("test class run");

class Person {
    constructor(name = "یدون نام", age = 0) {
        // console.log(name);
        this.name = name;
        this.age = age;
    }
    sayHello() {
        // return "سلام "  +this.name
        return `نام : ${this.name} , سن: ${this.age} ساله`
    }
}

class Student extends Person {
    constructor(name, age, major = "بدون رشته") {
        super(name, age);
        this.major = major
    }
    hasMajor() {
        return !!this.major;
    }
    sayHello() {
        let wel_txt = super.sayHello()

        if (this.hasMajor()) {
            wel_txt += " , " + this.major
        }
        return wel_txt
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    sayHello() {
        let hello = super.sayHello();
        if (this.homeLocation) {
            hello+=` ,  از شهر : ${this.homeLocation} `
        }

        return hello
    }

}
// const me = new Person("حسین شیخی", 36);
// console.log(me.sayHello())
//
// const me2 = new Student("حسین شیخی", 36, 'فناوری اطلاعات');
// console.log(me2.hasMajor())

const me2 = new Traveler("حسین شیخی", 36, 'تهران');
console.log(me2.sayHello())

const me1 = new Traveler();
console.log(me1.sayHello())
