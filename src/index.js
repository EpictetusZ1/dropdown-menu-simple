import Menu from "./menu-pkg.js";
import './styles/style.css'

Menu.buildMenu(".navTarget","menuCont", "menuEl", 5, ["Menu", "Home Page", "About", "Contact Us", "Our Story", "Login"])

let menuItems = ["Split Test Menu B", "Home", "About", "Cookies", "Contact Us", "Mail Us", "Privacy Policy", "Our Story", "Made with the same Js function as the menu on left"]

Menu.buildMenu(".targetBravo", "menuTwo", "split-test", 8, menuItems)