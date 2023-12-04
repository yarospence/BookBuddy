import { About } from "../pages/About";
import { Account } from "../pages/Account";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Private } from "../pages/Private";

//dynamically created my pathways between the different routes
export const navbar = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/about",
    name: "About",
    element: <About />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/login",
    name: "Login",
    element: <Home />,
    isMenu: false,
    isPrivate: false,
  },
  {
    path: "/private",
    name: "Private",
    element: <Home />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: "/account",
    name: "Account",
    element: <Home />,
    isMenu: true,
    isPrivate: true,
  },
];
