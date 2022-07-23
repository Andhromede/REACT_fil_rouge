const BaseService = require("./base.service");

class SoinService extends BaseService{
  
    /****************************************** SELECT ONE *****************************************/
    getOne = async (id) => {
        const sql = `SELECT * FROM ${this.table} WHERE deleted = 0 AND id_soin="${id}"`;
        const rows = await BaseService.executeQuery(sql);
        const row = rows.length === 1 ? rows.pop() : null;
        return row;
    }

    // updateSoin = async (params) => {
    //     let where = params.where?.replaceAll('&&', 'AND').replaceAll('||', 'OR') || '1'; // remplace && et || de JS par AND et OR pour MYSQL
    //     delete params.where;
    //     delete params.id;
    //     let values = [];

    //     for (const key in params) {
    //         values.push(`${key}='${params[key].replaceAll(/'/g, "''")}'`); // remplace ' par "
    //     }

    //     values = values.join(',');
    //     let sql = `UPDATE ${this.table} SET ${values} WHERE ${where}`;
    //     const result = await BaseService.executeQuery(sql);
    //     return result;
    // }


}
module.exports = SoinService;