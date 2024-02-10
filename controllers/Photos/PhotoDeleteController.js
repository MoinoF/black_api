const PhotoDelete = require("../../models/Photos/PhotoDelete")
const validate_id = require("../functions/validate_id")


class PhotoDeleteController {

  async execute( req, res ) {

    try {

      const {id} = req.params

      const valid_id = validate_id.execute(id)

      if (valid_id) {

        const result = await PhotoDelete.execute(id)

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
            msg: "Nenhum resultado encotrado"
          })
        }

        if (result) {
          res.status(200)
          res.json({
            status: true,
            msg: "Deleted"
          })
        }

      } else {
        res.status(400)
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
    }

  }

}

module.exports = new PhotoDeleteController()