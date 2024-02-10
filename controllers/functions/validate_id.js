
class validate_id {

  execute( id ) {

    if ( isNaN(id) ) {
      return false
    }

    if ( id === undefined ) {
      return false
    }
    
    if ( id === null ) {
      return false
    }


    else {
      return true
    }

    
  }

}

module.exports = new validate_id()