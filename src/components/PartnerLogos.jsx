import React from "react";
import { motion } from "framer-motion";
import "../styles/PartnerLogos.css";

const clients = [
    { name: "Kaushalya Art Jewellery", link: "https://kaushalyaartjewellery.com", logoFile: "kaushalyaartjewellery.png" },
    { name: "Crown & Halo", link: "https://crownandhalo.co.uk/", logoFile: "crownandhalo.jpg" },
    { name: "Avinyaan", link: "https://avinyaan.com/", logoFile: "avinyaan.jpeg" },
    { name: "Mobiebook", link: "https://mobiebook.online/#/home", logoFile: "mobiebook.png" },
    { name: "Khar Jamaat", link: "https://kharjamaat.in/", logoFile: "kharjamaat.jpeg" },
    { name: "Verity iGrills", link: "https://veritygrills.com/", logoFile: "verityigrills.png" },
    { name: "Wellness Shoppee", link: "https://wellnessshoppee.com/", logoFile: "wellnessshoppee.jpeg" },
    { name: "Maxcient Technologies", link: "https://maxcient.com/", logoFile: "maxcient_technologies_logo.jpeg" },
    { name: "Verity Ateliers", link: "https://verityateliers.com/", logoFile: "verityatelier.png" },
    { name: "Verity Aluminium System", link: "https://verityalu.com/", logoFile: "verity alu.jpeg" },
];

const getClientLogoSrc = (logoFile) => {
    const base = `${process.env.PUBLIC_URL}/assets/client%20logos/`;
    return `${base}${encodeURIComponent(logoFile)}`;
};

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
                        <motion.a
                            key={index}
                            href={client.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="partner-logo-card glass-morphism"
                            aria-label={client.name}
                            title={client.name}
                        >
                            <img
                                className="partner-logo"
                                src={getClientLogoSrc(client.logoFile)}
                                alt={client.name}
                                loading="lazy"
                                decoding="async"
                            />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnerLogos;
