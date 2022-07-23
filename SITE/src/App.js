import "./helpers/string.helper";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import React, { Suspense } from "react";
import BaseView from "./pages/BaseView";
import LoadingSpinner from "./components/LoadingSpinner";



const HomeView = React.lazy(() => import("./pages/HomeView"));
const InscriptionView = React.lazy(() => import("./pages/auth/InscriptionView"));
const LoginView = React.lazy(() => import("./pages/auth/LoginView"));
const LogoutView = React.lazy(() => import("./pages/auth/LogoutView"));
const UserValidationView = React.lazy(() => import("./pages/auth/UserValidationView"));
const DetailUserView = React.lazy(() => import("./pages/account/DetailUserView"));
const AccountView = React.lazy(() => import("./pages/account/AccountView"));
const ErrorView = React.lazy(() => import("./pages/ErrorView"));
const AdminView = React.lazy(() => import("./pages/admin/AdminView"));
const ListeAnimauxView = React.lazy(() => import("./pages/animal/ListeAnimauxView"));
const DetailAnimalView = React.lazy(() => import("./pages/animal/DetailAnimalView"));
const CarnetAnimalView = React.lazy(() => import("./pages/animal/CarnetAnimalView"));



const App = () => {
    const { auth } = useContext(AuthContext);

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<BaseView/>}>
                        <Route index element={<Suspense fallback={<LoadingSpinner/>} > <HomeView/> </Suspense> } />
                        <Route path="/accueil" element={<Suspense fallback={<LoadingSpinner/>} > <HomeView/> </Suspense> } />
                        {auth.role === 0 && <Route path="/inscription" element={<Suspense fallback={<LoadingSpinner/>} > <InscriptionView/> </Suspense> } /> } 
                        {auth.role === 0 && <Route path="/connexion" element={<Suspense fallback={<LoadingSpinner/>} > <LoginView/> </Suspense> } /> }
                        {auth.role > 0 && <Route path="/deconnexion" element={<Suspense fallback={<LoadingSpinner/>} > <LogoutView/> </Suspense> } />  }
                        
                        <Route path="/admin" element={<Suspense fallback={<LoadingSpinner/>} > <AdminView/> </Suspense> } />
                        {auth.role > 0 && <Route path="/account" element={<Suspense fallback={<LoadingSpinner/>} > <DetailUserView/> </Suspense> } /> }
                        <Route path="/user/validation" element={<Suspense fallback={<LoadingSpinner/>} > <UserValidationView/> </Suspense> } />
                        <Route path="/account/:id" element={<Suspense fallback={<LoadingSpinner/>} > <AccountView/> </Suspense> } />
                        <Route path="/animaux" element={<Suspense fallback={<LoadingSpinner/>} > <ListeAnimauxView/> </Suspense> } />
                        <Route path="/carnet/animal/:id" element={<Suspense fallback={<LoadingSpinner/>} > <CarnetAnimalView/> </Suspense> } />
                        <Route path="/detail/animal/:id" element={<Suspense fallback={<LoadingSpinner/>} > <DetailAnimalView/> </Suspense> } />
                    </Route>

                    <Route path="*" element={<Suspense fallback={<LoadingSpinner/>} > <ErrorView/> </Suspense> } />
                </Routes>
            </Router>
        </div>
    );
}

export default App;