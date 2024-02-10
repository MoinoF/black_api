const UserUpdate = require("../../models/User/UserUpdate");
const UsersGet = require("../../models/User/UsersGet");
const validate_data = require("../functions/validate_data");
const validate_id = require("../functions/validate_id");

class UserUpdateController {

  async execute( req, res ) {

    let { id } = req.params
    let { name, email, telephone, whatsapp } = req.body

    try {

      const valid_id = validate_id.execute( id )

      if ( valid_id ) {

        const valid_data = validate_data.withData([ name, email, telephone, whatsapp ])

        if ( valid_data ) {
  
          const user_data = await UsersGet.byId( id )

          if ( user_data === undefined ) {
            res.status( 500 )
            res.json({
              status: false,
              msg: "Ocorreu um erro no servidor!"
            })
            return
          }
  
          if ( user_data === false ) {
            res.status( 400 )
            res.json({
              status: false,
              msg: "Nenhum usuario encontrado!"
            })
            return
          }
  
          if ( user_data ) {

             
             const data = {}
    
    
            if ( name !== undefined ) {
              data.name = name
             }
             if ( email !== undefined ) {
              data.email = email
             }
             if ( telephone !== undefined ) {
              data.telephone = telephone
             }
             if ( whatsapp !== undefined ) {
              data.whatsapp = whatsapp
             }
    
    
             const result = await UserUpdate.execute(data, id)

             if ( result ) {
              res.status(200)
              res.json({
                status: "Updated"
              })
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
          res.json({status: false, msg: "Id inválido!"})
          return
        }
      } else {
        res.status( 400 )
        res.json({
          status: false, msg: "Id inválido!"
        })
        return
      }

      
    } catch ( error ) {
      console.log( error )
      res.status( 400 )
      res.json({
        status: false,
        err: "Ocorreu um erro!"
      })
      return
    }

  }

}

module.exports = new UserUpdateController()