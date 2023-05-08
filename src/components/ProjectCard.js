import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,full=false }) => {
  if (!full){
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img alt={title} src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )}

  return (
    <Col size={17} sm={12} md={12}>
      <div className="proj-imgbx">
        <img alt={title} src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
