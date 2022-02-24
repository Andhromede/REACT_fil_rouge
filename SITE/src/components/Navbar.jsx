import Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

import { Link } from 'react-router-dom';
import './css/navbar.css';

import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';



const NavigationBar = (props) => {
    const { auth } = useContext(AuthContext);

    return (
        <>
            <Navbar expand="md" className="myCol fixed-top">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link myNav txt-gradiant" to={"/home"}>Accueil</Link>
                            <Link className="nav-link myNav txt-gradiant ms-3" to={"/home"}>Prendre Rdv</Link>
                        </Nav> 

                        <Nav>
                            <NavDropdown title="Utilisateur" id="basic-nav-dropdown" className="myNav">
                                { auth.role === 0 && <NavDropdown.Item href={"/inscription"}>Inscription</NavDropdown.Item> }
                                { auth.role === 0 && <NavDropdown.Item href={"/login"}>Connexion</NavDropdown.Item> }
                                { auth.role > 0 && <NavDropdown.Item href="#action/3.3">Mon compte</NavDropdown.Item> }
                                { auth.role > 0 && <NavDropdown.Divider /> }
                                { auth.role > 0 && <NavDropdown.Item href="#action/3.4">Mes animaux</NavDropdown.Item> }
                                { auth.role > 0 && <NavDropdown.Item href="#action/3.4">Mes rendez-vous</NavDropdown.Item> }
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;