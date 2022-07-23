const BaseService = require("./base.service");

class RaceService extends BaseService{

/****************************************** GET ALL RACES *****************************************/
    getAllByRace = async (id) => {
        let sql = `SELECT * FROM ${this.table} WHERE id_espece="${id}" AND deleted = 0`;
        // console.log(sql);
        const rows = await BaseService.executeQuery(sql);
        return rows;
    }

/****************************************** UPDATE *****************************************/
    update = async (params) => {
        let where = params.where?.replaceAll('&&', 'AND').replaceAll('||', 'OR') || '1'; // remplace && et || de JS par AND et OR pour MYSQL
        delete params.where;
        // let values = [];

        // for (const key in params) {
        //     values.push(`${key}='${params[key].replaceAll(/'/g, "''")}'`); // remplace ' par "
        // }

        // values = values.join(',');
        let sql = `UPDATE ${this.table} SET id_race = ${params.id_race} WHERE ${where}`;
        const result = await BaseService.executeQuery(sql);
        return result;
    }

}
module.exports = RaceService;