import Home from "../pages/Home/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import About from "../pages/About";
import Services from "../pages/Services";


export const publicRoute = [
  { path: "/", name: "Home", Component: Home },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/login", name: "Login", Component: Login },
  { path: "/about", name: "About", Component: About },
  { path: "/services", name: "Services", Component: Services },
];