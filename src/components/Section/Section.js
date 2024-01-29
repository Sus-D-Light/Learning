import Classs from "./Section.module.css"
const Section = (props)=>{
    const classes = props.className
    return(<div className={`${Classs.container} ${classes}`}>
        {props.children}
    </div>)
}

export default Section