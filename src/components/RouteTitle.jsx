import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BRAND = "Patel Infotech Services";

const TITLES_BY_PATH = {
  "/": BRAND,
  "/services": `Services | ${BRAND}`,
  "/contact-us": `Contact Us | ${BRAND}`,
  "/about-us": `About Us | ${BRAND}`,
  "/policies": `Policies | ${BRAND}`,
  "/website-development": `Website Development | ${BRAND}`,
  "/ui-ux-design": `UI/UX Design | ${BRAND}`,
  "/seo": `SEO | ${BRAND}`,
  "/hosting": `Hosting | ${BRAND}`,
  "/sitemap": `Sitemap | ${BRAND}`,
  "/website-design": `Website Design | ${BRAND}`,
  "/website-maintenance": `Website Maintenance | ${BRAND}`,
  "/deploy-guide": `Deploy Guide | ${BRAND}`,
  "/projects": `Projects | ${BRAND}`,
  "/projects/react.js/interactive-tesseract": `Interactive Tesseract | ${BRAND}`,
  "/projects/react.js/solar-system": `Solar System | ${BRAND}`,
  "/location": `Location | ${BRAND}`,
  "/our-clients": `Our Clients | ${BRAND}`,
};

function getTitleForPath(pathname) {
  return TITLES_BY_PATH[pathname] || BRAND;
}

const RouteTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = getTitleForPath(pathname);
  }, [pathname]);

  return null;
};

export default RouteTitle;
