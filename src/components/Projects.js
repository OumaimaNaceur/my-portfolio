import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Medical Diagnosis",
      description: "Design & Development of a website for disease detection",
      imgUrl: projImg1,
    },
    {
      title: "Verifications",
      description: "validations for more precise work",
      imgUrl: projImg2,
    },
    {
      title: "Predictions",
      description: "High level of accuracy is the target of the plateform",
      imgUrl: projImg3,
    },
    {
      title: "UI/UX",
      description: " Attractive design for a better experience ",
      imgUrl: projImg4,
    },
    {
      title: "Doctor informations up to date",
      description: "Live data scarped constantly for an updated database.",
      imgUrl: projImg7,
    },
    {
      title: "Dataset",
      description: "large dataset scraped, cleaned and stored with purpose of increasing accuracy ",
      imgUrl: projImg6,
    },
  ];

  const project = { title: "Dashboard", description: "", imgUrl: projImg8 }

  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }>
                  <h2>Projects</h2>
                  <p>
                    In addition to technical skills, my portfolio highlights my
                    ability to communicate effectively with stakeholders. I am
                    adept at presenting complex data findings in a clear manner
                    and tailoring my approach to different audiences.
                  </p>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav
                      variant='pills'
                      className='nav-pills mb-5 justify-content-center align-items-center'
                      id='pills-tab'>
                      <Nav.Item>
                        <Nav.Link eventKey='first'>End of studies project</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='second'>
                          Academic project with excel
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='third'>Project 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id='slideInUp'
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }>
                      <h1></h1>
                      <Tab.Pane eventKey='first'>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='second'>
                        <p>
                          {" "}
                          <ProjectCard {...project} full={true} />
                          During this project, I conducted my analysis with Excel using a bike sales dataset that involves importing relevant variables such as the Gender of the buyer, Age, Income, Education, and other variables.

                          Cleaning and preprocessing the data by removing duplicates, handling missing data, and ensuring proper structure is essential. Excel's sorting, filtering, and conditional formatting tools aid in data manipulation.

                          I used Visualization tools like bar graphs, line graphs, and pie charts in Excel to help create a bike sales dashboard, enabling stakeholders to understand sales trends and compare performance across bike sales.

                          Pivot tables summarize and aggregate data, revealing relationships between variables.

                          Sharing the dashboard and findings with stakeholders is facilitated by Excel, allowing exports as PDFs or sharing the Excel file. Effective communication of insights and visualizations enables informed decision-making, identifying growth opportunities, and optimizing bike sales strategies.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey='third'>
                        <p></p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2}></img>
    </section>
  );
}
