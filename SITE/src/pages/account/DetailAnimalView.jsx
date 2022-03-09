import Cards  from "../../components/Cards";
import DetailAnimal  from "../../components/DetailAnimal";
import { useState, useEffect } from "react";
import {useParams } from 'react-router-dom';


const DetailAnimalView = (props) => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    let animal;

    useEffect( () => {
        let body = JSON.stringify({'where' : `id_animal = ${id}`});

        fetch('http://localhost:5001/animal/detail', {
            method: "post",
            headers: { "content-type": "application/json", },
            body,

        }).then((resp) => resp.text())
        .then((text) => {
            let result = text.toJson();
            setData(result);
        }).catch(console.log());


    }, []);

    

    return (
        <div className="container-fluid">
            <DetailAnimal method={"put"} page="detailAnimal" animals={data}/>
        </div>

        // <div className="container-fluid">
        //     {animals.map(animal => {
        //         <div className='text-center txtCorail mt-5 h2'>Nom : {animal.nom}</div>
        //     })}

        //     {/* <div className='text-center txtCorail mt-5 h2'>{animal.nom}</div> */}
        //     {/* <Cards method={"post"} page="detail animaux"/> */}
        // </div>
    );
}


export default DetailAnimalView;
