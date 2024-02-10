const UserExist = require('../../models/User/UserExist')
const UsersGet = require('../../models/User/UsersGet')
const validate_data = require('../functions/validate_data')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const secret = "4u3D90lFde83kmje9343s3dGd89Djm2xkzoMki3109kz0wJmJHU8ks0qmv9320zmshbn4t901ze"


class LoginController {

  async execute( req, res ) {

    let {email, password} = req.body


    try {

      const validated = validate_data.all( [email, password] )

      if ( validated ) {

        const exist = await UserExist.email( email )

        if ( exist ) {

          const user_data = await UsersGet.byEmail(email)

          const authenticated = await bcrypt.compare(password, user_data.password)

          if ( authenticated ) {

            const token = jwt.sign({ email: user_data.email, role: user_data.role }, secret)

            res.status(200)
            res.json({token: token})
            return


          } else {
            res.status(400)
            res.json({
              status: "false", 
              msg: "Senha incorreta"
            })
          }
          
        } else {
          res.status( 400 ) 
          res.json({ err: "Nenhum usuario encontrado!"})
          return
        }

      } else {
        res.status( 400 )
        res.json({ err: "Preencha todos os campos de login!" })
        return
      }


      
    } catch ( error ) {
      console.log( error );
      return
    }

  }

}

module.exports = new LoginController()