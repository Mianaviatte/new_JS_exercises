class User {
    constructor(name) {
      this.name = name
      this.room = null
    }
  
    send(message, to) {
      this.room.send(message, this, to)
    }
  
    receive(message, from) {
      console.log(`${from.name} => ${this.name}: ${message}`)
    }
  }
  
  class ChatRoom {
    constructor() {
      this.users = {}
    }
  
    register(user) {
      this.users[user.name] = user
      user.room = this
    }
  
    send(message, from, to) {
      if (to) {
        to.receive(message, from)
      } else {
        Object.keys(this.users).forEach(key => {
          if (this.users[key] !== from) {
            this.users[key].receive(message, from)
          }
        })
      }
    }
  }
  
const chris = new User('Chris')
const sara = new User('Sara')
const mara = new User('Mara')
const cara = new User('Cara')
  
const room = new ChatRoom()

room.register(chris)
room.register(sara)
room.register(mara)
room.register(cara)

chris.send('Nice to see you, honey!', sara)
cara.send('Do you trust yourself?', mara)
sara.send('Could you all send me your love? I\'ll bless you in return.')