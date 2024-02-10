const knex = require('../../database/connection')

class UserExist {

  async email(email) {

    try {

      const result = await knex.select("email").table("users").where({email : email})

      if (result.length > 0) {
        return true
      } else {
        return false
      }

    } catch (error) {
      console.log(error);
      return undefined
    }

  }

}

module.exports = new UserExist()