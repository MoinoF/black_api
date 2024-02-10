const knex = require("../../database/connection")

class UserUpdate {

  async execute( data, id ) {


    try {


        const result = await knex.update(data).where({ id: id }).table("users")

        if ( result ) {
          return true
        } else {
          return false
        }

      
    } catch (error) {
      console.log( error )
      return false
    }

  }

}

module.exports = new UserUpdate()