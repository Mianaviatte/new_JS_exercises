  // Inheritance

  class Developer {
    constructor(name) {
      this.name = name
    }
  
    code() {
      console.log(`${this.name} is coding something miraculous...`)
    }
  }
  
  class Frontend extends Developer {
    angular() {
      console.log(`${this.name} is working on Angular app...`)
    }
  }
  
  class Backend extends Developer {
    nodejs() {
      console.log(`${this.name} is working on Node JS app...`)
    }
  }
  
  class Fullstack extends Developer {
    
    angular() {
      console.log(`${this.name} is working on Angular app...`)
    }

    nodejs() {
      console.log(`${this.name} is working on Node JS...`)
    }
  }
  
  const programmer = new Developer('Chris')
  programmer.code()
  
  const frontend = new Frontend('Sara')
  frontend.code()
  frontend.angular()
  
  const backend = new Backend('Cara')
  backend.code()
  backend.nodejs()