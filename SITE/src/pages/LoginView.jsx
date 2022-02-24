import Login from '../components/login';
import { Link } from 'react-router-dom';
// import HTMLInputElement from 'react';


const LoginView = (props) => {
    return (
        <div className="container marginNav">
            <div className="row">
                <h1 className="titreLogin">Connexion</h1>
            </div>

            <div className="row">
                <div className="mt-3 mb-2">
                    <div className="">
                       <div>Le carnet de santé</div> 
                        <div>entièrement dédié aux animaux !</div>
                    </div> 
                </div>

                {/* <form className="formulaireconnexion" action="../controleur/connexionCONTROLEUR.php?action=connexion" method="post">
                    <div className="form-group">
                        <HTMLInputElement type="text" className="pseudoconnexion form-control" name="pseudo" placeholder="Pseudo" pattern="[a-zA-Z._-]{2,20}" title="20 caractères maximum (caractères spéciaux autorisés : _ , - et . )" required />
                    </div>

                    <div className="form-group">
                        <HTMLInputElement type="password" className="motdepasseconnexion form-control" name="password" placeholder="Mot de passe" pattern="(?=^.{8,}$)(?=.*\d)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" title="8 caractères minimum dont 1 majuscule, 1 minuscule et 1 chiffre" required/>
                    </div>

                    <button type="submit" className="boutonconnexion btn"><strong>CONNEXION</strong></button>
                </form> */}

                <Login method="post" path="http://localhost:5001/auth/login" submitButtonText="Connexion"/>

                <div className="mb-footer">
                    <Link className="nav-link linkInscription txt-gradiant" to={"/inscription"}>Pour s'inscrire, c'est par ici !</Link>
                    {/* <strong>Pour s'inscrire, c'est par <a href={'/inscription'}>ici</a></strong> */}
                </div>
            </div>
        </div>

    );
}


export default LoginView;
