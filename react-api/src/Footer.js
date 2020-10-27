import React from 'react';
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import {Col} from 'react-bootstrap';

function Footer(){
    return(
    <div className="Footer">
        <footer className = "mt-16 flex flex-col justify-center items-center">
            <Container fluid = {true}>
               <Row className = "border-top justify-content-between p-2">
                  <Col className = "p-0" md={3} sm={12}>
                    Tyler Rubin
                  </Col> 
                  <Col className ="p-0 d-flex justify-content-end" md={3}>
                    This site was made by Tyler Rubin
                  </Col> 
               </Row> 
            </Container>
        </footer>
    </div>
    );
}
export default Footer;