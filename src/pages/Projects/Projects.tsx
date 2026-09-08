import styles from './Projects.module.css';

export default function Projects() {
    const projects = [
        {
            number: '01',
            title: 'Identity Dream AI',
            description:
                'Plataforma de inteligencia artificial aplicada al análisis de imágenes médicas, integrando visión computacional, Machine Learning y desarrollo Full Stack para apoyar procesos de análisis y planificación clínica.',
            technologies: [
                'React',
                'Next.js',
                '.NET',
                'FastAPI',
                'Python',
                'PostgreSQL',
                'NeonDB'
            ],
            type: 'Inteligencia Artificial',
            status: 'En desarrollo'
        },

        {
            number: '02',
            title: 'Identity Evolution AI',
            description:
                'Módulo del ecosistema Identity Dream AI enfocado en el acompañamiento y seguimiento de procesos de transición de género, utilizando inteligencia artificial, análisis de datos y herramientas de seguimiento personalizado.',
            technologies: [
                'React',
                'Next.js',
                '.NET',
                'FastAPI',
                'Python',
                'PostgreSQL',
                'NeonDB'
            ],
            type: 'IA & Salud',
            status: 'En desarrollo'
        },

        {
            number: '03',
            title: 'REGENA',
            description:
                'Plataforma inteligente orientada al ámbito de la medicina capilar y trasplante de cabello. Integra visión computacional y modelos de inteligencia artificial para análisis, evaluación y simulación de resultados.',
            technologies: [
                'React',
                'Vite',
                '.NET',
                'FastAPI',
                'Python',
                'PostgreSQL',
                'NeonDB'
            ],
            type: 'Full Stack & IA',
            status: 'En desarrollo'
        },

        {
            number: '04',
            title: "Manwaco's: Las Aventuras Bizarras",
            description:
                'Videojuego de parodia actualmente en desarrollo, creado con Unreal Engine 5 y acompañado por una plataforma web para perfiles de usuario, gestión de información y funcionalidades relacionadas con el ecosistema del juego.',
            technologies: [
                'Unreal Engine 5',
                'C++',
                '.NET',
                'React',
                'FastAPI',
                'Python',
                'PostgreSQL',
                'NeonDB'
            ],
            type: 'Videojuego & Full Stack',
            status: 'En desarrollo'
        }
    ];

    return (
        <section className={styles.projects}>

            <div className={styles.projectsBackground}>
                <div className={styles.backgroundGlow}></div>
                <div className={styles.backgroundGlowSecondary}></div>
                <div className={styles.backgroundGrid}></div>
            </div>

            <div className={styles.projectsContainer}>

                <header className={styles.projectsHeader}>

                    <span className={styles.projectsEyebrow}>
                        Portfolio
                    </span>

                    <h2 className={styles.projectsTitle}>
                        Proyectos <span>destacados</span>
                    </h2>

                    <p className={styles.projectsDescription}>
                        Una selección de proyectos donde combino desarrollo
                        Full Stack, inteligencia artificial, investigación,
                        Machine Learning y desarrollo de videojuegos.
                    </p>

                </header>

                <div className={styles.projectsGrid}>

                    {projects.map((project) => (
                        <article
                            className={styles.projectCard}
                            key={project.title}
                        >

                            <div className={styles.projectGlow}></div>

                            <div className={styles.projectContent}>

                                <div className={styles.projectTop}>

                                    <span className={styles.projectNumber}>
                                        {project.number}
                                    </span>

                                    <span className={styles.projectStatus}>
                                        <span className={styles.statusDot}></span>
                                        {project.status}
                                    </span>

                                </div>

                                <div className={styles.projectCategory}>
                                    {project.type}
                                </div>

                                <h3 className={styles.projectTitle}>
                                    {project.title}
                                </h3>

                                <p className={styles.projectDescription}>
                                    {project.description}
                                </p>

                                <div className={styles.projectDivider}></div>

                                <div className={styles.projectTechnologies}>

                                    {project.technologies.map((technology) => (
                                        <span key={technology}>
                                            {technology}
                                        </span>
                                    ))}

                                </div>

                                <button
                                    className={styles.projectButton}
                                    type="button"
                                >
                                    <span>Ver proyecto</span>
                                    <span className={styles.projectArrow}>
                                        ↗
                                    </span>
                                </button>

                            </div>

                        </article>
                    ))}

                </div>

            </div>

        </section>
    );
}