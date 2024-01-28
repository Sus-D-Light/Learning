import Class from "./NavBar.module.css"
const NavBar = ()=>{
    return (<nav className={Class.container}>
        <ul className={`${Class.normal}`} >
            <li><a>Home</a></li>
            <li><a>Features</a></li>
            <li><a>About</a></li>
            <li><a>Menu</a></li>
            <li><a>Team</a></li>
            <li><a>Gallery</a></li>
            <li><a>Contact</a></li>    
        </ul>
    </nav>)
}
export default NavBar