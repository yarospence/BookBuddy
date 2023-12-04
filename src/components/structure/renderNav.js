import { Link, Route, Routes } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";
import { nav } from "./navbar";

export const RenderRoutes = () => {
  const {user} = AuthData();
  // using the variable r to simply track the path created
  return (
    <Routes>
      { nav.map((r,1) => {
        //create a if statement that 
        //allows us to route user authentication
        if(r.isPrivate && isAuthenticated) {
          return <Route key={1} path={r.path} element={r.element}/>
        } else if (!r, isPrivate) {
          return <Route key={i} path={r.path} element={r.element}/>
        } else return false
      })}
    </Routes>
  )
}
//now we have to render a menu that allows the user to logout 
export const RenderMenu = () => {
  const (user, logout) =AuthData()

  const MenuItem = ({r}) => {
    return (
      <div className="menuitem"><Link to={r.path}>{r.name}</Link></div>
    )
  }
//create a mapping through the navigation items that verify 
//who is Authenticated or not
  return (
    <div className="menu">
      {nav.map((r,1) => {
        if (!r.isPrivate && r.isMenu) {
          return (
            <MenuItem key={i} r={r}/>
          )
        }else if (user.isAuthenticated && r.isMenu) {
          return (
            <MenuItem key={i} r={r}/>
          )
        } else return false
      })}
      {user.isAuthenticated ?
      <div className="menuItem"><Link to={`#`} onClick={logout}>Log Out</Link></div>
      :
      <div className="menuItem"><Link to={'login'}>Log In</Link></div> }
    </div>
  )
}