const BaseService = require("./base.service");

class UtilisateurService extends BaseService{


    update = async (params) => {
        delete params.oldPassword;
        delete params.confirmPassword;

        let where = params.where?.replaceAll('&&', 'AND').replaceAll('||', 'OR') || '1'; // remplace && et || de JS par AND et OR pour MYSQL
        delete params.where;
        let values = [];

        for (const key in params) {
            values.push(`${key}='${params[key].replaceAll(/'/g, "''")}'`); // remplace ' par "
        }

        values = values.join(',');
        let sql = `UPDATE ${this.table} SET ${values} WHERE ${where}`;
        const result = await BaseService.executeQuery(sql);
        return result;
    }

    

    getUserBy = async (param) => {
        let sql = `SELECT * FROM ${this.table} WHERE ${param.where} AND deleted = 0`;
        // console.log(sql);
        const rows = await BaseService.executeQuery(sql);
        delete rows[0].password;
        // conrssole.log(rows);
        return rows;
    }


    verifyMdp = async (param) => {
        let sql = `SELECT * FROM ${this.table}  WHERE login = "${param}" AND deleted = 0`;
        const row = await BaseService.executeQuery(sql);
        return row;
    }


  
}
module.exports = UtilisateurService;

