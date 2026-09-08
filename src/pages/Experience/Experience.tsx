import styles from './Experience.module.css';

export default function Experience() {
    const experiences = [
        {
            date: 'dic. 2025 — feb. 2026',
            period: '3 meses',
            title: 'Ingeniera de Desarrollo de Software',
            company:
                'Instituto de Tecnología para la Innovación en Salud y Bienestar',
            type: 'Práctica Profesional II · Híbrido',
            description:
                'Participé en el equipo de Investigación y Desarrollo (I+D) apoyando el análisis, desarrollo y validación de soluciones de software relacionadas con arquitectura de software e Infraestructura como Código (IaC). Trabajé con código fuente y scripts Terraform, desarrollando prototipos y herramientas en Python para procesamiento de datos y aplicando técnicas de Inteligencia Artificial como Large Language Models (LLM) y Retrieval-Augmented Generation (RAG) para la generación automatizada de Architecture Decision Records (ADR). También participé en análisis estático, evaluación de calidad de software, métricas y documentación técnica.',
            technologies: [
                'Python',
                'LLM',
                'RAG',
                'Terraform',
                'IaC',
                'Software Architecture',
            ],
        },
        {
            date: 'dic. 2024 — ene. 2025',
            period: '2 meses',
            title: 'Desarrollo Full Stack',
            company: 'Circulo Delta',
            type: 'Práctica Inicial · Remoto',
            description:
                'Participé en el desarrollo y mantenimiento de soluciones digitales, fortaleciendo conocimientos en desarrollo Full Stack. Trabajé con bases de datos relacionales, integración de servicios y funcionalidades dentro de plataformas digitales, contribuyendo a la optimización de procesos y a la mejora de la experiencia de usuario en un entorno colaborativo.',
            technologies: [
                'Full Stack',
                'Bases de Datos',
                'Servicios',
                'Wix',
            ],
        },
        {
            date: 'nov. 2022 — nov. 2024',
            period: '2 años 1 mes',
            title: 'Ayudante de Docencia',
            company: 'Universidad Viña del Mar',
            type: 'Contrato temporal · Remoto',
            description:
                'Me desempeñé como ayudante de docencia bajo contrato, participando en el diseño, implementación y gestión de cuestionarios en línea para asignaturas del área de Matemática. También proporcioné soporte académico y técnico a docentes y estudiantes, apoyando el uso de plataformas digitales, resolución de incidencias y mantenimiento de recursos educativos.',
            technologies: [
                'Soporte Técnico',
                'Plataformas Digitales',
                'Gestión Académica',
                'Trabajo en Equipo',
            ],
        },
    ];

    return (
        <section className={styles.experience}>

            <div className={styles.experienceBackground}>
                <div className={styles.backgroundGlow}></div>
                <div className={styles.backgroundGlowSecondary}></div>
                <div className={styles.backgroundGrid}></div>
            </div>

            <div className={styles.experienceContainer}>

                <header className={styles.experienceHeader}>
                    <span className={styles.experienceEyebrow}>
                        Trayectoria profesional
                    </span>

                    <h2 className={styles.experienceTitle}>
                        Mi <span>experiencia</span>
                    </h2>

                    <p className={styles.experienceIntro}>
                        Una trayectoria construida a través del desarrollo de
                        software, investigación aplicada, aprendizaje continuo
                        y nuevos desafíos tecnológicos.
                    </p>
                </header>

                <div className={styles.timeline}>

                    <div className={styles.timelineLine}></div>

                    {experiences.map((experience, index) => (
                        <article
                            className={styles.experienceItem}
                            key={`${experience.company}-${experience.date}`}
                        >

                            <div className={styles.timelineMarker}>
                                <span></span>
                            </div>

                            <div className={styles.experienceDate}>
                                <span>{experience.date}</span>
                                <small>{experience.period}</small>
                            </div>

                            <div className={styles.experienceCard}>

                                <div className={styles.cardGlow}></div>

                                <div className={styles.cardContent}>

                                    <div className={styles.cardTop}>
                                        <span className={styles.experienceNumber}>
                                            0{index + 1}
                                        </span>

                                        <span className={styles.experienceType}>
                                            {experience.type}
                                        </span>
                                    </div>

                                    <h3>
                                        {experience.title}
                                    </h3>

                                    <h4>
                                        {experience.company}
                                    </h4>

                                    <p>
                                        {experience.description}
                                    </p>

                                    <div className={styles.technologyList}>
                                        {experience.technologies.map(
                                            (technology) => (
                                                <span key={technology}>
                                                    {technology}
                                                </span>
                                            )
                                        )}
                                    </div>

                                </div>

                            </div>

                        </article>
                    ))}

                </div>

            </div>

        </section>
    );
}