import "./helpers/string.helper";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import React, { Suspense } from "react";
import BaseView from "./pages/BaseView";
import LoadingSpinner from "./components/LoadingSpinner";



const HomeView = React.lazy(() => import("./pages/HomeView"));
const InscriptionView = React.lazy(() => import("./pages/InscriptionView"));
const LoginView = React.lazy(() => import("./pages/LoginView"));
const LogoutView = React.lazy(() => import("./pages/LogoutView"));
const ErrorView = React.lazy(() => import("./pages/ErrorView"));
const AdminView = React.lazy(() => import("./pages/AdminView"));
const UserView = React.lazy(() => import("./pages/UserView"));
const UserValidationView = React.lazy(() => import("./pages/UserValidationView"));
const AccountView = React.lazy(() => import("./pages/AccountView"));



const App = () => {
    const { auth } = useContext(AuthContext);

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<BaseView/>}>
                        <Route index element={<Suspense fallback={<LoadingSpinner/>} > <HomeView/> </Suspense> } />
                        <Route path="/home" element={<Suspense fallback={<LoadingSpinner/>} > <HomeView/> </Suspense> } />
                        <Route path="/inscription" element={<Suspense fallback={<LoadingSpinner/>} > <InscriptionView/> </Suspense> } /> 
                        {auth.role === 0 && <Route path="/login" element={<Suspense fallback={<LoadingSpinner/>} > <LoginView/> </Suspense> } /> }
                        {/* {auth.role > 0 && <Route path="/logout" element={<Suspense fallback={<LoadingSpinner/>} > <LogoutView/> </Suspense> } /> } */}
                        <Route path="/logout" element={<Suspense fallback={<LoadingSpinner/>} > <LogoutView/> </Suspense> } /> 
                        
                        {auth.role === 1 && <Route path="/admin" element={<Suspense fallback={<LoadingSpinner/>} > <AdminView/> </Suspense> } /> }
                        <Route path="/user" element={<Suspense fallback={<LoadingSpinner/>} > <UserView/> </Suspense> } />
                        <Route path="/user/validation" element={<Suspense fallback={<LoadingSpinner/>} > <UserValidationView/> </Suspense> } />
                        {/* {auth.role > 0 && <Route path="/account" element={<Suspense fallback={<LoadingSpinner/>} > <AccountView/> </Suspense> } /> } */}
                        <Route path="/account" element={<Suspense fallback={<LoadingSpinner/>} > <AccountView/> </Suspense> } />
                    </Route>

                    <Route path="*" element={<Suspense fallback={<LoadingSpinner/>} > <ErrorView/> </Suspense> } />
                </Routes>
            </Router>
        </div>
    );
}

export default App;