const BaseService = require("./base.service");

class AnimalService extends BaseService{

/****************************************** UPDATE *****************************************/
    update = async (params) => {
        let where = params.where?.replaceAll('&&', 'AND').replaceAll('||', 'OR') || '1'; // remplace && et || de JS par AND et OR pour MYSQL
        delete params.where;
        delete params.id_animal;
        delete params.img;
        let values = [];

        for (const key in params) {
            values.push(`${key}='${params[key].replaceAll(/'/g, "''")}'`); // remplace ' par "
        }

        values = values.join(',');
        let sql = `UPDATE ${this.table} SET ${values} WHERE ${where}`;
        const result = await BaseService.executeQuery(sql);
        return result;
    }
  
}
module.exports = AnimalService;

