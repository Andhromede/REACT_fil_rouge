// import React, { useContext } from 'react';
// import { useState, useEffect } from "react";
// import { AuthContext } from '../contexts/AuthContext';
// import { useNavigate } from "react-router-dom";
// import {useParams } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";


const TraitementDetailAnimal = (props) => {
    const { setAuth, auth } = useContext(AuthContext);
    const { method, path} = props;


    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const formData = new FormData(form);
        const jsonData = Object.fromEntries(formData.entries());
        const body = JSON.stringify(jsonData);
        const password = document.querySelector('[name="password"]').value;
        const passwordConfirm = document.querySelector('[name="confirm"]')?.value;


        if(props.method === "put" && !passwordConfirm){
            document .querySelector('[name="confirm"]')?.classList.add("is-invalid");
            console.log(("Confirmation de mdp obligatoire !"));

        }else if(passwordConfirm && password !== passwordConfirm) {
            document .querySelector('[name="confirm"]')?.classList.add("is-invalid");
            document .querySelector('[name="password"]')?.classList.add("is-invalid");
            console.log("mots de passe différents !");

        }else{
            document.querySelector('[name="confirm"]')?.classList.remove("is-invalid");
            document.querySelector('[name="password"]')?.classList.remove("is-invalid");
            
            let bodyJson = JSON.parse(body);
            delete bodyJson.confirm;
            bodyJson = JSON.stringify(bodyJson);

            fetch(props.path, {
                method: props.method,
                headers: { "content-type": "application/json" },
                body: bodyJson

            }).then((resp) => resp.text())
              .then((text) => {
                    const data = text.toJson();

                    if(data.result){
                        document.cookie = `auth=${data.token};max-age=${60*60*24}`;
                        setAuth({ role:data.role, id:data.id });
                        
                    }
                    else{
                        document.cookie = `auth=null;max-age=0`;
                        setAuth({ role:0, id:data.id });
                    }
                });
        }   
    }
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                {props.children}
                
                <button type="submit" className="btn btnGeneral my-4 fw-bolder">
                    Modifier
                </button>
            </form>
        </>
      
    );
}

export default TraitementDetailAnimal;