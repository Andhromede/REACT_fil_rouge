const BaseRouter = require("./base.router");

class AnimalRouter extends BaseRouter{

    constructor() {
        super();
        this.initializeRoutes();
    }

    initializeRoutes = () => {
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




        // this.router.post("/detail", async (req, res) => {
        //     // const params = {...req.body, where:`id_animal=${req.params.id}`};
        //     const response = await this.controller.getAllBy(req.body);
        //     res.send(response);
        // });

        this.router.post("/detail", async (req, res, next) => {
            res.locals.body = req.body;
            next(this.controller.getAllInfoAnimal);
        });


        // this.router.put("/:id", async (req, res) => {
        //     const params = {...req.body, where:`id=${req.params.id}`};
        //     const response = await this.controller.update(params);
        //     res.send(response);
        // });


        /*************************** UPDATE SIMPLE ***************************/
        this.router.put("/:id", async (req, res) => {
            // console.log(params);
            // console.log(req.params.id);
            
            const params = {...req.body, id:req.params.id};
            const response = await this.controller.update(params);
            res.send(response);
        });



    }
  
}
module.exports = AnimalRouter;

