const BaseRouter = require("./base.router");

class UtilisateurRouter extends BaseRouter{

    constructor() {
        super();
        this.addRoute();
    }

    addRoute = () => {
    /************************* AFFICHE LE COMPTE UTILISATEUR *************************/ 
        this.router.post("/monCompte", async (req, res) => {
            const response = await this.controller.getUserBy(req.body);
            res.send(response);
        });

    /************************* MODIFIE LE COMPTE DE L'UTILISATEUR *************************/ 
        this.router.put("/modification/:id", async (req, res) => {
            const params = {...req.body, where:`id_utilisateur=${req.params.id}`};
            const response = await this.controller.update(params);
            res.send(response);
        });

    /************************* VERIFIE LE MDP DE L'UTILISATEUR *************************/ 
        // this.router.get("/verifyMdp", async (req, res) => {
        //     const response = await this.controller.verifyMdp(req.body);
        //     res.send(response);
        // });

        this.router.post("/verifyMdp", async (req, res) => {
            const response = await this.controller.verifyMdp(req.body);
            console.log(response);
            res.send(response);
        });







    }
  
}
module.exports = UtilisateurRouter;