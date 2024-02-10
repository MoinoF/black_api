const UsersGet = require("../../models/User/UsersGet");
const validate_id = require("../functions/validate_id");

class UsersGetController {

  async execute(req, res) {

    try {

      const data = await UsersGet.all()

      if (data.length > 0) {
        res.status(200)
        res.json(data)
      } else {
        res.status(200)
        res.json({msg: "Nenhum usuario encontrado!"})
        return
      }
      
    } catch (error) {
      console.log(error);
      res.status(400)
      res.json({err: "Ocorreu um erro!"})
      return
    }

  }


  // Get User by id
  async byId( req, res ) {
    
    let { id } = req.params

    const isId = validate_id.execute( id )

    if ( isId ) {
      
      const data = await UsersGet.byId( id )

      if ( data.length > 0 ) {
        res.status(200)
        res.json(data[0])
      }

    }

    try {
      
    } catch (error) {
      console.log(error)
      return 
    }

  }

}

module.exports = new UsersGetController()