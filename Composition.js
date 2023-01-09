// Composition

function createDeveloper(name) {
    const developer = {name}
    return {
      ...developer,
      ...canCode(developer)
    }
  }
  
  function canCode({ name }) {
    return {
      code: () => console.log(`${name} is coding something miraculous...`)
    }
  }
  
  function canAngular({ name }) {
    return {
      angular: () => console.log(`${name} is working on Angular app...`)
    }
  }

  function canReactAndVue({ name }) {
    return {
      react: () => console.log(`${name} is working on React app...`),
      vue: () => console.log(`${name} is working on Vue app...`)
    }
  }
  
  function canNodejs({ name }) {
    return {
      nodejs: () => console.log(`${name} is working on Node JS app...`)
    }
  }
  
  function createFrontend(name) {
    const developer = createDeveloper(name)
  
    return {
      ...developer,
      ...canAngular(developer),
      ...canReactAndVue(developer)
    }
  }
  
  function createBackend(name) {
    const developer = createDeveloper(name)
  
    return {
      ...developer,
      ...canNodejs(developer)
    }
  }
  
  function createFullstack(name) {
    const developer = createDeveloper(name)
  
    return {
      ...developer,
      ...canNodejs(developer),
      ...canAngular(developer),
      ...canReactAndVue(developer)
    }
  }
  
const developer = createDeveloper('Chris')
developer.code()

const frontend = createFrontend('Mark')
frontend.code()
frontend.angular()
frontend.react()
frontend.vue()

const backend = createBackend('Helen')
backend.code()
backend.nodejs()

const fullstack = createFullstack('Ingwar')
fullstack.code()
fullstack.angular()
fullstack.nodejs()