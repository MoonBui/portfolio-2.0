import { Lexend_Deca } from "next/font/google";
import styles from "./styles/styles.module.css";
import { Container, Row, Col } from "reactstrap";

const leDe = Lexend_Deca({ 
    style: 'normal',
    subsets: ['latin'] 
});

const Footer = () => {
    return (
        <>
        <div className="footer-container">
            <footer>
                <h4 className={styles.textCol}>Sensing a connection?</h4>
                <h2 className={`${leDe.className} ${styles.textCol}`}>Send your signal from Earth!</h2>
            </footer>
        </div>
        </>
    )
}
export default Footer;