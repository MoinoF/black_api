const SessionUpdate = require("../../models/Sessions/SessionUpdate")
const SessionGet = require("../../models/Sessions/SessionGet")
const validate_data = require("../functions/validate_data")
const validate_id = require("../functions/validate_id")

class UpdateSessionController {

  async execute( req, res ) {

    try {

      const { id } = req.params

      const { category, total_photos, date, hours } = req.body

      const valid_id = validate_id.execute( id )

      if ( valid_id ) {

        const valid_data = validate_data.withData([category, total_photos, date, hours])

        if ( valid_data ) {

          const session_data = await SessionGet.execute( id ) 
  
  
          if ( session_data === undefined) {
            res.status(500)
            res.json({
              status: false,
              msg: "Ocorreu um erro no servidor!"
            })
            return
          }
  
          if (session_data === false ) {
            res.status(400)
            res.json({
              status: false,
              msg: "ID inválido!"
            })
            return
          }
  
          if ( session_data ) {

            const data = {}

            if (category !== undefined ) {
              data.category = category
            }
            
            if (total_photos !== undefined ) {
              data.total_photos = total_photos
            }
            
            if (date !== undefined ) {
              data.date = date
            }
            
            if (hours !== undefined ) {
              data.hours = hours
            }
            
            const result = await SessionUpdate.execute( data, id)

            if ( result ) {
              res.status(200)
              res.json({
                status: "Updated"
              })
             } 
            
  
          }

        } else {
          res.status( 400 )
          res.json({
            status: false,
            err: "Nenhum usuario encontrado!"
          })
        }


      } else {
        res.status( 400 )
        res.json({
          status: false,
          msg: "ID inválido!"
        })
      }
      
    } catch (error) {
      console.log(error)
      res.status( 400 )
      res.json({
        status: false,
        msg: "Ocorreu um erro!"
      })
      return
    }

  }

}

module.exports = new UpdateSessionController()