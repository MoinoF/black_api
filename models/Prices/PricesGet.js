const knex = require('../../database/connection')

class PricesGet {

  async execute() {

    try {

      const prices_data = await knex.select().table("prices")

      if (prices_data.length > 0) {
        return prices_data
      } else {
        return false
      }
      
    } catch (error) {
      console.log(error)
      return undefined
    }

  }

}

module.exports = new PricesGet()