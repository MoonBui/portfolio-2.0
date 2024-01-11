import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Lexend_Deca } from "next/font/google";
import styles from "./styles/styles.module.css";


const leDe = Lexend_Deca({ 
    style: 'normal',
    subsets: ['latin'] 
});

const Footer = () => {
    return (
        <>
            <Container fluid className="left-container">
                <Row>
                    <div className={styles.leftAligned}>
                            <h5 className={styles.textCol}>Sensing a connection?</h5>
                    </div>
                </Row>

                <Row>
                    <Col className={styles.bottomAligned}>
                        <div>
                            <h2 className={`${leDe.className} ${styles.textCol}`}>Send your signal from Earth!</h2>
                            <p className={styles.secCol} id={styles['joke']}> Get it? Cause I'm the Moon. Just me?</p>                            
                            <ul className={styles.primCol}>
                                <li className={styles.footerLinks}>EMAIL</li>
                                <li className={styles.footerLinks}>LINKEDIN</li>
                                <li className={styles.footerLinks}>GITHUB</li>
                            </ul>
                        </div>

                    </Col>
                    <Col className={leDe.className}>
                        <img id={styles['footer-logo']} src='./chonky-moon-no-background.png' alt="footer logo for website"/>
                        <div className="copyright">
                            <h5 className={styles.accent}>© 2023 Earth’s Natural Satellite</h5>
                            <p className={styles.secCol}>Punning her name since 2019</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Footer;