const PhotoPost = require('../../models/Photos/PhotoPost')
const validate_data = require('../functions/validate_data')
const validate_id = require('../functions/validate_id')

class PhotoPostController {

  async execute( req, res ) {

    try {
      
      const { title, link, category, model_name } = req.body

      const valid_data = validate_data.all([ title, link, category, model_name])

      if ( valid_data ) {

        const date = new Date()

        const data = {
          title,
          link,
          category,
          model_name,
          created_at: date
        }

        const result = await PhotoPost.execute(data)

        if (result) {
          res.status(201)
          res.json({
            status: "true",
            msg: "Created!"
          })
        } else {
          res.status(500)
          res.json({
            status: false,
            msg: "Ocorreu um erro no servidor!"
          })
        }

      } else {
        res.status(400)
        res.json({
          status: false,
          msg: "Preencha todos os campos!"
        })
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


  // Post View
  async post_view(req, res) {

    try {

      const {id} = req.params

      const valid_id = validate_id.execute(id)

      if (valid_id) {

        const result = await PhotoPost.photo_view_post(id)

        if (result === undefined) {
          res.status(500)
          res.json({
            status: false,
            msg: "Ocorreu um erro no servidor!"
          })
          return
        }

        if (result === false) {
          res.status(400)
          res.json({
            status: false,
            msg: "Nenhum resultado encotrado!"
          })
          return
        }
        
        if (result) {
          res.status(200)
          res.json(result)
        }

      } else {
        res.status(400)
        res.json({
          status: false,
          msg: "ID inválido"
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

module.exports = new PhotoPostController()