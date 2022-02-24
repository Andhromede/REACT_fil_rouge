import Login from '../components/login';
import { Link } from 'react-router-dom';


const InscriptionView = (props) => {

    return (
        // <div className="container marginNav mb-5">
        //     <h1 className="mx-auto text-center">Page d'Inscription</h1> 
        //     <hr className="my-5 hr" />
        //     <Login method="put" path="http://localhost:5001/auth/inscription" className="" submitButtonText="Inscription"/>
        //     <Link className="nav-link myNav txtSalmon mt-3 fw-bolder h5" to={"/login"}>Se connecter</Link>
        // </div>

        <div className="container marginNav">
            <div className="row">
                <h1 className="titreLogin">Inscription</h1>
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

                <Login method="put" path="http://localhost:5001/auth/inscription" submitButtonText="Inscription"/>

                <div className="mb-footer">
                    <Link className="nav-link linkInscription " to={"/login"}>Se connecter</Link>
                    {/* <strong>Pour s'inscrire, c'est par <a href={'/inscription'}>ici</a></strong> */}
                </div>
            </div>
        </div>
    );
}


export default InscriptionView;
