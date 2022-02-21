import Login from '../components/login';


const LoginView = (props) => {
    return (
        <div className="container marginNav marginNav">
            <h1 className="mx-auto text-center">Page de connexion</h1> 
            <hr className="my-5" />
            <Login method="post" path="http://localhost:5001/auth" submitButtonText="Connexion"/>
        </div>
    );
}


export default LoginView;
