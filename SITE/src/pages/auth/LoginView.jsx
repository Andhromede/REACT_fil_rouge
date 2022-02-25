import Login from '../../components/login';
import { Link } from 'react-router-dom';


const LoginView = (props) => {

    return (
        <div className="container pt4em">
            <div className="row">
                <Login method="post" path="http://localhost:5001/auth/connexion" submitButtonText="Connexion"/>

                <div className="mb8em">
                    <Link className="nav-link linkInscription txtCorail hoverBlanc" to={"/inscription"}>Pour s'inscrire, c'est par ici !</Link>
                </div>
            </div>
        </div>
    );
}


export default LoginView;
