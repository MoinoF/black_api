const knex = require('../../database/connection')

class SessionGet {

  async execute( id ) {

    try {

      const result = await knex.select().where({id: id}).table("sessions")

      if ( result.length > 0 ) {
        return result
      } else {
        return false
      }
      
    } catch (error) {
      console.log(error)
      return undefined
    }

  }

}

module.exports = new SessionGet()