import SkillItem from './SkillItem';
import LanguageItem from './LanguageItem';

const professionalSkills = [
  'API RESTful',
  'Git & GitHub',
  'Web Development',
  'Clean Architecture',
  'Agile Methodologies',
];

const languages = [
  'HTML',
  'CSS',
  'JavaScript',
  'PHP',
  'Laravel',
  'React'
];

const SkillsSection = () => (
  <section>
    <div className="card shadow border-0 rounded-4 mb-5">
      <div className="card-body p-5">
        {/* Professional Skills */}
        <div className="mb-5">
          <div className="d-flex align-items-center mb-4">
            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
              <i className="bi bi-tools"></i>
            </div>
            <h3 className="fw-bolder mb-0">
              <span className="text-gradient d-inline">Professional Skills</span>
            </h3>
          </div>
          <div className="row row-cols-1 row-cols-md-3 mb-4">
            {professionalSkills.slice(0, 3).map((skill, i) => (
              <SkillItem key={i} name={skill} />
            ))}
          </div>
          <div className="row row-cols-1 row-cols-md-3">
            {professionalSkills.slice(3).map((skill, i) => (
              <SkillItem key={i} name={skill} />
            ))}
          </div>
        </div>
        {/* Languages */}
        <div className="mb-0">
          <div className="d-flex align-items-center mb-4">
            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
              <i className="bi bi-code-slash"></i>
            </div>
            <h3 className="fw-bolder mb-0">
              <span className="text-gradient d-inline">Languages</span>
            </h3>
          </div>
          <div className="row row-cols-1 row-cols-md-3 mb-4">
            {languages.slice(0, 3).map((lang, i) => (
              <LanguageItem key={i} name={lang} />
            ))}
          </div>
          <div className="row row-cols-1 row-cols-md-3">
            {languages.slice(3).map((lang, i) => (
              <LanguageItem key={i} name={lang} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
