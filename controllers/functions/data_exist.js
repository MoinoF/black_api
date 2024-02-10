const SessionGet = require("../../models/Sessions/SessionGet")


class data_exist {

  async execute( id ) {

    const result = await SessionGet.execute(id)

    if (result.length > 0) {
      return result
    } else {
      return false
    }

  }

}

module.exports = new data_exist()