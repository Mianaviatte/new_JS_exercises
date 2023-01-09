class MySum {
    constructor(initialValue = 42) {
      this.sum = initialValue
    }
  
    add(value) {
      this.sum += value
      return this
    }
  }
  
  let summa1 = new MySum()
  console.log(summa1.add(49).add(11).add(255).add(457).sum)
  
  let summa2 = new MySum(12)
  console.log(summa2.add(15).add(322).add(789).sum)