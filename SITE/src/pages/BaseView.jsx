import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import TextScroller from "../components/TextScroller";
import Footer from "../components/Footer";


const BaseView = (props) => {
    let message = "** Afin de trouver un professionnel de santé ou de gerer les carnets de santé de tous vos animaux **";
    const {route} = props;

    // console.log(route);

    return (
        <>
            <Navbar/>
            <TextScroller text={message}/>
            <Outlet />
            <Footer/>
        </>
    );
};

export default BaseView;
