import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Encription from "../../Assets/Projects/Encription.jpg";
import profinder from "../../Assets/Projects/pro finder.png";
import student from "../../Assets/Projects/Student management System.jpg";
import billing from "../../Assets/Projects/Billing application.png";
import learning from "../../Assets/Projects/Learning management.jpg";
import spring from "../../Assets/Projects/Spring boot.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Encription}
              isBlog={false}
              title="File Encrypter/Decrypter"
              description="File encryption and Decryption Web App.This Web App provides file encryption and decryption services for multiple file types like word,txt,pdf.Build by using React.js for front end and Spring Boot for back end"
              ghLink="https://github.com/Iroshan99/File-Encryption-and-decryption-App"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={profinder}
              isBlog={false}
              title="Pro Finder (Group)"
              description="Mobile App for service finding and connecting.This App provides a platform for customers to easily find and connect with service providers and features like messanging,multiple categories for service providers and chat bot.Built with Flutter and Firebase"
              ghLink="https://github.com/Iroshan99/Pro-Finder-new"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={student}
              isBlog={false}
              title="Student Management System"
              description="This is a web application for student management with features like create new student, teacher, course, batches, enrollment and payment.Built with Laravel and React Js"
              ghLink="https://github.com/Iroshan99/Student-Management-System"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={billing}
              isBlog={false}
              title="Billing Application"
              description="This is a Billing Application for calculating bills. This was Built with Java GUI and Intellij IDEA"
              ghLink="https://github.com/Iroshan99/Billing-Application"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learning}
              isBlog={false}
              title="Sky Learn (Group)"
              description="This is a Learning Management System for students and it has features like quizes, flash cards, report genarating and many more.It Build with React JS"
              ghLink=""
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spring}
              isBlog={false}
              title="Spring Boot CRUD Application"
              description="This is an backend that i developed with Spring Boot and it provides all CRUD functions"
              ghLink="https://github.com/Iroshan99/Spring-Boot-application-for-basic-CRUD-operations"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
