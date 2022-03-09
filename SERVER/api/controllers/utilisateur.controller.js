const bcrypt = require('bcrypt');
const appConfig = require("../configs/app.config");
// const jwt = require('jsonwebtoken');
const BaseController = require("./base.controller");

class UtilisateurController extends BaseController{

    updateUser = async (params) => {
        let utilisateur = await this.getOne(params.login);
        // console.log(utilisateur);

        if(utilisateur){
            try {
                if(params.password){
                    const passwordForm = params.password;
                    const passwordUser = utilisateur.password;
                    let resultPassword = await bcrypt.compare(passwordForm, passwordUser);

                    if(!resultPassword){
                        console.error("401");
                        return { result: false, message: "Mauvais mots de passe pour ce compte !" };
                    }
                }

            }catch (error) {
                console.error(error);
                return error;
            }

        }else {
            console.log("404");
            return { result: false, message: "Aucun utilisateur trouvé !" };
        }

        const resultUpdate = await this.service.update(params);
        return resultUpdate;
    };


    getUserBy = async (param) => {
        const result = await this.service.getUserBy(param);
        return result;
    };


    verifyMdp = async (param) => {
        // console.log(param);

        try {
            const utilisateur = await this.service.verifyMdp(param.login);
            console.log(utilisateur);
            const passwordHashed = `${appConfig.HASH_PREFIX + utilisateur[0].password}`;
            const passwordEnteredByUtilisateur = param.oldPassword;
            let result = await bcrypt.compare(passwordEnteredByUtilisateur, passwordHashed);

            if (result) {
                return true;
            }else{
                return false;
            }
                    
        }catch (error) {
            console.error(error);
            return error;
        }
    };

  
}

module.exports = UtilisateurController;