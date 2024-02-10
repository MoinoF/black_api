const knex = require('../../database/connection')
const PhotosGet = require('./PhotosGet')

class PhotoPost {

  async execute(data) {

    try {

      const result = await knex.insert(data).table("photos")

      if (result) {
        return true
      } else return false
      
    } catch (error) {
      console.log(error)
      return false
    }

  }


  // PhotoViewPost
  async photo_view_post(id) {

    try {

      const photo_views = await PhotosGet.byId(id)

      if (photo_views === undefined) {
        return undefined
      }

      if (photo_views === false) {
        return false
      }

      if (photo_views) {
        
        const views = photo_views[0].views + 1
        const result = await knex.update({views}).where({id: id}).table("photos")

        if (result) {

          const photo_data = await knex.select().where({id: id}).table("photos")

          if (photo_data.length > 0 ) {
            return photo_data
          } else return false
          
        } else {
          return false
        }
      }

    } catch (error) {
      console.log(error)
      return undefined
    }

  }

}

module.exports = new PhotoPost()