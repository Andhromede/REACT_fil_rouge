import React, { useContext } from 'react';
import { useState, useEffect } from "react";
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from "react-router-dom";
import {useParams } from 'react-router-dom';



const TraitementDetailAnimal = (props) => {
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
        navigate(`/detail/animal/${id_animal}`);
        return id_animal;
    }


    return(

        <>
            {/* <form onSubmit={handleSubmit}>
                {props.children}
                
                <button type="submit" className="btn btnGeneral my-4 fw-bolder">
                    {props.submitButtonText}
                </button>
            </form> */}
        </>
    );
}

export default TraitementDetailAnimal;