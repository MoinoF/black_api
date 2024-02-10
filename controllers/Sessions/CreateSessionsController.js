const SessionCreate = require("../../models/Sessions/SessionCreate");
const UsersGet = require("../../models/User/UsersGet");
const validate_data = require("../functions/validate_data");
const validate_id = require("../functions/validate_id");

class CreateSessionsController {

  async execute( req, res ) {

    try {

      const { user_id, category, total_photos, date, hours } = req.body;


      const valid_id = validate_id.execute( user_id )

      if ( valid_id ) {

        const data = [
          user_id,
          category,
          total_photos,
          date,
          hours
        ]

        
        const valid_data = validate_data.all( data )


        if ( valid_data ) {

          const user_data = await UsersGet.byId( user_id )

          if ( user_data ) {

            const created_at = new Date()

            const data = {
              user_id: user_id,
              user_name: user_data[0].name,
              category: category,
              email: user_data[0].email,
              telephone: user_data[0].telephone,
              whatsapp: user_data[0].whatsapp,
              total_photos: total_photos,
              date: date,
              hours: hours,
              created_at: created_at
            }

            const session_created = await SessionCreate.execute(data)

            if ( session_created === undefined ) {
              res.status( 500 ) 
              res.json({
                status: false,
                msg: "Ocorreu um erro no servidor!"
              })
              return
            }

            if ( session_created === false) {
              res.status( 400 ) 
              res.json({
                status: false,
              })
              return
            }

            if ( session_created === true ) {
              res.status( 201 ) 
              res.json({
                status: true,
                msg: "Created!"
              })
              return
            }

          } else {
            res.status( 400 )
            res.json({
              status: false,
              msg: "Usuario não encontrado!"
            })
            return
          }

        } else {
          res.status( 400 )
          res.json({
            status: false,
            msg: "Preencha todos os campos"
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
      
    } catch ( error ) {
      console.log( error )
      res.status(400)
      res.json({
        status: false,
        msg: "Ocorreu um erro!"
      })
      return
    }

  }

}


module.exports = new CreateSessionsController()