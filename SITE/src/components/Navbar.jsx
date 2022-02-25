import Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

import { Link } from 'react-router-dom';
import './css/navbar.css';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


const NavigationBar = (props) => {
    const { auth } = useContext(AuthContext);

    const {route} = props;
    let location = window.location.pathname;
    location = location.slice(1);
    location = location.charAt(0).toUpperCase() + location.slice(1);


    return (
        <>
            <Link to="/accueil" className="titreNavbar mt-3">{location}</Link>

            <Navbar expand="md" className="navBar">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <a href={"/accueil"} className="nav-link txtGris hoverCorail">Accueil</a>
                            <a href={"/accueil"} className="nav-link txtGris hoverCorail">Prendre Rdv</a>
                        </Nav> 

                        <Form className="d-flex my-1 me-5">
                            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                            <Button variant="outline-secondary" id="button" className="btn btnSable">Search</Button>
                        </Form>

                        <Nav>
                            <NavDropdown title="Utilisateur" id="basic-nav-dropdown" className="txtGris hoverCorail">
                                { auth.role === 0 && <NavDropdown.Item href={"/inscription"} className="essai">Inscription</NavDropdown.Item> }
                                { auth.role === 0 && <NavDropdown.Item href={"/connexion"} className="essai">Connexion</NavDropdown.Item> }
                                { auth.role > 0 && <NavDropdown.Item href={"/deconnexion"} className="essai">Deconnexion</NavDropdown.Item> }
                                { auth.role > 0 && <NavDropdown.Divider /> }
                                { auth.role > 0 && <NavDropdown.Item href={"/account"} className="essai">Mon compte</NavDropdown.Item> }
                                { auth.role > 0 && <NavDropdown.Item href={"/animaux"} className="essai">Mes animaux</NavDropdown.Item> }
                                { auth.role > 0 && <NavDropdown.Item href="#action/3.4" className="essai">Mes rendez-vous</NavDropdown.Item> }
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            
        </>
    );
}

export default NavigationBar;