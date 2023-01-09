// Dependency inversion principle

class Fetch {
    async request(url) {
      const r = await fetch(url)
      return await r.json()
      // return Promise.resolve('Client data from fetch')
    }
  }
  
  class FetchClient {
    constructor() {
      this.fetch = new Fetch()
    }
  
    clientGet() {
      return this.fetch.request('clientdata.io')
    }
  }
  
  class LocalStorage {
    get() {
      const dataFromLocalStorage = 'Client data from local storage'
      return dataFromLocalStorage
    }
  }

  class LocalStorageClient {
    constructor() {
      this.localStorage = new LocalStorage()
    }
  
    clientGet(key) {
      return this.localStorage.get(key)
    }
  }
  
  class Database {
    constructor(client) {
      this.client = client
    }
  
    getData(key) {
      return this.client.clientGet(key)
    }
  }
    
  const db = new Database(new LocalStorageClient())
  
  console.log(db.getData('Portal'))