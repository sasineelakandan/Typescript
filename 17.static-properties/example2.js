"use strict";
class User {
    constructor(name) {
        this.name = name;
        User.totalUsers++;
    }
    getName() {
        return this.name;
    }
    static getTotalUsers() {
        return User.totalUsers;
    }
}
User.totalUsers = 0;
console.log(User.totalUsers, " Users at start");
const user1 = new User('Alice');
const user2 = new User('Bob');
console.log(user1.getName());
console.log(user2.getName());
console.log(User.totalUsers, "Users at end");
