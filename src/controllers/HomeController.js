import Test from '../models/Test'

class HomeController {
  async index(req, res) {
    const newTest = await Test.create({
      example: 'test from controller'
    })
    res.json({
      newTest
    });
  }
}

export default new HomeController();
