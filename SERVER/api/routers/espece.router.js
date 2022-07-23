const BaseRouter = require("./base.router");

class EspeceRouter extends BaseRouter{
    constructor(){
        super();
        this.initializeRoutes();
    }

    initializeRoutes = () => {
        /****************************** GET ALL BY ESPECE ******************************/
        this.router.get(`/nom/:espece`, async (req, res) => {
            const espece = req.params.espece;
            // res.locals.espece = espece;
            const response = await this.controller.getAllByEspece(espece);
            res.send(response);
        });
    }

}
module.exports = EspeceRouter;

