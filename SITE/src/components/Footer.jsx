import '../components/css/footer.css';
import { Link } from 'react-router-dom';


const Footer = (props) => {
    return (
        <footer className="page-footer font-small cyan darken-3 myFooter fixed-bottom">
            <div className="footer-copyright py-3 txtGris">© 2022 Copyright:
                {/* <a href="https://mdbootstrap.com/" className="ms-1">Character Builder</a> */}
                <Link to="/accueil" className="ms-1 txtGris hoverCorail">Home Page</Link>
            </div>
        </footer>
    )
}

export default Footer;
