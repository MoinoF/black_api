const knex = require("../../database/connection")

class Delete {

  async execute( id ) {

    try {

      const result = await knex.delete().where({id: id}).table("users")

      return result
      
    } catch (error) {
      console.log( error )
      return false
    }

  }

}

module.exports = new Delete()