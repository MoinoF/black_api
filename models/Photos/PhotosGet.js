const knex = require('../../database/connection')

class PhotosGet {


  // All Photos
  async all() {

    try {

      const photos_data = await knex.select().table("photos")

      if (photos_data.length > 0) {
        return photos_data
      } else {
        return false
      }
      
    } catch (error) {
      console.log(error)
      return undefined
    }

  }


  // with model name
  async with_model_name( model_name) {


    
    try {

      const photo_data = await knex.select().where({model_name: model_name}).table("photos")

      if (photo_data.length > 0) {
        return photo_data
      } else {
        return false
      }
      
    } catch (error) {
      console.log(error)
      return undefined
    }
  }


  // byId
  async byId( id) {


    
    try {

      const photo_data = await knex.select().where({id: id}).table("photos")

      if (photo_data.length > 0) {
        return photo_data
      } else {
        return false
      }
      
    } catch (error) {
      console.log(error)
      return undefined
    }
  }



  // byCategory
  async by_category( category ) {


    
    try {

      const photo_data = await knex.select().where({category: category}).table("photos")

      if (photo_data.length > 0) {
        return photo_data
      } else {
        return false
      }
      
    } catch (error) {
      console.log(error)
      return undefined
    }
  }

}

module.exports = new PhotosGet()