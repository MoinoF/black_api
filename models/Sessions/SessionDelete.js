const knex = require('../../database/connection')

class SessionDelete {

  async execute( id ) {

    try {

      const result = await knex.delete().where({id: id}).table("sessions")

      if (result) {
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

module.exports = new SessionDelete()