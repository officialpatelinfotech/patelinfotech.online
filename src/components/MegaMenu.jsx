import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/MegaMenu.css";

// Import images
import devImg from "../assets/images/mega_menu_development.png";
import aboutImg from "../assets/images/mega_menu_about_human.png";
import clientsImg from "../assets/images/5569523_2880399.jpg";

const menuData = {
    Services: {
        title: "Our Services",
        subtitle: "Comprehensive IT solutions for your digital growth",
        categories: [
            {
                name: "Design",
                services: ["Website Design", "UI/UX Design"]
            },
            {
                name: "Development",
                services: ["Web Development"]
            },
            {
                name: "Technical",
                services: ["Website Maintenance", "Hosting & Deployment"]
            },
            {
                name: "Marketing",
                services: ["SEO Optimization"]
            }
        ],
        featured: {
            title: "Expert Tech Solutions",
            desc: "We provide tailored IT services to help your business lead in the digital era.",
            image: devImg
        }
    },
    "About Us": {
        title: "Who We Are",
        subtitle: "The story behind our excellence and vision",
        categories: [
            {
                name: "Company",
                services: ["Our Story", "Leadership"]
            },
            {
                name: "Values",
                services: ["Mission", "Vision", "Infrastructure"]
            }
        ],
        featured: {
            title: "10+ Years Expertise",
            desc: "Guided by technical mastery and a client-focused approach since 2025.",
            image: aboutImg
        }
    },
    "Our Clients": {
        title: "Global Network",
        subtitle: "Visionary brands we've grown alongside",
        categories: [
            {
                name: "Portfolio",
                services: ["Featured Projects", "Case Studies"]
            },
            {
                name: "Partners",
                services: ["Global Clients", "Client Testimonials"]
            }
        ],
        featured: {
            title: "Join Our Network",
            desc: "Join over 50+ partners scaling their business with Patel Infotech Services.",
            image: clientsImg
        }
    }
};

const MegaMenu = ({ activeCategory, isOpen, onClose, onMouseEnter, onMouseLeave }) => {
    if (!activeCategory || !menuData[activeCategory]) return null;

    const data = menuData[activeCategory];

    const serviceToPath = (service) => {
        const mapping = {
            // Services
            "Website Design": "/website-design",
            "UI/UX Design": "/ui-ux-design",
            "Web Development": "/website-development",
            "Website Maintenance": "/website-maintenance",
            "Hosting & Deployment": "/hosting",
            "SEO Optimization": "/seo",
            // About Us
            "Our Story": "/about-us",
            "Leadership": "/about-us",
            "Mission": "/about-us",
            "Vision": "/about-us",
            "Infrastructure": "/about-us",
            // Our Clients
            "Featured Projects": "/projects",
            "Case Studies": "/projects",
            "Global Clients": "/our-clients",
            "Client Testimonials": "/our-clients"
        };
        return mapping[service] || "/services";
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="megamenu-overlay"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClose}
        >
            <div className="megamenu-card" onClick={(e) => e.stopPropagation()}>
                <div className="megamenu-content">
                    <div className="megamenu-left">
                        <div className="megamenu-header">
                            <h3>{data.title}</h3>
                            <p>{data.subtitle}</p>
                        </div>

                        <div className="megamenu-grid">
                            {data.categories.map((cat, idx) => (
                                <div key={idx} className="megamenu-services">
                                    <span className="services-label">{cat.name}</span>
                                    <ul>
                                        {cat.services.map((service, sIdx) => (
                                            <li key={sIdx}>
                                                <Link to={serviceToPath(service)} onClick={onClose}>
                                                    {service}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="megamenu-right">
                        <div className="featured-card">
                            <div className="featured-image">
                                <img src={data.featured.image} alt={data.featured.title} />
                            </div>
                            <div className="featured-info">
                                <h4>{data.featured.title}</h4>
                                <p>{data.featured.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default MegaMenu;
