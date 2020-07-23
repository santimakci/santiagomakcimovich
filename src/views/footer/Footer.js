import React from "react"
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

function Footer(){
    return(
        <Container>
            <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h3>Gracias por visitar mi página! Podes seguirme en cualquiera de mis redes</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="twitter-sharrre btn-round"
                color="twitter-bg"
                href="https://twitter.com/SantiMakci"
              >
                <i className="fa fa-twitter" /> Twitter
              </Button>
              <Button
                className="linkedin-sharrre btn-round  ml-2"
                color="danger"
                href="https://www.instagram.com/santimakcimovich/"                
              >
                <i className="fa fa-instagram" /> Instagram
              </Button>
              <Button
                className="facebook-sharrre btn-round ml-2"
                color="facebook-bg"
                href="https://www.linkedin.com/in/santiago-makcimovich-83466a188/"
              >
                <i className="fa fa-linkedin-square" /> Linkedin
              </Button>
            </Col>
          </Row>
          <div className="text-center">
          <br/><br/><br/>
          <h6>
          © {new Date().getFullYear()} <br/> 
               Desarrollado por Makcimovich, Santiago</h6>

          </div>
        </Container>


    )

}

export default Footer