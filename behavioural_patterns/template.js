class Employee {
    constructor(name, salary) {
      this.name = name
      this.salary = salary
    }
  
    responsibilities() {}
  
    work() {
      return `Our colleague ${this.name} does ${this.responsibilities()} everyday.`
    }
  
    getPaid() {
      return `Our colleague ${this.name} earns ${this.salary} per month.`
    }
  }
  
  class Developer extends Employee {
    constructor(name, salary) {
      super(name, salary)
    }
  
    responsibilities() {
      return 'software development'
    }
  }
  
  class Tester extends Employee {
    constructor(name, salary) {
      super(name, salary)
    }
  
    responsibilities() {
      return 'software testing'
    }
  }
  
  const dev1 = new Developer('Chris', 1000)
  console.log(dev.getPaid())
  console.log(dev.work())

  const dev2 = new Developer('Joseph', 5000)
  console.log(dev.getPaid())
  console.log(dev.work())
  
  const tester1 = new Tester('Merry', 2500)
  console.log(tester.getPaid())
  console.log(tester.work())

  const tester2 = new Tester('Helen', 4300)
  console.log(tester.getPaid())
  console.log(tester.work())

  const dev3 = new Developer('Arthur', 3400)
  console.log(dev.getPaid())
  console.log(dev.work())