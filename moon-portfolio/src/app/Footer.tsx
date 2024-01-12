import * as React from "react";
import { Container, Row, Col } from "reactstrap";
import { Lexend_Deca } from "next/font/google";
import Linkto from "./ButtonMailto";
import local from "./styles/styles.module.css";
import './styles/globals.css'


const leDe = Lexend_Deca({ 
    style: 'normal',
    subsets: ['latin'] 
});

const Footer = () => {
    return (
        <>
            <Container fluid className="left-container">
                <Row>
                    <div className={local.leftAligned}>
                            <h5 className='textCol'>Sensing a connection?</h5>
                    </div>
                </Row>

                <Row>
                    <Col className={local.bottomAligned}>
                        <div>
                            <h2 className={`${leDe.className} textCol`}>Send your signal from Earth!</h2>
                            <p className='secCol' id={local['joke']}> Get it? Cause I'm the Moon. Just me?</p>                            
                            <ul className='primCol'>
                                <li className='footerLinks'>
                                    <Linkto label='EMAIL' link='mailto:moonbui1024@gmail.com'/>
                                </li>
                                <li className='footerLinks'>
                                    <Linkto label='LINKEDIN' link='https://www.linkedin.com/in/moon-bui/'/>
                                </li>
                                <li className='footerLinks'>
                                    <Linkto label='GITHUB' link='https://github.com/MoonBui'/>
                                </li>
                            </ul>
                        </div>

                    </Col>
                    <Col className={leDe.className}>
                        <img id={local['footer-logo']} src='./chonky-moon-no-background.png' alt="footer logo for website"/>
                        <div className="copyright">
                            <h5 className='accent'>© 2023 Earth’s Natural Satellite</h5>
                            <p className='secCol'>Punning her name since 2019</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Footer;