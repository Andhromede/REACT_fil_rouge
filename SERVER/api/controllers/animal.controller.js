const BaseController = require("./base.controller");
const AnimalService = require('../services/animal.service');
const EspeceService = require('../services/espece.service');
const RaceAnimalService = require('../services/race_animal.service');
const RaceService = require('../services/race.service');
const SanteService = require('../services/sante.service');
const SoinService = require('../services/soin.service');
const MarquageService = require("../services/marquage.service");
const { marquage } = require("../services");

class AnimalController extends BaseController {

    getAllInfoAnimal = async (req, res) => {
        const body = res.locals.body;

        const animalService = new AnimalService();
        let animal = await animalService.getOne(body.id);

        const especeService = new EspeceService();
        const espece = await especeService.getOne(animal.id_espece);

        const raceAnimalService = new RaceAnimalService();
        const raceAnimalRows = await raceAnimalService.getAll({ where: `id_animal = ${body.id}` });

        const marquageService = new MarquageService();
        const marquage = await marquageService.getOneBy({ where: `id_animal = ${animal.id_animal}` });

        const santeService = new SanteService();
        const sante = await santeService.getOneBy({ where: `id_animal = ${animal.id_animal}` });

        const soinService = new SoinService();
        const soinRows = await soinService.getAll({ where: `id_animal = ${animal.id_animal}` });

        const where2 = raceAnimalRows.map(row => row.id_race).join(',');
        const raceService = new RaceService();
        const racesRows = await raceService.getAllBy({ where: `id_race IN (${where2})` });

        animal.espece = espece;
        animal.racesRows = racesRows;
        animal.soinsRows = soinRows;
        animal.marquage = marquage;
        animal.sante = sante;

        return animal;
    }


    update = async (params) => {
        let tabAnimal =[];
        // let tabRace =[];
        let tabRace ={};
        let newTabloRace = []

        let tabMarquage =[];
        let tabKey = ["animal", "marquage", "race"];
        
        tabKey.forEach(entityName => {
            let animalData = Object.entries(params).filter((k,v) => {
                return k.toString().startsWith(entityName);
            });
    
            animalData.forEach(item => {
                let key = item[0].split("-")[1];
                let entity = item[0].split("-")[0];
                
                if(entity == "animal"){
                    tabAnimal[key] = item[1];
                }
                if(entity == "marquage"){
                    tabMarquage[key] = item[1];
                }
                if(entity == "race"){
                    tabRace[key] = item[1].slice(7);
                    tabRace["old_id"] = item[0].slice(13);

                    console.log(tabAnimal, tabMarquage, tabRace);

                    // for (let item2 in tabRace){
                    //     let itemSliced = item2.slice(0,7);
                    //     let obj = {};
                    //     obj[itemSliced] =item[1];
                    //     newTabloRace.push(obj);
                    // }

                    for (let item2 in tabRace){
                        let oldIdRace = item2.slice(8);
                        console.log(oldIdRace);
                        newTabloRace.push(item[1]);
                    }
                }
            });
        });

        // // console.log(tabAnimal);
        // const animalService = new AnimalService();
        // let where = `id_animal = ${tabAnimal.id_animal}`;
        // tabAnimal.where = where;
        // let animal = await animalService.update(tabAnimal);

        // // console.log(tabMarquage);
        // const marquageService = new MarquageService();
        // let where2 = `id_marquage = ${tabMarquage.id_marquage}`;
        // tabMarquage.where = where2;
        // let marquage = await marquageService.update(tabMarquage);

        console.log(newTabloRace);
        const raceService = new RaceService();
        let test = [];

        // newTabloRace.map(async (element) => {
        //     let where3 = `id_animal = ${tabAnimal.id_animal}`;
        //     test.id_race = element;
        //     test.where = where3;
        //     let race = await raceService.update(test);
        //     return race;
        // });

       

        // return animal, marquage, race;
    };

}
module.exports = AnimalController;