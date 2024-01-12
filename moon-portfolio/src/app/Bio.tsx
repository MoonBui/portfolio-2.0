import * as React from "react";
import { Container, Row, Col } from "reactstrap";
import local from './styles/styles.module.css'

const Bio = () => {
    return (
        <>
            <Container fluid className='bio-container'>
                <Col sm={4} className={`${local.leftAligned} favorites`}>
                    <img id={local['bio-logo']} src='./chonky-moon-no-background.png' alt='moon logo'/>
                    <div>
                        <ul className="primCol">
                            <li>
                                <img src='./folder.svg'/>
                                <span>Favorites </span>
                            </li>
                            <li>⌨️ Keyboard</li>
                            <li>💃 Dance</li>
                            <li>👜 Fashion</li>
                            <li>👩‍🍳 Cook</li>

                        </ul>
                    </div>
                </Col>
                <Col sm={8}>
                    <Row></Row>
                </Col>
            </Container>
        </>
    )
    
}

export default Bio;