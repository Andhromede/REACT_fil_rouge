const services = require('../services');

class BaseController{
    constructor(){
        this.name = this.constructor.name.replace(`Controller`, ``);
        this.table = this.name.toLowerCase();
        this.service = new services[this.table]();
    }

    getAll = async () => {
        const result = await this.service.getAll();
        return result;
    };

    getAllBy = async (param) => {
        const result = await this.service.getAllBy(param);
        return result;
    };

    getOne = async (id) => {
        const result = await this.service.getOne(id);
        return result;
    };

    getOneBy = async (params) => {
        const result = await this.service.getOneBy(params.where);
        return result;
    };

    insert = async (fields) => {
        const result = await this.service.insert(fields);
        return result;
    }

    update = async (params) => {
        const result = await this.service.update(params);
        return result;
    };

    delete = async (id) => {
        const result = await this.service.delete(id);
        return result;
    };

}
module.exports = BaseController;