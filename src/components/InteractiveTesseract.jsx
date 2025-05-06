import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/InteractiveTesseract.css";

const TesseractCanvas = () => {
  const canvasRef = useRef(null);
  const logoRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const logo = logoRef.current;

    const resizeCanvas = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const size = Math.min(canvas.width, canvas.height) * 0.2;
    let rotationX = 0;
    let rotationY = 0;
    let rotationZ = 0;
    let rotationW = 0;

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      rotationY = ((mouseX - canvas.width / 2) / (canvas.width / 2)) * 1.5;
      rotationX = (-(mouseY - canvas.height / 2) / (canvas.height / 2)) * 1.5;
    });

    const vertices = Array.from({ length: 16 }, (_, i) => [
      i & 1 ? -1 : 1,
      i & 2 ? -1 : 1,
      i & 4 ? -1 : 1,
      i & 8 ? -1 : 1,
    ]);

    const edges = [];
    for (let i = 0; i < 16; i++) {
      for (let j = i + 1; j < 16; j++) {
        if (Math.log2(i ^ j) % 1 === 0) edges.push([i, j]);
      }
    }

    function project4D(v) {
      let [x, y, z, w] = v;

      [x, y] = [
        x * Math.cos(rotationW) - y * Math.sin(rotationW),
        x * Math.sin(rotationW) + y * Math.cos(rotationW),
      ];

      [x, z] = [
        x * Math.cos(rotationZ) - z * Math.sin(rotationZ),
        x * Math.sin(rotationZ) + z * Math.cos(rotationZ),
      ];

      [x, w] = [
        x * Math.cos(rotationY) - w * Math.sin(rotationY),
        x * Math.sin(rotationY) + w * Math.cos(rotationY),
      ];

      [y, z] = [
        y * Math.cos(rotationX) - z * Math.sin(rotationX),
        y * Math.sin(rotationX) + z * Math.cos(rotationX),
      ];

      const d = 4;
      const p = d / (d - w);
      return [x * p, y * p, z * p];
    }

    function project3D([x, y, z]) {
      const d = 5;
      const f = d / (d - z);
      return {
        x: x * f * size + canvas.width / 2,
        y: y * f * size + canvas.height / 2,
        scale: Math.max(0.2, f * 0.6),
        z,
      };
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      rotationW += 0.015;
      rotationZ += 0.013;

      const projections = vertices.map((v) => project3D(project4D(v)));

      const center = projections.reduce(
        (acc, v) => {
          acc.x += v.x;
          acc.y += v.y;
          return acc;
        },
        { x: 0, y: 0 }
      );

      center.x /= projections.length;
      center.y /= projections.length;

      if (logo) {
        logo.style.left = `${center.x}px`;
        logo.style.top = `${center.y}px`;
        const avgZ =
          projections.reduce((sum, v) => sum + v.z, 0) / projections.length;
        const scale = Math.min(1, Math.max(0.4, 1 - (avgZ + 2) / 6));
        logo.style.transform = `translate(-50%, -50%) scale(${scale})`;
      }

      ctx.strokeStyle = "rgba(100, 200, 255, 0.8)";
      edges.forEach(([i, j]) => {
        const a = projections[i];
        const b = projections[j];
        ctx.lineWidth = (a.scale + b.scale) / 2;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();

        ctx.strokeStyle = "rgba(100, 200, 255, 0.3)";
        ctx.lineWidth *= 3;
        ctx.stroke();
        ctx.strokeStyle = "rgba(100, 200, 255, 0.8)";
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="interactive-tesseract-canvas" style={styles.container}>
      <canvas ref={canvasRef} style={styles.canvas}></canvas>
      <img
        ref={logoRef}
        src="https://patelinfotech.online/assets/images/favicon.svg"
        alt="Logo"
        style={styles.logo}
      />
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    backgroundColor: "#000",
    overflow: "hidden",
    cursor: "none",
  },
  canvas: {
    width: "100%",
    display: "block",
    height: "100%",
    background: "radial-gradient(circle at center, #001122, #000000)",
  },
  logo: {
    position: "absolute",
    width: "50px",
    height: "50px",
    pointerEvents: "none",
    filter: "drop-shadow(0 0 15px rgba(100, 200, 255, 0.8))",
    transform: "translate(-50%, -50%)",
    transition: "all 0.1s linear",
    opacity: 0.9,
  },
};

const InteractiveTesseract = () => {
  const currentProject = {
    id: 1,
    title: "Interactive Tesseract",
    description:
      "A 4D hypercube projection rendered in 3D space with mouse/touch controls. Built with Three.js and React Fiber.",
    category: "HTML, CSS, React.js, Three.js",
    link: "/projects/react.js/interactive-tesseract",
    sourceCode: "https://github.com/officialpatelinfotech/interactive-tesseract",
    techStack: ["React", "Three.js", "GSAP", "WebGL"],
  };

  const relatedProjects = [
    {
      id: 2,
      title: "3D Solar System",
      category: "Three.js, React",
      link: "/projects/react.js/solar-system",
    }
  ];

  return (
    <div className="project-landing-container">
      <Navbar />

      <div className="project-content-wrapper">
        {/* Main Content (Left 70%) */}
        <main className="project-main-content">
          <div className="project-header">
            <h1>{currentProject.title}</h1>
            <p className="project-category">{currentProject.category}</p>
            <p className="project-description">{currentProject.description}</p>
          </div>

          {/* Interactive Demo */}
          <div className="project-demo-container">
            <div className="demo-placeholder">
              <p>Tesseract Interactive</p>
              <TesseractCanvas />
              <div className="demo-controls">
                <span>← Move to see the magic →</span>
              </div>
            </div>
          </div>

          {/* Source Code Section */}
          <section className="source-code-section">
            <h2>Implementation Details</h2>
            <div className="tech-stack">
              {currentProject.techStack.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            <a
              href={currentProject.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="source-code-button"
            >
              View Full Source Code
            </a>
          </section>
        </main>

        {/* Project Navigation (Right 30%) */}
        <aside className="project-navigation">
          <h3>More Interactive Projects</h3>
          <ul className="project-list">
            {relatedProjects.map((project) => (
              <li key={project.id}>
                <Link to={project.link} className="project-nav-link">
                  <h4>{project.title}</h4>
                  <p>{project.category}</p>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default InteractiveTesseract;
