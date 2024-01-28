import Class from "./FeaturesThumbs.module.css"
const FeaturesThumbs = (props)=>{
    
    return (<div className={Class.conatiner}>
      {props.children}
    </div>)
}
export default FeaturesThumbs;