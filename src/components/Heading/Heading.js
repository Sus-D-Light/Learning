import Classs from "./Heading.module.css"
const Heading =(props)=>{
    
    return(<div className={Classs.WowSection}>
            <h2> {props.heading}</h2>
            <h4>{props.subheading} </h4>
    </div>)
}
export default Heading