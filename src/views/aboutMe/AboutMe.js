import React from "react";
// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Progress
} from "reactstrap";

// core components
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import "./aboutme.css"

function AboutMe() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="santifoto img-circle img-no-padding img-responsive"
                src={require("assets/img/SantiMakci.JPG")}
              />
            </div>
            <div className="name">
              <h6 className="sobremi description">Sobre mi</h6>
            </div>
          </div>
          <Row>
            <Col  className="ml-auto mr-auto text-center" md="6">
              <p id="descripcion">
                Mi nombre es Santiago Makcimovich tengo 23 años y soy estudiante de Licenciatura en Informatica 
                en la Universidad Nacional de La Plata. Actualmente estoy transitando el 3er año de la 
                carrera y terminando las últimas materias de la carrera de Analista programador universitario.
                Me considero una persona activa y productiva, siempre estoy buscando incorporar nuevos
                conocimientos que me permitan perfeccionar mis actividad, y superarme día a día.
              </p>
              <br />
              
              
              <div>
              <h6>Analista programador universitario</h6>
              <Progress max="100" value="65" barClassName="progress-bar-sucess" />
              <br/>
              <h6>Licenciatura en Informática</h6>
              <Progress max="100" value="45" barClassName="progress-bar-danger" />
              </div>
              <br /><br />
              <Button href="#formulario" className="btn-round" color="default" outline>

                <i className="nc-icon nc-email-85" /> Contactarme
              </Button>
            </Col>
          </Row>
          
          
          
        </Container>
      </div>
    </>
  );
}

export default AboutMe