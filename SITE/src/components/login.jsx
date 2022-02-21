import TraitementForms from '../components/traitementForms';
import './css/login.css';


const LoginForm = (props) => {
    const { method, path, submitButtonText } = props;
   
    return (
        <div className="col-6 mx-auto bgLoginCard py-5">
            <TraitementForms method={method} path={path} submitButtonText={submitButtonText}>
                {/* <div className="col-6"> */}
                    <div className="mb-3 col-8 mx-auto">
                        <label htmlFor="login" className="form-label text-light h5">Login</label>
                        <input type="email" className="form-control" id="login" name="login" required/>
                    </div>

                    <div className="mb-3 col-8 mx-auto">
                        <label htmlFor="password" className="form-label text-light h5 mt-2">Password</label>
                        <input type="password" className="form-control" id="password" name="password" />
                    </div>
                {/* </div> */}
            </TraitementForms>
        </div>
    );
}

export default LoginForm;
