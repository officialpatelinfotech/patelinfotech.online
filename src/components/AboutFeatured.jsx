import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/AboutFeatured.css";

const AboutFeatured = () => {
    return (
        <section className="about-featured-section">
            <div className="container">
                <div className="about-featured-grid">
                    <div className="about-featured-text">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="section-title"
                        >
                            Allow us to <br />
                            <span className="font-italic">introduce ourselves...</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="about-description"
                        >
                            <p>
                                Patel Infotech Services was established in <strong>January 2025</strong> with a clear mission:
                                to craft custom web applications and websites with precision, creativity, and care.
                                We are a forward-thinking digital company committed to delivering cutting-edge solutions
                                for clients across industries.
                            </p>
                            <p>
                                Our company is led by <strong>Shubham Patel</strong>, a technology expert with over 10 years
                                of professional experience in software development. Shubham’s vision forms the backbone
                                of our innovation and excellence.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <Link to="/about-us" className="btn-secondary">
                                Find out more about us
                            </Link>
                        </motion.div>
                    </div>

                    <div className="about-featured-stats">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="stat-card glass-morphism"
                        >
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Years Experience</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="stat-card glass-morphism"
                        >
                            <span className="stat-number">2025</span>
                            <span className="stat-label">Year Founded</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="stat-card glass-morphism"
                        >
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Client Focus</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutFeatured;
