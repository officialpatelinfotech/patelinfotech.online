import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/NewsInsights.css";

const updates = [
    {
        id: 1,
        date: "March 2026",
        title: "The Future of AI in Digital Transformation",
        desc: "How machine learning is reshaping the technical landscape and providing new opportunities for business growth.",
        category: "Insights"
    },
    {
        id: 2,
        date: "February 2026",
        title: "Maximizing ROI with Modern Web Frameworks",
        desc: "A deep dive into why React and Next.js are the gold standard for scalable business applications.",
        category: "Technical"
    },
    {
        id: 3,
        date: "January 2026",
        title: "Security Best Practices for Cloud Hosting",
        desc: "Essential measures to protect your digital products from emerging cyber threats and data breaches.",
        category: "Security"
    }
];

const NewsInsights = () => {
    return (
        <section className="news-section">
            <div className="container">
                <div className="news-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Latest news and <span className="font-italic">insights</span>
                    </motion.h2>
                </div>

                <div className="news-grid">
                    {updates.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="news-card glass-morphism"
                        >
                            <div className="news-top">
                                <span className="news-cat">{item.category}</span>
                                <span className="news-date">{item.date}</span>
                            </div>
                            <h3 className="news-title">{item.title}</h3>
                            <p className="news-desc">{item.desc}</p>
                            <Link to="/news" className="news-link-btn">
                                Read article <span>→</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="news-footer">
                    <Link to="/news" className="btn-secondary">
                        View all insights
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NewsInsights;
