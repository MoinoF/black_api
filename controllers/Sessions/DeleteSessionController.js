const SessionDelete = require('../../models/Sessions/SessionDelete')
const data_exist = require('../functions/data_exist')
const validate_id = require('../functions/validate_id')


class DeleteSessionController {

  async execute( req, res ) {

    try {

      const { id } = req.params

      const valid_id = validate_id.execute( id )

      if ( valid_id ) {

        const session_data = data_exist.execute(id)

        if ( session_data ) {

          const delete_session = await SessionDelete.execute(id)

          if (delete_session === undefined) {
            res.status(500) 
            res.json({
              status: false,
              msg: "Ocorreu um erro no servidor!"
            })
            return
          }

          if (delete_session === false) {
            res.status(400)
            res.json({
              status: false,
              msg: "Sessão não encontrada"
            })
            return
          }

          if (delete_session === true) {
            res.status(200)
            res.json({
              status: true,
              msg: "Deleted!"
            })
          }

        } else {
          res.status( 400 )
          res.json({
            status: false,
            msg: "A Sessao não existe!"
          })
          return
        }

      } else {
        res.status( 400 )
        res.json({
          status: false,
          msg: "ID inválido!"
        })
        return
      }
      
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

module.exports = new DeleteSessionController()