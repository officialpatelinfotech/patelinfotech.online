import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/ServicesGrid.css";

const MotionLink = motion(Link);

const services = [
    {
        title: "Web Development",
        link: "/website-development",
        desc: "Custom, scalable web apps built with modern frameworks tailored to your business needs.",
        icon: "01"
    },
    {
        title: "Website Design",
        link: "/website-design",
        desc: "Responsive and engaging websites that showcase your brand across devices.",
        icon: "02"
    },
    {
        title: "UI/UX Design",
        link: "/ui-ux-design",
        desc: "Intuitive user experiences with sleek, modern interfaces.",
        icon: "03"
    },
    {
        title: "SEO Optimization",
        link: "/seo",
        desc: "Boost your visibility with on-page and technical SEO strategies.",
        icon: "04"
    },
    {
        title: "Website Maintenance",
        link: "/website-maintenance",
        desc: "Updates, backups, security checks, and performance monitoring.",
        icon: "05"
    },
    {
        title: "Hosting & Deployment",
        link: "/hosting",
        desc: "Reliable hosting solutions with smooth deployment.",
        icon: "06"
    }
];

const ServicesGrid = () => {
    return (
        <section className="services-grid-section" id="services">
            <div className="container">
                <div className="services-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        A service offering designed to <br />
                        meet your <span className="font-italic">every need</span>
                    </motion.h2>
                    <div className="services-nav-labels">
                        <span>Design</span> + <span>Development</span> + <span>Marketing</span> + <span>Technical</span>
                    </div>
                </div>

                <div className="services-grid-container">
                    {services.map((service, index) => (
                        <MotionLink
                            to={service.link}
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="service-grid-card glass-morphism"
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                            <div className="service-link">
                                Learn more <span>→</span>
                            </div>
                        </MotionLink>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
