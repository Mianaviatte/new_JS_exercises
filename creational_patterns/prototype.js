const car = {
    wheels: 4,
  
    init() {
      console.log(`My owner is ${this.owner} and I have ${this.wheels} wheels to ride whole world!`)
    }
  }
  
  const carWithOwner = Object.create(car, {
    owner: {
      value: 'Chris'
    }
  })
  
  console.log(carWithOwner.__proto__ === car)
  
  carWithOwner.init()