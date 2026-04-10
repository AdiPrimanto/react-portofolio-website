import React, { useState, useEffect, useRef } from "react";
import "./portofolio.css";
import { data } from "./data.js";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

// Category tags derived from tools
const getCategory = (tools = "") => {
  const t = tools.toLowerCase();
  if (t.includes("nuxt") || t.includes("next")) return "Next/Nuxt";
  if (t.includes("react")) return "React";
  if (t.includes("vue")) return "Vue";
  if (t.includes("laravel") || t.includes("php")) return "PHP/Laravel";
  return "Other";
};

const FILTERS = ["All", "Next/Nuxt", "React", "Vue", "PHP/Laravel", "Other"];

// Show first N projects initially, load more on click
const INITIAL_COUNT = 9;

const Portofolio = () => {
  const [active, setActive] = useState("All");
  const [visible, setVisible] = useState(INITIAL_COUNT);
  const [hovered, setHovered] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef(null);

  const filtered =
    active === "All"
      ? data
      : data.filter((p) => getCategory(p.tools) === active);

  const shown = filtered.slice(0, visible);

  // Reset visible count when filter changes
  useEffect(() => setVisible(INITIAL_COUNT), [active]);

  // Intersection Observer to track section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Trigger animations when the section is in view and data changes
  useEffect(() => {
    if (isIntersecting && sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".fade-up");
      elements.forEach((el, i) => {
        if (!el.classList.contains("visible")) {
          setTimeout(() => el.classList.add("visible"), i * 60);
        }
      });
    }
  }, [isIntersecting, active, visible, shown]);

  return (
    <section id="portfolio" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="port__header fade-up">
          <div className="section-eyebrow">
            <span>// 03</span> Portfolio
          </div>
          <h2>
            Selected <span className="gradient-text">Work</span>
          </h2>
          <p className="port__subtitle">
            {data.length}+ projects delivered — web apps, dashboards, landing
            pages, and more.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="port__filters fade-up">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`port__filter ${active === f ? "active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
              {f !== "All" && (
                <span className="port__filter-count">
                  {data.filter((p) => getCategory(p.tools) === f).length}
                </span>
              )}
              {f === "All" && (
                <span className="port__filter-count">{data.length}</span>
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="port__grid">
          {shown.map((project, i) => (
            <article
              key={project.id}
              className="port__card fade-up"
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div className="port__card-image">
                <img
                  src={project.image[0]}
                  alt={project.title}
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div
                  className={`port__card-overlay ${hovered === project.id ? "active" : ""}`}
                >
                  <div className="port__card-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="port__card-link"
                        aria-label="GitHub"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <BsGithub />
                        <span>Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="port__card-link port__card-link--primary"
                        aria-label="Live Demo"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <BsArrowUpRight />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Category badge */}
                <div className="port__card-cat">
                  {getCategory(project.tools)}
                </div>
              </div>

              {/* Info */}
              <div className="port__card-info">
                <h3 className="port__card-title">{project.title}</h3>
                <p className="port__card-desc">{project.description}</p>
                <div className="port__card-tools">
                  {project.tools.split(",").map((t) => (
                    <span key={t} className="port__tool-tag">
                      {t.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load more */}
        {visible < filtered.length && (
          <div className="port__load-more fade-up">
            <button
              className="btn btn-outline"
              onClick={() => setVisible((v) => v + 6)}
            >
              Load More
              <span className="port__load-count">
                +{filtered.length - visible} more
              </span>
            </button>
          </div>
        )}

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="port__empty">
            <p>No projects in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portofolio;
