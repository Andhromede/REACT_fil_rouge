const BaseController = require("./base.controller");

class EspeceController extends BaseController{

    getAllByEspece = async (espece) => {
        const result = await this.service.getAllByEspece(espece);
        return result;
    };
}
module.exports = EspeceController;