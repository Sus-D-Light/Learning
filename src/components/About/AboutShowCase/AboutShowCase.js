import classes from "./AboutShowCase.module.css"
import img from "../Access/about-img.jpg"
const AboutShowCase =()=>{
    return(<div className={classes.container}>
        <div className={classes.sectionContainer}>
        <div className={classes.section1}>
            
            <img src={img}></img>
            <h3>Nunc ullamcorper suscipit neque, ac malesuada purus molestie non.</h3>
        </div>
        <div className={classes.section2}>
            <div className={classes.testblock}></div>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. Lorem ipsum dolor sit amet.</p>
        </div>
        <div className={classes.section3}>
            <h2>FINE DINING</h2>
            <p> Steak House is free website template in HTML CSS for everyone. Please tell your friends about Tooplate site.</p>
            <p>Vestibulum id iaculis nisl. Pellentesque nec tortor sagittis, scelerisque ante at, sollicitudin leo. Vivamus pulvinar a justo vel lobortis.</p>
            <ul>
                <li>Donec fringilla ipsum</li>
                <li>Donec fringilla ipsum</li>
                <li>Donec fringilla ipsum</li>
            </ul>
        </div>
        </div>
    </div>)
}

export default AboutShowCase