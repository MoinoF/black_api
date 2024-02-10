const knex = require('../../database/connection')
const bcrypt = require('bcrypt')

class UserCreate {

  async execute(name, email, password) {

    const date = new Date()

    const created_at = date

    console.log(created_at)


    try {

      const hash = await bcrypt.hash(password, 10)

      
    const data = {
      name,
      email,
      password: hash,
      created_at
    }

      const result = await knex.insert(data).table("users")

      if (result.length > 0) {
        return true
      } else {
        return false
      }
      
    } catch (error) {
      console.log(error);
      return false
    }

  }

}

module.exports = new UserCreate()