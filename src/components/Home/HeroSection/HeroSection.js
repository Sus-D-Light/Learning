import Gradient from "../Gradient/Gradient"
import HeroCard from "../HeroCard/HeroCard"
import BackGroundImage from "../BackGroundImage/BackGroundImage"
import Class from "./HeroSection.module.css"
const HeroSection = ()=>{
return(<div className={Class.container}>
    <Gradient></Gradient>
    <HeroCard></HeroCard>
    <BackGroundImage></BackGroundImage>
    

</div>)
}
export default HeroSection