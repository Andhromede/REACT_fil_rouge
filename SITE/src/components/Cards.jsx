import React from 'react';
import { useState, useEffect } from "react";
// import { AnimalService } from "../services/animal.service";
import Card from 'react-bootstrap/Card';
import './css/card.css';


const Cards = (props) => {
    const [data, setData] = useState([]);
    const {method, page} = props;

    useEffect( () => {

        if(page === "animaux"){
            fetch('http://localhost:5001/animal', {
                method: method,
                headers: { "content-type": "application/json" }

            }).then((resp) => resp.text())
            .then((text) => {
                const data = text.toJson();
                setData(data);
            });
        }

    }, []);


    return(
        <div className='container' id='card'>
            <div className="row">
                {data.map(data => {
                    return(
                        <div className="col-12 col-md-6 col-lg-4 mx-auto m-5" key={"key" + data.id_animal}>
                            <Card style={{ width: '18rem'}} id='cardAnimal' className="mx-auto">
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + data.img} id='img'/>
                            <Card.Body id='cardBody'>
                                <Card.Title id='title'>{data.nom}</Card.Title>
                            </Card.Body>
                            </Card>
                        </div>
                    )                   
                })}
            </div> 
        </div>
    );
}

export default Cards;