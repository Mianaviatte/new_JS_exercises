class SimpleMembership {
  constructor(name) {
    this.name = name
    this.cost = 150
  }
}

class StandardMembership {
  constructor(name) {
    this.name = name
    this.cost = 250
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name
    this.cost = 400
  }
}

class MemberFactory {
  static list = {
    simple: SimpleMembership,
    standard: StandardMembership,
    premium: PremiumMembership
  }

  create(name, type = 'simple') {
    const Membership = MemberFactory.list[type] || MemberFactory.list.simple
    const member = new Membership(name)
    member.type = type
    member.define = function() {
      console.log(`Our customer ${this.name} (${this.type} membership): ${this.cost} per month.`)
    }
    return member
  }
}

const factory = new MemberFactory()

const members = [
  factory.create('Chris', 'simple'),
  factory.create('Helen', 'premium'),
  factory.create('Merry'),
  factory.create('Joseph', 'standard'),
  factory.create('Sara', 'premium'),
  factory.create('Wolfgang'),
  factory.create('Alf', 'premium')
]

members.forEach(m => {
  m.define()
})