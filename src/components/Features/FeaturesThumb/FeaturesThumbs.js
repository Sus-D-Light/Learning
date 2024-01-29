import Classs from "./FeaturesThumbs.module.css"
const FeaturesThumbs = (props)=>{
    
    return (<div className={Classs.conatiner}>
      <div className={Classs.thumb}>
      {props.children}
      </div>
      <h3>{props.heading}</h3>
      <p>{props.about}</p>
    </div>)
}
export default FeaturesThumbs;