"use strict";
// with inheritance
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greet() {
        return `Hello, ${this.firstName} ${this.lastName}`;
    }
    getAge() {
        return this.age;
    }
}
class User extends Person {
    constructor(firstName, lastName, age) {
        super(firstName, lastName, age);
    }
}
class Admin extends Person {
    constructor(firstName, lastName, age, role) {
        super(firstName, lastName, age);
        this.role = role;
    }
    greet() {
        return `Hello, ${this.firstName} ${this.lastName}, Role:${this.role} `;
    }
    manageUsers() {
        return `Managing users with role ${this.role}`;
    }
}
let user1 = new User("John", "Doe", 25);
let admin1 = new Admin("Alice", "Smith", 35, "Adminstrator");
console.log(user1.greet());
console.log(user1.getAge());
console.log(admin1.greet());
console.log(admin1.getAge());
console.log(admin1.manageUsers());
