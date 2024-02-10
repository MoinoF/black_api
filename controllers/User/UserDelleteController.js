const Delete = require("../../models/User/Delete");
const UsersGet = require("../../models/User/UsersGet");
const validate_id = require("../functions/validate_id");

class UserDelleteController {

  async execute(req, res) {

    let { id } = req.params

    
    try {
      
      const isId = validate_id.execute( id )

      if ( isId ) {

        const user = await UsersGet.byId (id ) 

        if ( user.length > 0 ) {
          
            const deleted = await Delete.execute( id )

            if ( deleted ) {
              res.status( 200 )
              res.json({
                status: true,
                msg: "Deleted!"
              })
            }
          
        } else {
          res.status(400)
          res.json({
            status: false,
            err: "Nenhum usuario encontrado"
          })
        }

      }

      
      
    } catch (error) {
      console.log( error );
      res.status(400)
      res.json({
        status: false,
        err: "Ocorreu um erro"})
      return
    }

  }

}

module.exports = new UserDelleteController()