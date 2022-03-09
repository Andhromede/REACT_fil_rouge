import React, { useContext } from 'react';
import { useState, useEffect } from "react";
// import { AnimalService } from "../services/animal.service";
import Card from 'react-bootstrap/Card';
import './css/card.css';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from "react-router-dom";
import {useParams } from 'react-router-dom';



const DetailAnimal = (props) => {
    const {method, page, animals} = props;
    console.log(animals);
    
    
    return(
        <>
            {animals.map(animal => {
                return(
                    <div className="col-12 col-md-6 col-lg-4 mx-auto name" key={"key" + animal.id_animal}>
                        <div className='text-center txtCorail my-5 h2'>Mon animal</div>
                        
                        <Card style={{ width: '18rem'}} id={animal.id_animal} className="mx-auto">
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + animal.img} name={animal.id_animal} onClick={(e) => test(e, e.target.name)}/>
                            
                            <Card.Body id='cardBody'>
                                <Card.Title>{animal.nom}</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                )                   
            })}
        </>
    );
}

export default DetailAnimal;