const knex = require('../../database/connection')

class SessionsGet {

  async all() {


    try {

      const sessions_data = await knex.select().table('sessions')

      return sessions_data
      
    } catch (error) {
      console.log(error)
      return undefined
    }

  }

}

module.exports = new SessionsGet()