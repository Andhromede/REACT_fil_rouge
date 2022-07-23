const bcrypt = require('bcrypt');
const appConfig = require("../configs/app.config");
// const jwt = require('jsonwebtoken');
const BaseController = require("./base.controller");

class UtilisateurController extends BaseController{

    updateUser = async (params) => {
        // console.log(params);
        let utilisateur = await this.getOne(params.login);

        if(utilisateur){
            if(params.password !== ''){
                try {
                    let newPassword = await bcrypt.hash(params.confirmPassword, 10);
                    newPassword = newPassword.slice(7, newPassword.length);
                    params.password = newPassword;

                }catch (error) {
                    console.error(error);
                    return error;
                }
            }else{
                delete params.password;
                // console.log(params);
            }

            const resultUpdate = await this.service.update(params);
            return { result: resultUpdate, message: "Utilisateur modifié !" };

        }else {
            return { result: false, message: "L'utilisateur n'existe pas !" };
        }

    };


    getUserBy = async (param) => {
        const result = await this.service.getUserBy(param);
        return result;
    };


    verifyMdp = async (param) => {
        try {
            const utilisateur = await this.service.verifyMdp(param.login);
            const passwordHashed = `${appConfig.HASH_PREFIX + utilisateur[0].password}`;
            const passwordEnteredByUtilisateur = param.oldPassword;
            let result = await bcrypt.compare(passwordEnteredByUtilisateur, passwordHashed);

            if (result) {
                return true;
            }else{
                return false;
            }
                    
        }catch (error) {
            return error;
        }
    };

  
}

module.exports = UtilisateurController;