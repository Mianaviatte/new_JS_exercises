class Server {
    constructor(name, ip) {
      this.name = name
      this.ip = ip
    }
  
    getUrl() {
      return `https://${this.ip}:80`
    }
  }
  
  const aws = new Server('AWS Ukraine', '89.221.121.33')
  console.log(aws.getUrl())