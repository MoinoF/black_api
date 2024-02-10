const knex = require('../../database/connection')

class Home {
  
  async getInfo() {

    try {

      const data = await knex.select().table("home")
      
      return data
      
    } catch (error) {
      console.log(error);
      return undefined
    }

    
  }

}


module.exports = new Home()