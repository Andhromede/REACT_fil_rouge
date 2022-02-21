const bcrypt = require('bcrypt');
const UserService = require('../services/user.service');
const MailerService = require('../services/mailer.service');
const appConfig = require("../configs/app.config");
const jwt = require('jsonwebtoken');


class AuthController{

/***************************** RECHERCHE L'USER *****************************/
    getUser = async (email) =>{
        const userService = new UserService();
        const users = await userService.getAll({where: `login = "${email}"`});
        return users.length === 1 ? users.pop() : null;
    }


/***************************** LOGIN *****************************/
    login = async (params) => {
        // if(params.method !== 'post') return {status:405};
        let user = await this.getUser(params.login);
        
        if(user){
            const passwordHashed = `${appConfig.HASH_PREFIX + user.password}`;
            const passwordEnteredByUser = params.password;
            let result = await bcrypt.compare(passwordEnteredByUser, passwordHashed);

            if(result){
                const payload = {email: user.login, role: user.user_role_id};
                const token = jwt.sign(payload, appConfig.JWT_SECRET, { expiresIn: '1d' });
                return {data:{...payload}, cookie:token};
            }else{
                return {status:401};
            }

        }else{
            return {status:404};
        }
        
    }


/***************************** INSCRIPTION *****************************/
    inscription = async(params) => {
        // if(params.method !== 'PUT') return {status:405};
        let user = await this.getUser(params.login);
        
        if(user){
           console.log("Cet utilisateur existe déjà !");
           return `Cet utilisateur existe déjà !`;

        }else{
            const payload = {mail: params.login, role: 1};
            const token = jwt.sign(payload, appConfig.JWT_SECRET, { expiresIn: '1d' });
            const html = 
                `<b>Lien de confirmation d'inscription: </b>
                 <a href="http://localhost:3000/account/validation?t=${encodeURIComponent(token)}" target="_blank">Confirmer</a>
                `;

            const mailerService = new MailerService();
            await mailerService.sendMail({from:"andhromede@gmail.com", to: params.login, subject:"Confirmer votre inscription", html});
            

            // let newPassword = await bcrypt.hash(params.password, 10);
            // newPassword = newPassword.slice(7, newPassword.length);
            // params.password = newPassword;

            // const userService = new UserService();
            // await userService.insert(params);
        }
    }




    

    
/***************************** POUR GENERER UN HASH DE MDP *****************************/
    // hash = async(password) => {
    //     const saltRounds = 10;

    //     bcrypt.genSalt(saltRounds, function (err, salt) {
    //         if (err) {
    //             throw err
    //         } else {
    //             bcrypt.hash(password, salt, function (err, hash) {
    //                 if (err) {
    //                     throw err
    //                 } else {
    //                     return (hash)
    //                     //$2b$10$JG8evo6/lnN.ZbSCWHufk.AUKjIRzdKEXHxvjoqXoWtSOpCdk4p3m
    //                 }
    //             })
    //         }
    //     })
    // }
    


    

}
module.exports = AuthController;

