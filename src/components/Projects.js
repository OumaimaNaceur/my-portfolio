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
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import projImg13 from "../assets/img/project-img13.png";
import projImg14 from "../assets/img/project-img14.png";
import projImg15 from "../assets/img/project-img15.png";
import projImg16 from "../assets/img/project-img16.png";
import projImg17 from "../assets/img/project-img17.png";

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

  const project1 = { title: "Dashboard", description: "", imgUrl: projImg8 }
  const project2 = [
    {
      title: "PowerBi report",
      description: "",
      imgUrl: projImg11,
    },
  {
    title: "Sales",
    description: "",
    imgUrl: projImg10,
  },
    {

      title: "Measures",
      description: "",
      imgUrl: projImg9,
    },
  ]

  const project3 = [{
    title: "Basic measures",
    description: "",
    imgUrl: projImg12,
  },
    {
      title: "Time intelligence",
      description: "",
      imgUrl: projImg13,
    },
    {
      title: "Ranking",
      description: "",
      imgUrl: projImg14,
    },
    {
      title: "Scenario analysis",
      description: "",
      imgUrl: projImg15,
    },
    {
      title: "Top 100 clients",
      description: "",
      imgUrl: projImg16,
    },
    {
      title: "Final report",
      description: "",
      imgUrl: projImg17,
    },]
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
                      style={{ border: "1px solid white" }}
                      className='nav-pills mb-5 justify-content-center align-items-center'
                      id='pills-tab'>
                      <Nav.Item>
                        <Nav.Link eventKey='first'>Work Experience </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='second'>
                          Personal project 1
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='third'> Personal project 2</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Nav
                      variant='pills'
                      className='nav-pills mb-5 justify-content-center align-items-center'
                      style={{border:"1px solid white"}}
                      id='pills-tab'>
                      <Nav.Item>
                        <Nav.Link eventKey='fourth'>  Personal project 3</Nav.Link>
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
                        <Row></Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='second'>
                        <p>
                          {" "}
                          <ProjectCard {...project1} full={true} />
                          During this project, I conducted my analysis with Excel using a bike sales dataset that involves importing relevant variables such as the Gender of the buyer, Age, Income, Education, and other variables.

                          Cleaning and preprocessing the data by removing duplicates, handling missing data, and ensuring proper structure is essential. Excel's sorting, filtering, and conditional formatting tools aid in data manipulation.

                          I used Visualization tools like bar graphs, line graphs, and pie charts in Excel to help create a bike sales dashboard, enabling stakeholders to understand sales trends and compare performance across bike sales.

                          Pivot tables summarize and aggregate data, revealing relationships between variables.

                          Sharing the dashboard and findings with stakeholders is facilitated by Excel, allowing exports as PDFs or sharing the Excel file. Effective communication of insights and visualizations enables informed decision-making, identifying growth opportunities, and optimizing bike sales strategies.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey='third'>
                        <Row style={{justifyContent:'center'}}>
                          {project2.map((project, index) => {
                            return <ProjectCard multifull={true} key={index} {...project} />;
                          })}
                        </Row>
                        <Row> <p style={{ marginBottom: '10px', width: '100%', textAlign: 'left', color: 'white' }}>                          1. First, I loaded the dataset into Power BI, leveraging Power Query, a transformation tool. With Power Query, I performed an initial exploratory analysis, assessing the data’s structure, format, and quality. I identified any inconsistencies, missing values, duplicates, or outliers that required attention. After completing the data cleaning procedures, I loaded the cleaned dataset into Power BI's data model for further analysis and visualization.
                        </p>
                          <p style={{ marginBottom: '10px', width: '100%', textAlign: 'left', color: 'white' }}>    2.    I identified related tables: The first step is to identify the tables in your dataset that have relationships or connections based on common fields or keys. Understanding the relationships between tables is essential for accurate analysis.

                            Then, I defined relationships: I used the relationship view or the Manage Relationships dialog box in Power BI to define the relationships between tables. I identified the primary key columns in one table and the corresponding foreign key columns in another table, establishing the connection between them.
                          </p>


                          <p style={{ marginBottom: '10px', width: '100%', textAlign: 'left', color: 'white' }}>                          3.    Performing analysis using DAX (Data Analysis Expressions) expressions in Power BI provides a powerful way to manipulate and analyze data within the data model. Here's a brief description of how I utilized DAX expressions for analysis:
                          </p>
                          <ul style={{marginLeft: '15px'}}>
                            <li style={{ margin: '4px' }}>Measures: Measures are calculations performed on the fly during analysis. Using DAX expressions, I created measures to aggregate data and perform calculations across multiple dimensions. Measures allowed for dynamic analysis based on user selections, filters, and slicers. I created measures for various metrics such as total sales, total cost, and total profit.
                            </li>
                            <li style={{ margin: '4px' }}>Calculated Columns: I created calculated columns using DAX expressions to derive new values based on existing data in the dataset. For example, I calculated profit margins by subtracting the cost from the sales amount and dividing it by the sales amount.
                            </li>
                            <li style={{ margin: '4px' }}>Time Intelligence: DAX expressions offer powerful time intelligence functions, which I utilized to perform analysis based on date or time-related dimensions. Functions such as  SAMEPERIODLASTYEAR (comparison with the same period in the previous year), and DATEADD (date-based calculations) helped me analyze trends, compare performance across different periods, and identify seasonality patterns.
                            </li>
                          </ul>

                          <p style={{ marginBottom: '10px', width: '100%', textAlign: 'left', color: 'white' }}>   4.    For the visualization part here is a brief description of how I used visualizations:
                          </p>
                          <ul style={{ marginLeft: '15px' }}>
                            <li style={{ margin: '4px' }}> I utilized a multi-row card visualization to display the values of calculated measures, such as total sales, and total cost. The multi-row card is an effective visualization option in Power BI for presenting multiple values or measures in a compact and concise format.

 </li>
                            <li style={{ margin: '4px' }}>I used the funnel: to represent the progression of total sales, total profit, and total cost. This visualization facilitated analysis, comparison, and decision-making, enabling stakeholders to gain valuable insights into the performance and optimization of these key metrics.

 </li>
                            <li style={{ margin: '4px' }}> I configured the donut chart visualization in Power BI to represent the total profit by categories. I customize the appearance, colors, labels, and tooltips of the donut chart to enhance clarity and visual appeal.

              </li>
                            <li style={{ margin: '4px' }}> By utilizing the line and clustered column chart visualization, I effectively depicted the trends of total sales and profit margin by date. This visualization allowed stakeholders to analyze the relationship between these two metrics, identify patterns, and gain valuable insights for making data-driven decisions.

      </li>
                          </ul>




                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='fourth' >
                        <Row style={{ justifyContent: 'center' }}>
                          {project3.map((project, index) => {
                            return <ProjectCard multifull={true} key={index} {...project} />;
                          })}
                        </Row>
                        <Row>
                          <ul style={{ marginLeft: '15px' }}>
                            <li style={{ margin: '4px' }}>Utilized <b>Power Query</b>  to load, clean, and structure datasets for analysis in Power BI. </li>
                            <li style={{ margin: '4px' }}> Identified related tables and define <b>relationships</b> based on common fields or keys.</li>
                            <li style={{ margin: '4px' }}>Applied <b> DAX expressions</b> for analysis: measures, calculated columns, and time intelligence.
                            </li>
                            <li style={{ margin: '4px' }}>Implemented data using the multi-row card, funnel, donut chart, and line/clustered column chart.</li>
                          </ul>
                        </Row>
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
