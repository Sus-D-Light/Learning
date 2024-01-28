import img from "./access/logo-no-background.png"
import Class from "./Logo.module.css"
const Logo =()=>{
  return (<div className={Class.container}>
    <img src={img}></img>
  </div>)
}
export default Logo