import ContactForm from "./components/ContactForm";

const skillRows = [
  { title: "Core Java Universe", subtitle: "LANGUAGES & FUNDAMENTALS", items: ["Java", "Core Java", "OOP", "Collections Framework", "Exception Handling", "Stream API"] },
  { title: "Backend Engineering", subtitle: "FRAMEWORKS & ARCHITECTURE", items: ["Spring Boot", "Spring MVC", "REST APIs", "Microservices", "Layered Architecture", "Request Validation"] },
  { title: "Data Layer", subtitle: "PERSISTENCE & DATABASES", items: ["Hibernate", "Spring Data JPA", "JDBC", "SQL", "MySQL", "MongoDB"] },
  { title: "Distributed Systems", subtitle: "MESSAGING & CACHING", items: ["Apache Kafka", "Redis", "Asynchronous Processing"] },
  { title: "Developer Toolkit", subtitle: "TESTING, CLOUD & TOOLS", items: ["JUnit", "Mockito", "Postman", "Swagger / OpenAPI", "Git", "Maven", "Docker", "AWS S3 / RDS / Lambda"] },
];

const projects = [
  {
    number: "01",
    title: "Panasonic",
    subtitle: "PRODUCT CATALOG & ORDER FULFILLMENT",
    description: "An e-commerce backend platform supporting product discovery, catalog retrieval, inventory data, order creation, order processing and fulfillment-status tracking through REST APIs.",
    tags: ["Java", "Spring Boot", "REST APIs", "Hibernate / JPA", "SQL", "Kafka", "Redis"],
    modules: ["Product Catalog", "Product Search", "Order Management", "Inventory Management", "Order Fulfillment"],
    tone: "red",
    stamp: "FEATURED PROJECT",
  },
  {
    number: "02",
    title: "FabHotels",
    subtitle: "HOTEL BOOKING MANAGEMENT",
    description: "A hotel-booking backend platform for property information, room details, availability-related data and reservation workflows, with service-layer validations and database operations.",
    tags: ["Java", "Spring Boot", "REST APIs", "SQL", "Hibernate / JPA", "Postman"],
    modules: ["Hotel Information", "Room Management", "Room Availability", "Booking Management", "Reservation Status"],
    tone: "blue",
    stamp: "PROJECT EXPERIENCE",
  },
];

const experience = [
  {
    role: "Software Engineer",
    company: "TapQwik Software Private Limited",
    period: "JAN 2024 – PRESENT",
    description: "Developing and maintaining Java backend components for product catalog, order fulfillment and hotel-booking workflows.",
    details: ["REST API development and request validation", "Service-layer business logic and persistence", "Debugging, SQL review and API regression testing", "Redis caching and Kafka-based asynchronous processing where used"],
  },
  {
    role: "Software Engineer Trainee",
    company: "TapQwik Software Private Limited",
    period: "JUL 2023 – DEC 2023",
    description: "Built a foundation in Java application modules, business workflows and layered architecture while supporting senior developers.",
    details: ["REST API and service-layer support", "SQL queries and data retrieval", "Postman API testing and debugging", "Git, Maven and code-review feedback"],
  },
];

