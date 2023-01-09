class MyIterator {
    constructor(data) {
      this.index = 0
      this.data = data
    }
  
    [Symbol.iterator]() {
      return {
        next: () => {
          if (this.index < this.data.length) {
            return {
              value: this.data[this.index++],
              done: false
            }
          } else {
            this.index = 0
            return {
              done: true,
              value: void 0
            }
          }
        }
      }
    }
  }
  
function* generator(collection) {
  let index = 0

  while (index < collection.length) {
    yield collection[index++]
  }
}
  
  
let iterator1 = new MyIterator(['I\'m', 'gonna', 'dance', 'dance', 'dance'])
let iterator2 = new MyIterator(['With', 'my', 'hands', 'hands', 'hands', 'above', 'my', 'head'])
let iterator3 = new MyIterator(['Hands', 'together', 'forgive', 'him', 'before', 'he\'s', 'dead', 'because'])
let iterator4 = new MyIterator(['I', 'wont', 'cry', 'for', 'you'])
let iterator5 = new MyIterator(['I', 'won\'t', 'crucify', 'the', 'things', 'you', 'do'])
let iterator6 = new MyIterator(['See', 'when', 'you\'re', 'gone', 'I\'ll', 'still', 'be', 'Bloody', 'Mary'])

let gen = generator(['I\'m', 'gonna', 'dance', 'dance', 'dance', 'With', 'my', 'hands', 'hands', 'hands', 'above', 'my', 'head'])