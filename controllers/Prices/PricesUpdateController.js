const PricesUpdate = require('../../models/Prices/PricesUpdate')
const validate_data = require('../functions/validate_data')


class PricesUpdateController {

  async execute( req, res ) {

    try {

      const { studio, outdoor, weeding, aniversary } = req.body


      const valid_data = validate_data.withData([ studio, outdoor, weeding, aniversary ]) 

      if (valid_data) {

        const data = {}

        if (studio !== undefined) {
          data.studio = studio
        }

        if (outdoor !== undefined) {
          data.outdoor = outdoor
        }
        
        if (weeding !== undefined) {
          data.weeding = weeding
        }
        
        if (aniversary !== undefined) {
          data.aniversary = aniversary
        }

        const result = await PricesUpdate.execute(data)

        if (result === undefined) {
          res.status(500)
          res.json({
            status: false,
            msg: "Ocorreu um erro no servidor"
          })
          return
        }

        if (result === false) {
          res.status(400)
          res.json({
            status: false,
            msg: "Campos invalidos!"
          })
          return
        }

        if (result) {
          res.status(201)
          res.json({
            status: true,
            msg: "Done"
          })
          return
        }

      } else {
        res.status(400)
        res.json({status: false, msg: "Nehum campo prenchido!"})
        return
      }
      
    } catch (error) {
      console.log(error)
      res.status(400);
      res.json({
        status: false,
        msg: "Ocorreu um erro!"
      })
      return
    }

  }

}

module.exports = new PricesUpdateController()