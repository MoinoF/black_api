const knex = require('../../database/connection')

class PricesUpdate {

  async execute(data) {

    try {
   
      const result = await knex.update(data).table('prices')

      if (result) {
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

module.exports = new PricesUpdate()