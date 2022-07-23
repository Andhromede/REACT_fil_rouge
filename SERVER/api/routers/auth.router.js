const express = require("express");
// const Router = require('express').Router;
const Router = express.Router;
const AuthController = require('../controllers/auth.controller');


class AuthRouter{
    constructor(){
        this.router = Router();
        this.initializeRoutes();
    }


    initializeRoutes = () => {
    /************************* LOGIN ************************/
        this.router.post('/connexion', async (req, res) => {
            const data = await new AuthController().login(req.body);
            res.send(data);
        });


    /************************* INSCRIPTION ************************/
        this.router.put("/inscription", async (req, res) => {
            const response =  await new AuthController().inscription(req.body);
          res.send(response);
        });

    /************************* CHECK IF CONNECTED ************************/
        this.router.get("/", async (req, res) => {
            const response = await new AuthController().check(req);
            res.json(response);
        });

    }

}



module.exports = AuthRouter;



// const express = require("express");
// const Router = express.Router;
// const AuthController = require('../controllers/auth.controller');


// class AuthRouter{
//     constructor() {
//         this.router = Router();
//         this.initializeRoutes();
//     }

//     initializeRoutes = () => {
//     /******************************* LOGIN *******************************/
//         this.router.post("/",async (req, res) => {
//             // const params = {login: req.params.login, password: req.params.password}
//             const response = await this.controller.login(params);
//             res.send(response);
//         });
//     };


// }
// module.exports = AuthRouter;