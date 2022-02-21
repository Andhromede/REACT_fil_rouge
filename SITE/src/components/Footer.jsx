import '../components/css/footer.css';
import { Link } from 'react-router-dom';


const Footer = (props) => {
    return (
        <footer className="page-footer font-small cyan darken-3 myFooter fixed-bottom">
            <div className="footer-copyright text-center py-3">© 2022 Copyright:
                {/* <a href="https://mdbootstrap.com/" className="ms-1">Character Builder</a> */}
                <Link to="/home" className="ms-1">Home Page</Link>
            </div>
        </footer>
    )
}

export default Footer;
