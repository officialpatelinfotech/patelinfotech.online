import React from "react";
import { motion } from "framer-motion";
import "../styles/PartnerLogos.css";

const clients = [
    { name: "Kaushalya Art Jewellery", link: "https://kaushalyaartjewellery.com" },
    { name: "Crown & Halo", link: "https://crownandhalo.co.uk/" },
    { name: "Wellness Shoppee", link: "https://wellnessshoppee.com/" },
    { name: "Khar Jamaat", link: "https://kharjamaat.in/" },
    { name: "Verity Ateliers", link: "https://verityateliers.com/" },
    { name: "Verity Grills", link: "https://veritygrills.com/" },
    { name: "Maxcient Technologies", link: "https://maxcient.com/" },
    { name: "Verity Aluminium System", link: "https://verityalu.com/" },
];

const PartnerLogos = () => {
    return (
        <section className="partners-section">
            <div className="container">
                <div className="partners-header">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="partners-intro"
                    >
                        We pride ourselves on the strength of our relationships. <br />
                        Here are some of the brands we've worked with:
                    </motion.p>
                </div>

                <div className="partners-grid">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="partner-logo-card glass-morphism"
                        >
                            <span className="partner-name">{client.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnerLogos;
