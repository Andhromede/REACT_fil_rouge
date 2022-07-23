const BaseRouter = require("./base.router");

class RaceRouter extends BaseRouter{

    constructor(){
        super();
        this.initializeRoutes();
    }


    initializeRoutes = () => {
        /****************************** GET ALL BY ******************************/
        this.router.get(`/espece/:id`, async (req, res) => {
            const response = await this.controller.getAllByRace(req.params.id);
            res.send(response);
        });
    }


}
module.exports = RaceRouter;

