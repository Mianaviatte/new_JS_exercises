// Interface Segregation Principle

// Purely developed interface:
// 
// class Animal {
//   constructor(name) {
//     this.name = name
//   }
//
//   walk() {
//     console.log(`${this.name} can walk`)
//   }
//
//   swim() {
//     console.log(`${this.name} can swim`)
//   }
//
//   fly() {
//     console.log(`${this.name} can fly`)
//   }
// }
//
// class Dog extends Animal {
//   fly() {
//     return null
//   }
// }
//
// class Eagle extends Animal {
//   swim() {
//     return null
//   }
// }
//
// class Whale extends Animal {
//   fly() {
//     return null
//   }
//
//   walk() {
//     return null
//   }
// }
//


class Animal {
    constructor(name) {
      this.name = name
    }
  }
  
  const swimmer = {
    swim() {
      console.log(`${this.name} can swim nicely.`)
    }
  }
  
  const flier = {
    fly() {
      console.log(`${this.name} can flu nicely.`)
    }
  }
  
  const walker = {
    walk() {
      console.log(`${this.name} can walk far distances.`)
    }
  }
  
class Dog extends Animal {}
class Raven extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker)
Object.assign(Raven.prototype, flier, walker)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog('Fenrir')
dog.walk()
dog.swim()

const raven1 = new Raven('Huginn')
eagle.fly()
eagle.walk()

const raven2 = new Raven('Muninn')
eagle.fly()
eagle.walk()

const whale = new Whale('Ouroboros')
whale.swim()