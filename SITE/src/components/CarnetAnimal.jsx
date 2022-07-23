import React, { useContext } from 'react';
import { AuthContext } from "../contexts/AuthContext";
import { useState, useEffect } from "react";
// import { AnimalService } from "../services/animal.service";
import Card from 'react-bootstrap/Card';
import './css/card.css';
import { useNavigate } from "react-router-dom";
// import TraitementDetailAnimal from './TraitementDetailAnimal';
// import { AuthContext } from '../contexts/AuthContext';
// import { useNavigate } from "react-router-dom";
// import { useParams } from 'react-router-dom';



const CarnetAnimal = (props) => {
    const { animal, race, page } = props;
    // console.log(animal);
    const navigate = useNavigate();
    const [id_soin, setIdSoin] = useState([]);



    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const formData = new FormData(form);
        const jsonData = Object.fromEntries(formData.entries());
        const body = JSON.stringify(jsonData);
        console.log(body);


        fetch(`http://localhost:5001/soin/${id_soin}`, {
            method: "put",
            headers: { "content-type": "application/json" },
            body: body

        }).then((resp) => resp.text())
            .then((text) => {
                const data = text.toJson();
        });

    }




    function afficheDetailSoin(e, id) {
        e.preventDefault();
        setIdSoin(animal.soinsRows[e.target.id].id_soin);

        document.querySelector('[name="emplacement"]').value = animal.soinsRows[e.target.id].emplacement;
        document.querySelector('[name="descriptif"]').value = animal.soinsRows[e.target.id].descriptif;
        document.querySelector('[name="traitement"]').value = animal.soinsRows[e.target.id].traitement;
        document.querySelector('[name="intitule"]').value = animal.soinsRows[e.target.id].intitule;

        let date = animal.soinsRows[e.target.id].date_soin;
        date = new Date(date).toLocaleDateString();
        document.querySelector('[name="date_soin"]').value = date;
    }


    function navigation(e, id) {
        navigate(`/detail/animal/${animal.id_animal}`);
    }




    return (
        <>
            <form onSubmit={handleSubmit} className="row mx-auto mt-5">
            {/* <form className="row mx-auto mt-5"> */}

                {/* SECTION GAUCHE */}
                <div className="col-11 col-sm-9 col-md-5 col-lg-4 pt-3 mx-auto test bgSable mt-5 borderRadius">
                    <button className="col-5 btn btnGeneral fw-bolder text-center my-3 mx-auto" onClick={(e) => navigation(e)}>
                        Fiche d'identité
                    </button>

                    <div className="">
                        <Card style={{ width: '15rem' }} id={animal.id_animal} className="mt-3 mx-auto" key={"key" + animal.id_animal}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + animal.img} name={animal.id_animal} />

                            <Card.Body id='cardBody'>
                                <Card.Title>{animal.nom}</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="row">
                        <div className="mt-3 txtCorail text-center mx-auto fw-bolder h4 ">Historique des soins</div>

                        {(animal && race) &&
                            animal.soinsRows.map(item => {
                                return (
                                    <div className="text-start mb-3 row" key={item.id_soin}>
                                        <hr className="w-75 mx-auto mt-3" />

                                        <div className="col">
                                            <div className="row">
                                                <div className="col-4 txtCorail fw-bolder text-decoration-underline mb-1">Type :</div>
                                                <div className="col-8" id="marquage" name="marquage">{item.intitule}</div>
                                            </div>

                                            <div className="row">
                                                <div className="col-4 txtCorail fw-bolder text-decoration-underline">Date :</div>
                                                <div className="col-8">{new Date(item.date_soin).toLocaleDateString()}</div>
                                            </div>
                                        </div>

                                        <div className="col-2">
                                            <button className="btn-sm btn btnGeneral fw-bolder text-center mt-3 mx-auto" id={animal.soinsRows.indexOf(item)} value={item.id_soin} name={item.id_soin} onClick={(e) => afficheDetailSoin(e)}>
                                                Détail
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


                {/* SECTION DROITE */}
                <div className="col-11 col-sm-9 col-md-6 col-lg-7 mx-auto ms-md-5 bgSable mt-5 borderRadius">
                    <input type="text" className="form-control my-4 txtCorail text-center mx-auto title w-75" name="intitule"></input>

                    <div className="row">
                        <div className="col-5 mx-auto">
                            <label htmlFor="dateSoin" className="txtCorail fw-bolder text-decoration-underline mb-1">Date du soin :</label>
                            <input type="text" className="form-control inputs" name="date_soin" defaultValue=""/>
                        </div>

                        <div className="col-5 mx-auto">
                            <label htmlFor="emplacement" className="txtCorail fw-bolder text-decoration-underline mb-1">Emplacement :</label>
                            <input type="text" className="form-control inputs" name="emplacement" defaultValue=""/>
                        </div>

                        <div className="col-11 mx-auto mt-3">
                            <label htmlFor="descriptif" className="txtCorail fw-bolder text-decoration-underline mb-1">Descriptif :</label>
                            <textarea className="form-control inputs" name="descriptif" defaultValue="" rows="5"/>
                        </div>

                        <div className="col-11 mx-auto my-3">
                            <label htmlFor="traitement" className="txtCorail fw-bolder text-decoration-underline mb-1">Traitement :</label>
                            <textarea className="form-control inputs" name="traitement" defaultValue="" rows="5"/>
                        </div>

                        <div className="col-11 mx-auto my-4">
                            <button className="col btn btnGeneral fw-bolder text-center">
                                Modifier
                            </button>
                        </div>
                    </div>

                </div>
            </form>
        </>
    );
}

export default CarnetAnimal;