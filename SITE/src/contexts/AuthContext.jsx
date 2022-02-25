import { createContext, useEffect, useState, useContext } from "react";



const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({ role: 0, id: 0 });
    // const [auth, setAuth] = useContext(AuthContext);

    useEffect(() => {
        fetch("http://localhost:5001/auth", { credentials: 'include' }).then((resp) => resp.text())
            .then((text) => {
                const data = text.toJson();

                if (data.result) {
                    // console.log(data);
                    // console.log("id: "+ data.id);
                    setAuth({ role: data.role, id:data.id });
                }
                else {
                    document.cookie = `auth=null;max-age=0`;
                    setAuth({ role: 0, id:0 });
                }
            });
    }, [])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };