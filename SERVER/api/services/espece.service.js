const BaseService = require("./base.service");

class EspeceService extends BaseService{
    
    getAllByEspece = async (espece) => {
        let sql = `SELECT * FROM ${this.table} WHERE nom="${espece}" AND deleted = 0`;
        const rows = await BaseService.executeQuery(sql);
        return rows;
    }
}
module.exports = EspeceService;

