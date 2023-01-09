class MyMath {
    constructor(initialValue = 0) {
      this.num = initialValue
    }
  
    square() {
      return this.num ** 2
    }
  
    cube() {
      return this.num ** 3
    }
  }
  
class Command {
  constructor(subject) {
    this.subject = subject
    this.commandsExecuted = []
  }

  execute(command) {
    this.commandsExecuted.push(command)
    return this.subject[command]()
  }
}
  
let calculate = new Command(new MyMath(7))

console.log(calculate.execute('square'))
console.log(calculate.execute('cube'))
console.log(calculate.execute('square'))
console.log(calculate.commandsExecuted)