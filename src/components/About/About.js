import Heading from "../Heading/Heading"
import Section from "../Section/Section"
import classess from "./About.module.css"
const About =()=>{
    return(<Section className={classess.background}>
        <Heading heading="Our Story" subheading="Your Dining Restaurant Since 1989"></Heading>
        </Section>)
}

export default About