const ProjectCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="row align-items-center mb-5">
      <div className="col-md-4">
        <img href={link} src={imageUrl} alt={title} className="img-fluid rounded" />
      </div>
      <div className="col-md-8">
        <h3>
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-decoration-none link-hover">
            {title}
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>

  );
};

export default ProjectCard;
