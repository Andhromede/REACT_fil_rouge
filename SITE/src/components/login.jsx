import TraitementForms from '../components/traitementForms';
import './css/login.css';
import { Link } from 'react-router-dom';

import { React, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';


const LoginForm = (props) => {
    const { method, path, submitButtonText } = props;
    const [captcha, setCaptcha] = useState(false);
    
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
        <div className="col-md-8 col-lg-4 col-10 mx-auto bgLoginCard">

            {(method === "put" && !captcha) && 
                <div className="row">
                    <div className="mt-3 mb-1 col-6 mx-auto">
                        <div className="col-6">
                            <LoadCanvasTemplateNoReload />
                        </div>
                    </div>

                    <div className="mb-4 col-11 mx-auto">
                        <label htmlFor="captcha" className="form-label txtVert h5 mt-2 fw-bolder">Captcha</label>
                        <input type="text" className="form-control" id="user_captcha_input" name="user_captcha_input" />
                    </div>
                    
                    <button className="btn btnGeneral col-6 fw-bolder h-25 mt-auto  mx-auto" onClick={doSubmit}>
                        Comparer
                    </button>
                    <hr className="my-4 hr w-75 mx-auto"/>  
                </div> 
            }


            {(captcha || method === "post") && 
                <TraitementForms method={method} path={path} submitButtonText={submitButtonText}>
                    <div className="my-4 col-10 col-md-9 mx-auto">
                        <label htmlFor="login" className="form-label txtVert h5 fw-bolder">Email</label>
                        <input type="email" className="form-control" id="login" name="login" required />
                    </div>

                    <div className="mb-4 col-10 col-md-9 mx-auto">
                        <label htmlFor="password" className="form-label txtVert h5 mt-2 fw-bolder">Password</label>
                        <input type="password" className="form-control" id="password" name="password" />
                    </div>

                    {method === "put" &&
                        <div className="col-10 col-md-9 mx-auto">
                            <label htmlFor="confirm" className="form-label txtVert h5 mt-2 fw-bolder">Confirm Password</label>
                            <input type="password" className="form-control" id="confirm" name="confirm" />
                        </div>
                    }

                    {method === "post" && <Link className="nav-link text-dark mdp-oublie fw-bolder txt-gradiant" to={"/login"}>Mots de passe oublié ?</Link>}
                </TraitementForms>
            }
        </div>
    );
}

export default LoginForm;
