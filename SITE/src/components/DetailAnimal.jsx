import React, { useContext } from 'react';
import { AuthContext } from "../contexts/AuthContext";
// import { useState, useEffect } from "react";
// import { AnimalService } from "../services/animal.service";
import Card from 'react-bootstrap/Card';
import './css/card.css';
import { useNavigate } from "react-router-dom";
// import TraitementDetailAnimal from './TraitementDetailAnimal';
// import { AuthContext } from '../contexts/AuthContext';
// import { useNavigate } from "react-router-dom";
// import { useParams } from 'react-router-dom';



const DetailAnimal = (props) => {

    const { animal, race, page } = props;
    console.log(animal);
    const navigate = useNavigate();



    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const formData = new FormData(form);
        const jsonData = Object.fromEntries(formData.entries());
        const body = JSON.stringify(jsonData);
        console.log(jsonData);
        console.log(body);
        // let test = "animal-nom du chien, etc ...";
        // console.log(test.split("-"));



        fetch(`http://localhost:5001/animal/${animal.id_animal}`, {
            method: "put",
            headers: { "content-type": "application/json" },
            body: body

        }).then((resp) => resp.text())
            .then((text) => {
                const data = text.toJson();
        });
    }


    // let id_animal;
    function navigation(e, id) {
        navigate(`/carnet/animal/${animal.id_animal}`);
    }


    return (
        <>
            <form onSubmit={handleSubmit} className="row mx-auto mt-5">
                {/* SECTION GAUCHE */}
                <div className="col-11 col-sm-9 col-md-5 col-lg-4 pt-5 mx-auto test bgSable mt-5 borderRadius">
                    <div className="row">
                        <button className="col-5 btn btnGeneral fw-bolder text-center my-3 mx-auto" onClick={(e) => navigation(e)}>
                            Carnet médical
                        </button>
                    </div>

                    <div className="">
                        <Card style={{ width: '18rem' }} id={animal.id_animal} className="mt-3 mx-auto" key={"key" + animal.id_animal}>
                            {/* <Card.Img variant="top" src={process.env.PUBLIC_URL + animal.img} name={animal.id_animal} /> */}
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + animal.img} name={animal.img} />

                            <Card.Body id='cardBody'>
                                <Card.Title>{animal.nom}</Card.Title>
                            </Card.Body>
                        </Card>

                        <input type="file" id="animal-img" name="animal-img" accept="image/png, image/jpeg, image/jpg" className="mx-auto"/>
                    </div>

                    <div className="row mt-4">
                        <div className="text-start mb-3 row">
                            <div className="col">

                                <div className="d-flex mt-2">
                                    <label htmlFor="nom" className="col-5 txtCorail fw-bolder text-decoration-underline mb-1">Nom:</label>
                                    <input type="text" className="col form-control inputs" id="animal-nom" name="animal-nom" defaultValue={animal.nom} />
                                </div>

                                <div className="d-flex mt-2">
                                    <label htmlFor="sexe" className="col-5 txtCorail fw-bolder text-decoration-underline mb-1">Sexe :</label>

                                    <div className="d-flex">
                                        <div className="me-auto mx-auto">
                                            <select name="animal-sexe" id="animal-sexe" className="form-select inputs" defaultValue={animal.sexe}>
                                                {animal.sexe == "male" &&
                                                    <>
                                                        <option defaultValue="male" name="male">male</option>
                                                        <option defaultValue="femelle" name="femelle">femelle</option>
                                                    </>
                                                }

                                                {animal.sexe == "femelle" &&
                                                    <>
                                                        <option defaultValue="femelle" name="femelle">femelle</option>
                                                        <option defaultValue="male" name="male">male</option>
                                                    </>
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex mt-2">
                                    <label htmlFor="nom" className="col-5 txtCorail fw-bolder text-decoration-underline mb-1">Sterilisé :</label>
                                    <input type="text" className="col form-control inputs" id="animal-sterilise" name="animal-sterilise" defaultValue={animal.sterilise === 1 ? "Oui" : "Non"} />
                                </div>

                                <div className="d-flex mt-2">
                                    <label htmlFor="marquage" className="col-5 txtCorail fw-bolder text-decoration-underline mb-1">Identification :</label>
                                    {(animal.marquage && animal.marquage.code_tatouage) &&
                                        <input type="text" className="col form-control inputs" id="marquage-code_tatouage" name="marquage-code_tatouage" defaultValue={animal.marquage.code_tatouage} />
                                    }

                                    {(animal.marquage && animal.marquage.code_puce) &&
                                        <input type="text" className="col form-control inputs" id="marquage-code_puce" name="marquage-code_puce" defaultValue={animal.marquage.code_puce} />
                                    }

                                    {(animal.marquage == null) &&
                                        <input type="text" className="col form-control inputs" id="marquage" name="marquage" defaultValue="" />
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                {/* SECTION DROITE */}
                <div className="col-11 col-sm-9 col-md-6 col-lg-7 mx-auto bgSable mt-5 borderRadius pt-4">

                    <div>
                        <div className="mb-3 txtCorail h1 text-center mx-auto title mb-3">Identité du {animal.espece.nom}</div>
                    </div>

                    {/* NEE LE + DISPARU LE */}
                    <div className="text-start mt-3 d-flex mb-5">
                        <div className="col-4 mx-auto">
                            <label htmlFor="date_naissance" className="txtCorail fw-bolder text-decoration-underline mb-1">Née le:</label>
                            <input type="text" className="form-control inputs" id="animal-date_naissance" name="animal-date_naissance" defaultValue={new Date(animal.date_naissance).toLocaleDateString()} />
                        </div>

                        <div className="col-4 mx-auto">
                            <label htmlFor="date_deces" className="txtCorail fw-bolder text-decoration-underline mb-1">Décédé le:</label>
                            <input type="text" className="form-control inputs" id="animal-date_deces" name="animal-date_deces" defaultValue={new Date(animal.date_deces).toLocaleDateString()} />
                        </div>
                    </div>

                    {/* RACES */}
                    <div className="text-start mt-2 mb-5">
                        <div className="col-10 mx-auto">
                            <label htmlFor="race" className="col-4 mx-auto txtCorail fw-bolder text-decoration-underline mt-1">Race(s) :</label>
                        </div>

                        <div className="d-flex">
                            {animal.racesRows.map((item, i) => {
                                return (
                                    <div className="col-4 me-auto mx-auto" key={item.nom}>
                                        {/* <select name={`race-id_race_${i}`} id={`race-id_race_${i}`} className="form-select inputs" defaultValue={item.id_race}> */}
                                        <select name={`race-id_race_${item.id_race}`} id={`race-id_race_${item.id_race}`} className="form-select inputs" defaultValue={item.id_race}>
                                            {race.map(listeRace => {
                                                return <option id={listeRace.id_race} value={listeRace.id_race} key={listeRace.id_race} animal="race-id_race">{listeRace.nom}</option>

                                            })}
                                        </select>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <hr className="w-75 mx-auto" />

                    {/* DESCRIPTIF + PARTICULARITE */}
                    <div className="text-start mt-2 d-flex my-5">
                        <div className="col-4 mx-auto">
                            <label htmlFor="animal-descriptif" className="form-label txtCorail fw-bolder text-decoration-underline">Descriptif :</label>
                            <textarea className="form-control inputs" id="animal-descriptif" name="animal-descriptif" rows="6" defaultValue={animal.descriptif} />
                        </div>

                        <div className="col-4 mx-auto">
                            <label htmlFor="animal-trait_distinctif" className="form-label txtCorail fw-bolder text-decoration-underline">Particularité :</label>
                            <textarea className="form-control inputs" id="animal-trait_distinctif" name="animal-trait_distinctif" rows="6" defaultValue={animal.trait_distinctif} />
                        </div>

                        <input type="hidden" className="form-control inputs" id="animal-id_animal" name="animal-id_animal" defaultValue={animal.id_animal}/>
                        <input type="hidden" className="form-control inputs" id="marquage-id_marquage" name="marquage-id_marquage" defaultValue={animal.marquage.id_marquage}/>

                    </div>

                    <div className="mx-auto">
                        <button className="col-3 btn btnGeneral fw-bolder text-center mb-5 me-5">
                            Modifier
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default DetailAnimal;