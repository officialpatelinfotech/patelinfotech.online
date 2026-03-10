import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/PortfolioGrid.css";

const projects = [
    {
        id: 1,
        title: "Kaushalya Art Jewellery",
        category: "E-commerce Development",
        desc: "A bespoke jewelry e-commerce platform with intricate design and secure payment integration.",
        image: "/assets/clients/kaushalya.png",
        link: "https://kaushalyaartjewellery.com"
    },
    {
        id: 2,
        title: "Crown & Halo",
        category: "Corporate Branding & Web",
        desc: "A premium digital presence for a UK-based brand, focusing on high-end aesthetics and user experience.",
        image: "/assets/clients/crownhalo.png",
        link: "https://crownandhalo.co.uk/"
    }
];

const PortfolioGrid = () => {
    return (
        <section className="portfolio-section" id="portfolio">
            <div className="container">
                <div className="portfolio-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Delivering value to businesses <br />
                        in <span className="font-italic">all sectors</span>
                    </motion.h2>
                </div>

                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="portfolio-card"
                        >
                            <Link to={project.link} className="portfolio-image-wrapper">
                                <img src={project.image} alt={project.title} />
                                <div className="portfolio-overlay">
                                    <span className="view-case">View Case Study</span>
                                </div>
                            </Link>
                            <div className="portfolio-info">
                                <span className="project-cat">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="portfolio-footer">
                    <Link to="/projects" className="btn-secondary">
                        View all success stories
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PortfolioGrid;
