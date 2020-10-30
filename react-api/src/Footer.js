import React from 'react';
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import {Col} from 'react-bootstrap';

function Footer(){
    return(
    
    <div className="Footer">
    <section id="footer">
        <footer className = "mt-16 flex flex-col justify-center items-center">
            <Container fluid = {true}>
                    <br></br>
                    <br></br>
                    <br></br>
                    This site was made by Tyler Rubin
                    <br></br>
                    <center>LinkedIn:</center>
                    <center>Github:</center>
                    <br></br>
                    <br></br>
                    <br></br>
            </Container>
        </footer>
    </section>
    </div>
    
    );
}
export default Footer;