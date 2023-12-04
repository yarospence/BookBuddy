import { createContext, useContext } from "react";
import { RenderHeader} from "../component/header";
import {RenderMenu, RenderRoutes} from '../components/structure/renderNav'

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
  //create a state for setting the user
  const [user, setUser] = useState({ name: "", isAuthenticated: false });
  //now we create a function to form a login 
  const login = (userName, password) => {

    //create a callback function that can reject...Promise 
    return new Promise{(resolve, reject) => {
      //create  a if statement to decide if the username is correct
      if (password === 'password') {
        setUser({name: userName, isAuthenticated: true})
        resolve("success")
      } else {
        reject('Incorrect Password')
      }
    }}
  }
  //now create a way for the user to logout 
  //by rejecting Authentication
  const logout = () => {
    setUser({...user, isAuthenticated: false})
  }
     return (
          
               <AuthContext.Provider value={{user, login, logout}}>
                    <>
                         <RenderHeader />
                         <RenderMenu />
                         <RenderRoutes />
                    </>
                    
               </AuthContext.Provider>
          
     )

}
