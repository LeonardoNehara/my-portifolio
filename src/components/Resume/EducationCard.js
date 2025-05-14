const EducationCard = ({ date, school, location, degree, area, description }) => (
    <div className="card shadow border-0 rounded-4 mb-5">
      <div className="card-body p-5">
        <div className="row align-items-center gx-5">
          <div className="col text-center text-lg-start mb-4 mb-lg-0">
            <div className="bg-light p-4 rounded-4">
              <div className="text-secondary fw-bolder mb-2">{date}</div>
              <div className="mb-2">
                <div className="small fw-bolder">{school}</div>
                <div className="small text-muted">{location}</div>
              </div>
              <div className="fst-italic">
                <div className="small text-muted">{degree}</div>
                <div className="small text-muted">{area}</div>
              </div>
            </div>
          </div>
          <div className="col-lg-8"><div>{description}</div></div>
        </div>
      </div>
    </div>
  );
  

export default EducationCard;
  