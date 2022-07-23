const BaseController = require("./base.controller");

class RaceController extends BaseController{


    getAllByRace = async (id) => {
        const result = await this.service.getAllByRace(id);
        return result;
    };
  
}
module.exports = RaceController;