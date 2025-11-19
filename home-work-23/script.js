class CalorieCalculator {
  constructor() {
    this.products = new Map()
  }

  addProduct(productName, calories) {
    this.products.set(productName, calories)
  }

  getProductCalories(productName) {
    if (this.products.has(productName)) {
      return this.products.get(productName)
    } else {
      return 'Product not found'
    }
  }

  removeProduct(productName) {
    this.products.delete(productName)
  }
}

// Тест
const calc = new CalorieCalculator()
calc.addProduct('Apple', 52)
calc.addProduct('Banana', 89)

console.log(calc.getProductCalories('Apple'))
console.log(calc.getProductCalories('Banana'))

calc.removeProduct('Apple')
console.log(calc.getProductCalories('Apple'))



class UniqueUsernames {
  constructor() {
    this.users = new Set()
  }

  addUser(username) {
    this.users.add(username)
  }

  exists(username) {
    return this.users.has(username)
  }

  count() {
    return this.users.size
  }
}

// Тестування
const uniqueUsernames = new UniqueUsernames()

uniqueUsernames.addUser('john_doe')
uniqueUsernames.addUser('jane_doe')
uniqueUsernames.addUser('john_doe') // повтор — Set его не добавит второй раз

console.log(uniqueUsernames.exists('john_doe')) // true
console.log(uniqueUsernames.exists('alex')) // false

console.log('Кількість унікальних імен:', uniqueUsernames.count()) // 2
