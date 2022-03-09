import React, { useContext } from 'react';
import { useState, useEffect } from "react";
// import { AnimalService } from "../services/animal.service";
import Card from 'react-bootstrap/Card';
import './css/card.css';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from "react-router-dom";
import {useParams } from 'react-router-dom';



const Cards = (props) => {
    const [data, setData] = useState([]);
    const {method, page} = props;
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

    const { id } = useParams();
    let animal;

    useEffect( () => {

        if(page === "animaux"){
            let body = JSON.stringify({'where' : `id_utilisateur = ${auth.id}`});

            fetch('http://localhost:5001/animal/mesAnimaux', {
                method: method,
                headers: { "content-type": "application/json", },
                body,

            }).then((resp) => resp.text())
            .then((text) => {
                const data = text.toJson();
                setData(data);
            }).catch(console.log());

        }else if(page === "detailAnimal"){
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
        }

    }, []);



    let id_animal;
    function test(e, id) {
        id_animal = e.target.name;
        // console.log(e.target.name);
        if(page === "detailAnimal" || page === "animaux"){
            navigate(`/detail/animal/${id_animal}`);

        }else if(page === "accueil"){
            navigate(`/${e.target.name}`);

        }
        
        return id_animal;
    }


    return(
        <div className='container' id='card'>
            <div className="row">
                
                {(page === "detailAnimal" || page === "animaux") && 
                    data.map(animal => {
                        return(
                            <div className="col-12 col-md-6 col-lg-4 mx-auto m-5 name" key={"key" + animal.id_animal} >
                                <Card style={{ width: '18rem'}} id={animal.id_animal} className="mx-auto">
                                    {/* <a href={'/home'}> */}
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + animal.img} name={animal.id_animal} onClick={(e) => test(e, e.target.name)}/>
                                    {/* </a> */}
    
                                    <Card.Body id='cardBody'>
                                        <Card.Title>{animal.nom}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        )                   
                    })
                }


                {(page === "accueil") &&
                    <div className="mx-auto m-5 name row">
                        <div className="col-12 col-md-6 col-lg-4 mt-5">
                            <Card style={{ width: '18rem'}} id="" className="mx-auto col-6">
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + "assets/image/animaux5_3.jpg"} name="animaux" onClick={(e) => test(e, e.target.name)}/>
                                <Card.Body id='cardBody'>
                                    <Card.Title>Mes animaux</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                        
                        <div className="col-12 col-md-6 col-lg-4 mt-5">
                            <Card style={{ width: '18rem'}} id="" className="mx-auto col-6">
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + "assets/image/teletravail4.jpg"} name="account" onClick={(e) => test(e, e.target.name)}/>
                                <Card.Body id='cardBody'>
                                    <Card.Title>Mon compte</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 mt-5">
                            <Card style={{ width: '18rem'}} id="" className="mx-auto col-6">
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + "assets/image/rdv2_2.png"} name="rdv" onClick={(e) => test(e, e.target.name)}/>
                                <Card.Body id='cardBody'>
                                    <Card.Title>Mes rendez-vous</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                        
                        <div className="col-12 col-md-6 col-lg-4 mt-5">
                            <Card style={{ width: '18rem'}} id="" className="mx-auto col-6">
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + "assets/image/veto_2.jpg"} name="veterinaires" onClick={(e) => test(e, e.target.name)}/>
                                <Card.Body id='cardBody'>
                                    <Card.Title>Trouver un vétérinaire</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>                 
                }
            </div> 
        </div>
    );
}


export default Cards;