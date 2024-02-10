
const UserCreate = require('../../models/User/UserCreate');
const UserExist = require('../../models/User/UserExist');
const validate_data = require('../functions/validate_data');

class UserCreateController {

  /**
   * @param {{ body: { name: any; email: any; password: any; }; }} req
   * @param {{ status: (arg0: number) => void; json: (arg0: { err: string; }) => void; }} res
   */
  async execute(req, res) {

    try {

      let {name, email, password} = req.body

      const data = [
        name,
        email,
        password
      ]

      const validated = validate_data.all(data)

      if ( validated ) {
      
        const exist = await UserExist.email(email)

        if (exist) {
          res.status(400)
          res.json({err: "O email já tem um usuario cadastrado, tente outro email!"})
          return
        } 
        else {
          const result = await UserCreate.execute(name, email, password)

          if (result) {
            res.status(201)
            res.json({status: "Created!"})
          } else {
            res.status(500)
            res.json({err: "Ocorreu um erro no servidor!"})
          }
        }
      } else {
        res.status(400)
        res.json({err: "Prencha todos os campos!"})
        return
      }

    } catch (error) {
      console.log(error);
      return
    }

  }

}

module.exports = new UserCreateController()