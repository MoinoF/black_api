const PricesGet = require("../../models/Prices/PricesGet")

class PricesGetController {

  async execute( req, res ) {

    try {

      const prices_data = await PricesGet()

      


      
    } catch (error) {
      console.log(error)
      res.status(400)
      res.json({
        status: false,
        msg: "Ocorreu um erro!"
      })
      return
    }

  }

}

module.exports = new PricesGetController()