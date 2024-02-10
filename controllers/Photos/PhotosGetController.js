const PhotosGet = require("../../models/Photos/PhotosGet")
const validate_data = require("../functions/validate_data")
const validate_id = require('../functions/validate_id')


class PhotosGetController {


  // All Photos
  async all( req, res ) {


    try {

      const photos_data = await PhotosGet.all()


      if (photos_data === undefined ) {
        res.status(500)
        res.json({
          status: false,
          msg: "Ocorreu um erro no servidor!"
        })
        return
      }

      if (photos_data === false) {
        res.status(400) 
        res.json({
          status: false,
          msg: "Nenhuma foto encontrada!"
        })
        return
      }

      if (photos_data) {
        res.status(200)
        res.json(photos_data)
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


  // With Model_Name
  async with_model_name(req, res) {

    try {

      const { model_name } = req.body

      const valid_data = validate_data.all([model_name])

      if (valid_data) {

        const photo_data = await PhotosGet.with_model_name(model_name)

        if (photo_data === undefined) {
          res.status(500)
          res.json({
            status: false,
            msg: "Ocorreu um erro no servidor!"
          })
          return
        }

        if (photo_data === false) {
          res.status(400)
          res.json({
            status: false,
            msg: "Nenhuma photo encontrada"
          })
          return
        }

        if (photo_data) {
          res.status(200)
          res.json(photo_data)
        }
        

      } else {
        res.status(400)
        res.json({
          status: false,
          msg: "Nome de modelo inválido!"
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


  // by id
  async byId( req, res ) {

    try {

      const { id } = req.params

      const valid_id = validate_id.execute(id)
      
      if (valid_id) {

        const photo_data = await PhotosGet.byId(id)

        if (photo_data === undefined) {
          res.status(500)
          res.json({
            status: false,
            msg: "Ocorreu um erro no servidor!"
          })
          return
        }

        if (photo_data === false) {
          res.status(400)
          res.json({
            status: false,
            msg: "Nenhuma photo encontrada"
          })
          return
        }

        if (photo_data) {
          res.status(200)
          res.json(photo_data)
        }

      } else {
        res.status(400)
        res.json({
          status: false,
          msg: "ID inválido!"
        })
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


  // byCategory
  async by_category(req, res) {

    try {

      const {category} = req.body

      const valid_data = validate_data.all([category])

      if (valid_data) {

        const photo_data = await PhotosGet.by_category(category)

        if (photo_data === undefined) {
          res.status(500)
          res.json({
            status: false,
            msg: "Ocorreu um erro no servidor!"
          })
          return
        }

        if (photo_data === false) {
          res.status(400)
          res.json({
            status: false,
            msg: "Nenhuma photo encontrada"
          })
          return
        }

        if (photo_data) {
          res.status(200)
          res.json(photo_data)
        }
        

      } else {
        res.status(400)
        res.json({
          status: false,
          msg: "Nome de categoria inválido!"
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

module.exports = new PhotosGetController()