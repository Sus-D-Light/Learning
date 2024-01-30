import Heading from "../Heading/Heading"
import Section from "../Section/Section"
import classess from "./About.module.css"
import AboutShowCase from "./AboutShowCase/AboutShowCase"
const About =()=>{
    return(<Section className={classess.background}>
        <Heading heading="Our Story" subheading="Your Dining Restaurant Since 1989"></Heading>
        <AboutShowCase></AboutShowCase>
        </Section>)
}

export default About