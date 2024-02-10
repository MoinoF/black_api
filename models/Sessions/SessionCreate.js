const knex = require('../../database/connection')

class UserCreate {

  async execute( data = {}) {

    try {

      const result = await knex.insert(data).table('sessions')

      if ( result.length > 0 ) {
        return true
      } else {
        return false
      }
      
    } catch (error) {
      console.log(error)
      return undefined
    }

  }

}

module.exports = new UserCreate()