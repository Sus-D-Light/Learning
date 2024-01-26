import Class from "./BackGroundImage.module.css"
import img from "./Access/home-bg-slideshow1.jpg"
const BackGroundImage = ()=>{
return(<div className={`${Class.backstretch} ${Class.responsive}`}>
 <img  src={img}></img>
</div>)
}
export default BackGroundImage