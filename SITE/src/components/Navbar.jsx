import Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './css/navbar.css';

import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';



const NavigationBar = (props) => {
    return (
        <>
            <Navbar  expand="lg" className="myCol fixed-top">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Link to="/home" className="nav-link myNav">Home</Link>
                            <Link className="nav-link myNav" to="/test">Test</Link> */}
                            <Link className="nav-link myNav" to={"/home"}>Page d'Accueil</Link>
                            <Link className="nav-link myNav" to={"/inscription"}>Inscription</Link>
                            <Link className="nav-link myNav" to={"/login"}>Connexion</Link>
                        </Nav> 
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;