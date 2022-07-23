import '../css/detailAnimal.css';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import CarnetAnimal from "../../components/CarnetAnimal";



const CarnetAnimalView = (props) => {
    const [animal, setAnimal] = useState();
    const [race, setRace] = useState();
    const { id } = useParams();
    
    useEffect(() => {
        let body = JSON.stringify({ id });

        fetch('http://localhost:5001/animal/detail', {
            method: "post",
            headers: { "content-type": "application/json", },
            credentials: 'include',
            body,

        }).then((resp) => resp.text())
            .then((text) => {
                let result = text.toJson();
                setAnimal(result);

                console.log(result.id_espece);
                fetch(`http://localhost:5001/race/espece/${result.id_espece}`, {
                    method: "get",
                    headers: { "content-type": "application/json" },
                    credentials: 'include'

                }).then((resp) => resp.text())
                    .then((text) => {
                        let resultEspece = text.toJson();
                        setRace(resultEspece);

                    }).catch(console.log());

            }).catch(console.log());
    }, []);

    // console.log(animal);
   

    return (
        <>
            {(animal && race) && (
                <div className="container-fluid">
                    <CarnetAnimal animal={animal} race={race} page="carnet"></CarnetAnimal>
                </div>
            )} 
        </>
    );
}


export default CarnetAnimalView;
