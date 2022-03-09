import { Link } from 'react-router-dom';
import Cards  from "../components/Cards";

const HomeView = (props) => {
    // let title = "Veto'lib";


    return (
        <>
            <div className="container pt4em">
                <Cards method={"get"} page="accueil"/>
            </div>
        </>
    );
}


export default HomeView;
