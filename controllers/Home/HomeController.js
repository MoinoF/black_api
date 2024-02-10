const Home = require('../../models/Home/Home')

class HomeController{

  async getInfo(req, res) {

    try {

      const data = await Home.getInfo()
      if (data.length > 0) {
        res.status(200)
        res.json(data[0])
      } else {
        res.status(400)
        res.send("Nenhum dado encontrado!")
      }

    } catch (error) {
      console.log(error);
      res.status(400)
      res.send("Ocorreu um erro no servidor!")

      return 
    }


  }

}

module.exports = new HomeController()