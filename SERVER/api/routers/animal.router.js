const BaseRouter = require("./base.router");

class AnimalRouter extends BaseRouter{

    constructor() {
        super();
        this.addRoute();
    }

    addRoute = () => {
        
        this.router.post("/mesAnimaux", async (req, res) => {
            const response = await this.controller.getAllBy(req.body);
            res.send(response);
        });

        // this.router.post("/detail/animal/:id", async (req, res) => {
        //     console.log(req.params.id);
        //     const params = {...req.body, where:`id_animal=${req.params.id}`};
        //     const response = await this.controller.getAllBy(params);
        //     res.send(response);
        // });

        this.router.post("/detail", async (req, res) => {
            // const params = {...req.body, where:`id_animal=${req.params.id}`};
            const response = await this.controller.getAllBy(req.body);
            res.send(response);
        });






    }
  
}
module.exports = AnimalRouter;

