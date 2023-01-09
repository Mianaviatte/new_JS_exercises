class Database {
    constructor(data) {
      if (Database.exists) {
        return Database.instance
      }
      Database.instance = this
      Database.exists = true
      this.data = data
    }
  
    getData() {
      return this.data
    }
  }
  
const postgres = new Database('PostgreSQL')
console.log(postgres.getData())

const mongo = new Database('MongoDB')
console.log(mongo.getData())

const mysql = new Database('MySQL')
console.log(mysql.getData())