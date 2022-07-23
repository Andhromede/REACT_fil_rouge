import React from 'react';
// import { useState, useEffect } from "react";
// import { AnimalService } from "../services/animal.service";
// import Card from 'react-bootstrap/Card';
import './css/card.css';
// import { AuthContext } from '../contexts/AuthContext';
// import { useNavigate } from "react-router-dom";
// import {useParams } from 'react-router-dom';



const InputDetail = (props) => {
    const {nomInput, inputValue, classe, label, type} = props;
    
    
    return(
        
        <div className={classe}>
            <label htmlFor={nomInput} className="form-label txtCorail h5 fw-bolder" type={type}>{label}</label>
            <input type={type} className="form-control inputs" id={nomInput} name={nomInput} defaultValue={inputValue}/>
        </div>

    );
}

export default InputDetail;