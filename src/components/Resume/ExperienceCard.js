const ExperienceCard = ({ date, title, company, location, description }) => (
  <div className="card shadow border-0 rounded-4 mb-5">
    <div className="card-body p-5">
      <div className="row align-items-center gx-5">
        <div className="col text-center text-lg-start mb-4 mb-lg-0">
          <div className="bg-light p-4 rounded-4">
            <div className="text-primary fw-bolder mb-2">{date}</div>
            <div className="small fw-bolder">{title}</div>
            <div className="small text-muted">{company}</div>
            <div className="small text-muted">{location}</div>
          </div>
        </div>
        <div className="col-lg-8"><div>{description}</div></div>
      </div>
    </div>
  </div>
);

export default ExperienceCard;

  