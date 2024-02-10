
class validate_data {


  // Validate All
  all(data=[]) {

      const validate = data.every((x) => {
        return x !== undefined
      })

      if (validate) {
        return true
      } else {
        return false
      }

  }


  // Validate !== undefined

  withData(data = []) {
    
    const validate = data.every(( x ) => {
      return x === undefined
    })

    if ( !validate ) {
      return true
    } else {
      return false
    }

  }

}

module.exports = new validate_data()