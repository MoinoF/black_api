const knex = require("../../database/connection")

class SessionUpdate {

  async execute( data, id ) {


    try {

      const result = await knex.update(data).where({id:  id}).table("sessions")

      if ( result ) {
        return true
      } else {
        return false
      }
      
    } catch (error) {
      console.log(error)
      return false
    }

  }

}

module.exports = new SessionUpdate