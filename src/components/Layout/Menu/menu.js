import menu from "./menu.module.css"

const Menu= ()=>{
  return (
    <div className={`${menu['burger-menu']}`}>
        <div className={`${menu['burger-bar']} ${menu['clicked']}`}></div>
        <div className={`${menu['burger-bar']} ${menu['clicked']}`}></div>
        <div className={`${menu['burger-bar']} ${menu['clicked']}`}></div>   
    </div>
  )
}
export default Menu