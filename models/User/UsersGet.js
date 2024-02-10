const knex = require('../../database/connection')


class UsersGet {

  //Get all users
  async all() {

    try {

      
    const data = await knex.select().table("users")

    return data
      
    } catch (error) {
      console.log(error)
      return undefined
    }


  }

  // Get by email
  async byEmail( email ) {

    try {

      
      const data = await knex.select().table("users").where({ email: email })

      if ( data.length > 0 ) {
        return data[0]
      } else {
        return false
      }
      
    } catch (error) {
      console.log(error)
      return undefined
    }

  }


  // Get ById
  async byId( id ) {

    try {

      const data = await knex.select(["id", "name", "email", "telephone", "whatsapp", "created_at"]).table("users").where({ id: id })

      if ( data.length > 0 ) {
        return data
      } else {
        return false
      }

      
    } catch (error) {
      console.log( error );
      return undefined
    }

  }


}

module.exports = new UsersGet()