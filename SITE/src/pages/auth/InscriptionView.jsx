import Login from '../../components/login';
import { Link } from 'react-router-dom';


const InscriptionView = (props) => {

    return (
         <div className="container pt-5">
            <div className="row">
                <Login method="put" path="http://localhost:5001/auth/inscription" submitButtonText="Inscription"/>

                <div className="mb8em">
                    <Link className="nav-link linkInscription " to={"/connexion"}>Se connecter</Link>
                </div>
            </div>
        </div>
    );
}


export default InscriptionView;
