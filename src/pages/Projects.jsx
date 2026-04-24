import React, { useMemo, useState } from 'react';
import { Search, AutoAwesome } from '@mui/icons-material';
import ProjectItem from '@components/UI/Cards/ProjectItem';
import { projects } from "@data/projects";
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";
import "@css/Projects.css";

const filters = [
  { key: 'all', label: 'All projects' },
  { key: 'general', label: 'Personal' },
  { key: 'master', label: "Master's degree" },
  { key: 'bachelor', label: "Bachelor's degree" },
];

function Projects() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [sectionRef, isVisible] = useIntersectionObserver();

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
      const searchable = `${project.name} ${project.skills} ${project.description}`.toLowerCase();
      const matchesQuery = searchable.includes(query.toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  const featuredCount = projects.filter((project) => project.featured).length;

  return (
    <div className='projects page-shell'>
      <section className='projects-hero'>
        <div className='section-heading'>
          <span>Portfolio</span>
          <h2>Selected projects across web, data and mobile.</h2>
          <p>
            Explore personal work, academic projects and experiments that show how I think through interaction,
            implementation and product structure.
          </p>
        </div>

        <div className='projects-summary glass-panel'>
          <div>
            <span><AutoAwesome /> Curated selection</span>
            <p>{projects.length} total projects with {featuredCount} highlighted pieces.</p>
          </div>
          <div className='search-box'>
            <Search />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name, stack or concept"
            />
          </div>
        </div>
      </section>

      <section ref={sectionRef} className={`project-browser fade-in ${isVisible ? 'visible' : ''}`}>
        <div className='filter-row'>
          {filters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              className={activeFilter === filter.key ? 'active' : ''}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <div className='projectList'>
            {filteredProjects.map((project) => (
              <ProjectItem
                key={project._key}
                id={project._key}
                name={project.name}
                image={project.image}
                skills={project.skills}
                category={project.categoryLabel}
                description={project.description}
              />
            ))}
          </div>
        ) : (
          <div className='empty-state glass-panel'>
            <h3>No projects found</h3>
            <p>Try changing the filter or using a different search term.</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default Projects;
