import Class from "./Header.module.css"
import NavBar from "../NavBar/NavBar"
import Logo  from "../Logo/Logo"
import Menu from "../Menu/menu"
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton"
const Header =()=>{
    return(<div className={Class.background} >
        <Menu></Menu>
        <Logo></Logo>
        <NavBar></NavBar>
        <HeaderCartButton/>
    </div>)
}
export default Header