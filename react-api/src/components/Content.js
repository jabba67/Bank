import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Content(props)
{
    return(
            <Row className="justify-content-center">
                <Col md={8}>
                    {props.children}
                </Col>
            </Row>
    );
}
export default Content;