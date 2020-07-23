import React from "react"

import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Container,
    Row,
    Col,
  } from "reactstrap";

function Objetives() {

    return(
        <div className="section section-dark text-center">
             <Container>
             <Row>
              <Col md="4">
                <Card className="card-plain">
                    <div className="info">
                     <div className="icon icon-info">
                    
                        <i class="nc-icon nc-laptop"></i>
                    
                     </div>
                    </div>

                  <CardBody>
                      <div className="author">
                      <CardTitle tag="h4">Conocimientos</CardTitle>
                      </div>
                    <p className="card-description text-center">
                      Respecto de mis conocimientos, estoy capacitandome en las últimas tecnologías de la 
                      librería ReactJS y cuento con leves conocimientos sobre desarrollo Back-end utilizando
                      Python combinado con Django
                    </p>
                  </CardBody>
                  
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-plain">
                <div className="info">
                  <div className="icon icon-info">
                    
                    <i class="nc-icon nc-bulb-63"></i>
                    
                  </div>
                  </div>
                  <CardBody>
                      <div className="author">
                        <CardTitle tag="h4">Objetivos</CardTitle>
                      </div>
                    <p className="card-description text-center">
                      Al desarrollar esta página mi objetivo principal es poner en práctica
                      todos los conocimientos adquiridos, y a su vez seguir perfeccionandolos, con
                      el fin de llegar a capacitarme como full stack developer. 
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-plain">
                <div className="info">
                     <div className="icon icon-info">
                    
                        <i class="nc-icon nc-atom"></i>
                    
                     </div>
                    </div>
                  <CardBody>

                      <div className="author">
                        <CardTitle tag="h4">Sobre esta página</CardTitle>
                      </div>

                    <p className="card-description text-center">
                      Este sitio web está implementado a base de un template público y gratuito,
                      modificado por mi e implementado a base de hooks, lo último en tecnologías 
                      de ReactJS.
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
    )

}

export default Objetives