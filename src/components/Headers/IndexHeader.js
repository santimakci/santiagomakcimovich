
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import "./indexHeader.css"



// core components

function IndexHeader() {
  return (
    <>
      <div
        id="fondo"
        className="page-header section-dark"
               
      >
        <div className="filter" />
        <div className="content-center">
          <Container className="nombre">

              <div className="title-brand">
              <h1 id="titlename" className="presentation-title">Makcimovich Santiago</h1>
              
            </div>

            <h2 className="presentation-subtitle text-center">
              Front-end Developer
            </h2>
            
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        />
      </div>
    </>
  );
}

export default IndexHeader;
