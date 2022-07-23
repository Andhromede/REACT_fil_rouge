import TraitementForms from './traitementForms';
import './css/login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthContext";

import { React, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';


const LoginForm = (props) => {
    const navigate = useNavigate();
    const { method, path, submitButtonText } = props;
    const [captcha, setCaptcha] = useState(false);
    
    // if(AuthContext.user.id === 0){
    //     navigate("/connexion");
    // }
    
    useEffect( () => {
        if(method === "put") loadCaptchaEnginge(3);
    },[])


    let doSubmit = () => {
        let user_captcha_value = document.getElementById('user_captcha_input').value;

        if (validateCaptcha(user_captcha_value)==true) {
            setCaptcha(true)
            // alert('Captcha Matched');
            loadCaptchaEnginge(6);
            document.getElementById('user_captcha_input').value = "";
        }
        else {
            setCaptcha(false)
            // alert('Captcha Does Not Match');
            document.getElementById('user_captcha_input').value = "";
        }
    };


    return (
        <div className="col-md-8 col-lg-5 col-10 mx-auto bgLoginCard">

            {(method === "put" && !captcha) && 
                <div className="row">
                    <div className="mt-3 mb-1 col-6 mx-auto">
                        <div className="col-6">
                            <LoadCanvasTemplateNoReload />
                        </div>
                    </div>

                    <div className="mb-4 col-11 mx-auto">
                        <label htmlFor="captcha" className="form-label txtGris h5 mt-2 fw-bolder">Captcha</label>
                        <input type="text" className="form-control" id="user_captcha_input" name="user_captcha_input" />
                    </div>
                    
                    <button className="btn btnGeneral col-6 fw-bolder mx-auto mb-5" onClick={doSubmit}>
                        Comparer
                    </button>
                </div> 
            }


            {(captcha || method === "post") && 
                <TraitementForms method={method} path={path} submitButtonText={submitButtonText}>
                    <div className="my-4 col-10 col-md-9 mx-auto">
                        <label htmlFor="login" className="form-label txtCorail h5 fw-bolder">Email</label>
                        <input type="email" className="form-control" id="login" name="login" required />
                    </div>

                    <div className="mb-4 col-10 col-md-9 mx-auto">
                        <label htmlFor="password" className="form-label txtCorail h5 mt-2 fw-bolder">Password</label>
                        <input type="password" className="form-control" id="password" name="password" />
                    </div>

                    {method === "put" &&
                        <div className="col-10 col-md-9 mx-auto">
                            <label htmlFor="confirm" className="form-label txtCorail h5 mt-2 fw-bolder">Confirm Password</label>
                            <input type="password" className="form-control" id="confirm" name="confirm" />
                        </div>
                    }

                    {method === "post" && <Link className="nav-link fw-bolder txtGris" to={"/connexion"}>Mots de passe oublié ?</Link>}
                </TraitementForms>
            }
        </div>
    );
}

export default LoginForm;