function Rail({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="rail"><div className="rail-heading"><h2>{title}</h2><span>EXPLORE <b>›</b></span></div><div className="rail-track">{children}</div></section>;
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#home"><span className="brand-word">KARAN<span>.</span></span><small>PORTFOLIO</small></a>
        <nav aria-label="Main navigation">
          <a href="#home" className="active">Home</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#education">Education</a>
        </nav>
        <a className="nav-contact" href="#contact">Let&apos;s connect <span>↗</span></a>
      </header>

      <section className="feature-hero" id="home">
        <div className="hero-backdrop" />
        <div className="hero-content">
          <div className="feature-label"><span className="red-line" /> FEATURED PROFILE <span className="muted-dot">•</span> JAVA BACKEND DEVELOPER</div>
          <h1>KARAN<br/><span>KANDU</span></h1>
          <div className="hero-subline"><span className="match">98% PROFILE MATCH</span><span>3.5+ YEARS EXPERIENCE</span><span>INDIA</span></div>
          <p className="hero-description">Building the systems behind digital experiences. Java Backend Developer focused on Spring Boot, REST APIs, data-driven applications and reliable service workflows.</p>
          <div className="hero-buttons">
            <a className="play-button" href="#projects"><span>▶</span> Explore projects</a>
            <a className="info-button" href="/Karan_Kandu_Resume.pdf" target="_blank" rel="noreferrer"><span>↓</span> View resume</a>
          </div>
          <div className="hero-bottom-note">A SOFTWARE ENGINEERING STORY <span>SCROLL TO DISCOVER ↓</span></div>
        </div>
        <div className="hero-side-code" aria-hidden="true"><span>01 / BACKEND</span><pre>{`@RestController\n@RequestMapping("/api")\npublic class Backend {\n  // Build. Improve. Repeat.\n}`}</pre><i>JAVA · SPRING · APIs</i></div>
        <div className="hero-vignette" />
      </section>

      <div className="content-wrap">
        <Rail title="The developer profile">
          <article className="profile-tile tile-wide"><span className="tile-index">01 / ABOUT</span><div className="tile-icon">KK</div><h3>Backend<br/>Developer</h3><p>3.5+ years turning requirements into maintainable backend components.</p><a href="#about">Discover profile ↗</a></article>
          <article className="profile-tile tile-green"><span className="tile-index">02 / APPROACH</span><div className="tile-symbol">⌘</div><h3>Clean<br/>Architecture</h3><p>Layered design, readable code and separation of concerns.</p><a href="#about">My approach ↗</a></article>
          <article className="profile-tile tile-purple"><span className="tile-index">03 / FOCUS</span><div className="tile-symbol">↗</div><h3>Reliable<br/>Systems</h3><p>API validation, data persistence, debugging and testing.</p><a href="#skills">Explore skills ↗</a></article>
          <article className="profile-tile tile-blue"><span className="tile-index">04 / COLLABORATION</span><div className="tile-symbol">◎</div><h3>Team<br/>Delivery</h3><p>Working with developers, QA and project stakeholders.</p><a href="#experience">See experience ↗</a></article>
        </Rail>

        <section className="about-strip" id="about">
          <div><span className="section-kicker">THE STORY SO FAR</span><h2>Not just writing code.<br/><em>Building what works.</em></h2></div>
          <p>I&apos;m a Java Backend Developer with 3.5+ years of experience at TapQwik Software Private Limited. My work spans e-commerce product catalog and order-fulfillment workflows, as well as hotel-booking applications. I work with Java, Spring Boot, Hibernate, Spring Data JPA and SQL, with a focus on business logic, data access, request validation, exception handling and debugging. I&apos;m also familiar with Redis caching and Kafka-based asynchronous processing.</p>
        </section>

        <Rail title="Projects worth watching">
          {projects.map((project) => (
            <article className={`project-poster ${project.tone}`} key={project.number}>
              <div className="poster-top"><span>KK ORIGINALS</span><span>{project.number} / 02</span></div>
              <div className="poster-art"><div className="poster-orbit"/><div className="poster-glyph">{project.tone === "red" ? "P" : "F"}</div><div className="poster-stamp">{project.stamp}</div></div>
              <div className="poster-copy"><span>{project.subtitle}</span><h3>{project.title}</h3><p>{project.description}</p><div className="poster-tags">{project.tags.map(tag => <i key={tag}>{tag}</i>)}</div></div>
              <div className="poster-modules"><b>MODULES</b>{project.modules.join("  ·  ")}</div>
            </article>
          ))}
        </Rail>

        <section className="experience-section" id="experience">
          <div className="rail-heading"><h2>Career timeline</h2><span>2 CHAPTERS <b>›</b></span></div>
          <div className="career-list">{experience.map((job, index) => (
            <article className="career-card" key={job.role}><div className="career-number">0{index + 1}</div><div className="career-main"><span className="career-period">{job.period}</span><h3>{job.role}</h3><h4>{job.company}</h4><p>{job.description}</p><div className="career-tags">{job.details.map(detail => <span key={detail}>{detail}</span>)}</div></div><div className="career-symbol">{index === 0 ? "✳" : "↗"}</div></article>
          ))}</div>
        </section>

        <Rail title="Skills & technologies">
          {skillRows.map((row, index) => (
            <article className="skill-poster" key={row.title}><div className="skill-poster-number">0{index + 1}</div><span>{row.subtitle}</span><h3>{row.title}</h3><div className="skill-poster-rule"/><div className="skill-poster-tags">{row.items.map(item => <i key={item}>{item}</i>)}</div></article>
          ))}
        </Rail>

        <section className="education-strip" id="education"><div className="education-mark">✳</div><div><span className="section-kicker">THE FOUNDATION</span><h2>B.Tech – Computer Science and Engineering</h2><p>Institute of Technology and Management, Gorakhpur</p></div><span className="education-side">EDUCATION / 01</span></section>

        <section className="contact-section" id="contact">
          <div className="contact-intro"><span className="section-kicker">NEXT UP: YOUR MESSAGE</span><h2>Let&apos;s make<br/><em>something happen.</em></h2><p>Have a Java Backend Developer opportunity or want to discuss an engineering challenge? Send me a message.</p><a href="mailto:karankabir2002@gmail.com">karankabir2002@gmail.com ↗</a><span className="contact-phone">+91 74838 03269</span><a className="linkedin" href="https://linkedin.com/in/karan-91076b228" target="_blank" rel="noreferrer">LinkedIn profile ↗</a></div>
          <ContactForm />
        </section>
      </div>

      <footer className="footer"><a className="brand" href="#home"><span className="brand-word">KARAN<span>.</span></span></a><p>© {new Date().getFullYear()} Karan Kandu · Java Backend Developer</p><a href="#home">BACK TO TOP ↑</a></footer>
    </main>
  );
}
