import Cards  from "../../components/Cards";

const AccountView = (props) => {
    return (
        <div className="container-fluid">
            <Cards method={"get"} page="account"/>
        </div>
    );
}


export default AccountView;
