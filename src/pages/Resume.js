import ExperienceSection from '../components/Resume/ExperienceSection';
import EducationSection from '../components/Resume/EducationSection';
import SkillsSection from '../components/Resume/SkillsSection';


const ResumePage = () => (
  <div className="bg-light min-vh-100 d-flex flex-column">
    <main className="flex-shrink-0">
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">Quem Sou Eu</span>
          </h1>
        </div>
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-11 col-xl-9 col-xxl-8">
            <ExperienceSection />
            <EducationSection />
            <SkillsSection />
            <div className="pb-5"></div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default ResumePage;

