import Cards  from "../../components/Cards";

const ListeAnimauxView = (props) => {
    return (
        <div className="container-fluid">
            <div className='text-center txtCorail mt-5 h2'>Mes carnets</div>
            <Cards method={"post"} page="animaux"/>
        </div>
    );
}


export default ListeAnimauxView;
