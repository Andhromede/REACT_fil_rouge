import Login from '../components/login';


const InscriptionView = (props) => {
    return (
        <div className="container test">
            <h1 className="mx-auto text-center">Page d'Inscription</h1> 
            <hr className="my-5 hr" />
            <Login method="put" path="http://localhost:5001/auth" className="" submitButtonText="Inscription"/>
        </div>
    );
}


export default InscriptionView;
