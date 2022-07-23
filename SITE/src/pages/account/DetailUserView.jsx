import { useState, useEffect } from "react";
// import {useParams } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Card from 'react-bootstrap/Card';
// import TraitementForms from '../../components/TraitementDetailAnimal';
import '../css/detailUser.css';

import InputDetail from '../../components/InputDetail';



const DetailUserView = (props) => {
    const [data, setData] = useState([]);
    let [value, setValue] = useState([]);

    const { setAuth, auth } = useContext(AuthContext);
    const id = auth.id;
    // console.log( id);


    useEffect(() => {
        let body = JSON.stringify({ 'where': `id_utilisateur = ${id}` });

        fetch('http://localhost:5001/utilisateur/monCompte', {
            method: "post",
            headers: { "content-type": "application/json", },
            body

        }).then((resp) => resp.text())

            .then((text) => {
                let result = text.toJson();
                setData(result);

            }).catch(console.log());

    }, []);

    
    // const handleChange = (e) =>{
    //     value = setValue(e.target.value);
    //     console.log(value);
    // }


    const handleSubmit = (evt) => {
        evt.preventDefault();
        document .querySelector('[name="confirm"]')?.classList.remove("is-invalid");
        document .querySelector('[name="password"]')?.classList.remove("is-invalid");

        const form = document.getElementById('form');
        const formData = new FormData(form);
        const jsonData = Object.fromEntries(formData.entries());
        const password = document.querySelector('[name="password"]').value;
        const passwordConfirm = document.querySelector('[name="confirmPassword"]')?.value;

        if(password === passwordConfirm ){
            console.log(Object.fromEntries(formData.entries()));
            const body = JSON.stringify(jsonData);

            fetch(`http://localhost:5001/utilisateur/modification/${id}`, {
                method: "put",
                headers: { "content-type": "application/json" },
                body: body

            }).then((resp) => resp.text())
            .then((text) => {
                const data = text.toJson();
                
                if(data){
                    console.log("Modification réussie !");
                }else{
                    console.log("Erreur de modification !");
                }
            });
            
        }else{
            document .querySelector('[name="confirmPassword"]')?.classList.add("is-invalid");
            document .querySelector('[name="password"]')?.classList.add("is-invalid");
        }
    }





    const modification = (evt) => {
        evt.preventDefault();
        let dataResult;
        const form = document.getElementById('form');

        const formData = new FormData(form);
        const jsonData = Object.fromEntries(formData.entries());
        let body = JSON.stringify(jsonData);

        fetch(`http://localhost:5001/utilisateur/verifyMdp`, {
            method: "post",
            headers: { "content-type": "application/json" },
            body

        }).then((resp) => resp.text())
        .then((text) => {
            dataResult = text.toJson();
            // console.log(dataResult);

            if(dataResult){
                let divOldPassword = document.querySelector('[name="divOldPassword"]');
                let divPasswords = document.querySelector('[name="divPasswords"]');
               
                divPasswords?.classList.remove("d-none");
                divOldPassword?.classList.add("d-none");

                document.querySelector('[name="confirmPassword"]')?.classList.remove("is-invalid");
                document.querySelector('[name="password"]')?.classList.remove("is-invalid"); 

            }else{
                console.log("Erreur de modification !");
            }
        });
    }



    return (
        <>
            {data.map(user => {
                return (
                    <div className="container pb-5" key={"key" + user.id_utilisateur}>

                        

                        <form id="form">
                            <div className="pb-3 name bgSable col-12 col-sm-10 col-md-8 col-lg-7 mx-auto borderRadius">
                                <div className='text-center txtCorail mt-5 h2 pt-4'>Informations</div>

                                <div className="row">
                                    <InputDetail nomInput="nom" label="Nom" inputValue={user.nom} classe="my-4 col-5 mx-auto"/>
                                    <InputDetail nomInput="prenom" label="Prénom" inputValue={user.prenom} classe="my-4 col-5 mx-auto"/>
                                    
                                    <InputDetail nomInput="telephone" label="N° de telephone" inputValue={user.telephone} classe="col-5 mx-auto mt-3"/>
                                    <InputDetail nomInput="mobile" label="N° de mobile" inputValue={user.mobile} classe="col-5 mx-auto mt-3"/>
                                   
                                    <div id="emailHelper" className="form-text col-6">ex: 0359895447</div>
                                    <div id="emailHelper" className="form-text col-6">ex: 0612430627</div>
                                </div>
                            </div>    

                            <hr className="my-4"/>

                            

                            <div className="pb-3 name bgSable col-12 col-sm-10 col-md-8 col-lg-7 mx-auto borderRadius">
                                <div className='text-center txtCorail mt-5 h2 pt-4'>Sécurité</div>

                                <div className="row"  id="divOldPassword"  name="divOldPassword">
                                    <div className="col-11 mx-auto">
                                        <InputDetail nomInput="oldPassword" label="Mots de passe actuel" inputValue="" classe="my-4 col-5 mx-auto" type="password"/>
                                    </div>

                                    <div className="row">
                                        <div className="col-4 mx-auto ">
                                            <button type="submit" className="btn btnGeneral my-4 fw-bolder" name="modification"  onClick={modification}>Modifier</button>
                                        </div>
                                    </div>
                                </div>

                                <div id="divPasswords" className="row d-none" name="divPasswords">
                                    <InputDetail nomInput="password" label="Mots de passe" inputValue="" classe="my-4 col-5 mx-auto" type="password"/>
                                    <InputDetail nomInput="confirmPassword" label="Confirmation" inputValue="" classe="my-4 col-5 mx-auto"  type="password"/>
                                    <div id="emailHelper" className="form-text">Le mots de passe doit contenir au moins 5 characters.</div>
                                </div>
                            </div>

                            <hr className="my-4"/>

                           

                            <div className="pb-3 name bgSable col-12 col-sm-10 col-md-8 col-lg-7 mx-auto borderRadius">
                                <div className='text-center txtCorail mt-5 h2 pt-4'>Adresse</div>

                                <div className="py-4 col-7 mx-auto">
                                    <label htmlFor="login" className="form-label txtCorail h5 fw-bolder">Email</label>
                                    <input type="email" className="form-control inputs" id="login" name="login" required value={user.login} readOnly={true}/>
                                    {/* <input type="email" className="form-control inputs d-none" id="login" name="login" required defaultValue={user.login}/> */}
                                    <div id="emailHelper" className="form-text">L'adresse mail ne peut pas être modifié. En cas de problème, <a href={'/contact'}>clickez ici.</a></div>
                                </div>
                            </div>

                            
                            <div className="col-4 mx-auto mb-5 mt-4">
                                {/* <button type="submit" className="btn btnGeneral my-4 fw-bolder" name="validation" onSubmit={handleSubmit}>Envoyer</button> */}
                                <button type="submit" className="btn btnGeneral my-4 fw-bolder" name="validation" onClick={handleSubmit}>Envoyer</button>
                            </div>
                        </form>    
                    </div>
                )
            })}
        </>
    );
}


export default DetailUserView;
