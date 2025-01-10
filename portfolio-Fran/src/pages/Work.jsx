import './Pages.css';
import { ProjectCard } from '../components/Components';
import { FeaturedProjectCard } from '../components/Components';
import GithubProyects from '../data/GithubProyects.json';
import FeaturedProyects from '../data/FeaturedProyects.json';

const Work = () => {
    
    return (
        <section className="Flex work section" id="work">
        <div id="work">
          <div className="numbered-heading">
            <h2 className="title-section">Some Things I’ve Built</h2>
          </div>
          <ul className="projects-feautured">
          {FeaturedProyects.map((project, index) => (
            <FeaturedProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
              projectLink={project.projectLink}
              imagePath={project.imagePath}
            />
          ))}
            
          </ul>
          <h2 className='title-2'>Other Noteworthy Projects</h2>
              <a className="inline-link archive-link" href="https://github.com/FranciscoAnnoni?tab=repositories" target="_blank" rel="noopener noreferrer">
                view my GitHub Repository
              </a>
            <ul className="projects-grid">
            {GithubProyects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubLink={project.githubLink}
                projectLink={project.projectLink}
              />
            ))}
          </ul>
        </div>
        </section>
      );
    };
    
    export default Work;