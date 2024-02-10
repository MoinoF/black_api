const SessionGet = require("../../models/Sessions/SessionGet")
const SessionsGet = require("../../models/Sessions/SessionsGet")
const validate_id = require("../functions/validate_id")

class GetSessionsController {

  async all( req, res ) {

    try {

      const sessions_data = await SessionsGet.all()
      
      if ( sessions_data.length > 0 ) {
        res.status( 200 )
        res.json( sessions_data )
      } else {
        res.status( 500 ) 
        res.json({
          status: false,
          msg: "Ocorreu um erro no servidor!"
        })
      }
      
    } catch ( error ) {
      console.log( error )
      res.status( 400 )
      res.json({
        status: false,
        msg: "Ocorreu Um erro!"
      })
      return
    }

  }

  
  // By ID
  async byId( req, res ) {

    try {

      const { id } = req.params

      const valid_id = validate_id.execute( id )

      if ( valid_id ) {

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

        if (session_data) {
          res.status(200)
          res.json(session_data)
          return
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
        msg: "Ocorreu um errro!"
      })
      return
    }
    
  }

}

module.exports = new GetSessionsController()