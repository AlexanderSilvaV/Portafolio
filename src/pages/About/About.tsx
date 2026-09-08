import styles from './About.module.css';

export default function About() {
    return (
        <section className={styles.about}>

            <div className={styles.aboutContainer}>

                <div className={styles.aboutHeader}>

                    <span className={styles.aboutEyebrow}>
                        Sobre mí
                    </span>

                    <h2 className={styles.aboutTitle}>
                        Desarrollo de software con
                        <span> pasión por aprender</span>
                    </h2>

                </div>

                <div className={styles.aboutContent}>

                    <div className={styles.aboutText}>

                        <p>
                            Soy <strong>Ingeniera Civil Informática titulada de la
                            Universidad Andrés Bello y desarrolladora de software
                            Freelance Full Stack</strong>, dedicada a la creación de
                            soluciones tecnológicas para proyectos de salud y también
                            para diferentes áreas y necesidades.
                        </p>

                        <p>
                            Mi experiencia abarca el desarrollo de aplicaciones,
                            sistemas web, inteligencia artificial, análisis de datos y
                            construcción de soluciones tanto en frontend como en backend.
                        </p>

                        <p>
                            No considero que exista un área que deba quedar fuera.
                            Para mí, <strong>cada proyecto merece la misma meticulosidad,
                            compromiso y dedicación</strong>, independientemente de su
                            temática o complejidad.
                        </p>

                        <p>
                            Disfruto enfrentar nuevos desafíos, aprender tecnologías y
                            adquirir conocimientos constantemente. Cada proyecto
                            representa una oportunidad para
                            <strong> aprender algo nuevo, mejorar mis habilidades y crear
                            soluciones cada vez mejores.</strong>
                        </p>

                    </div>

                    <div className={styles.aboutStats}>

                        <div className={styles.aboutCard}>
                            <span className={styles.aboutNumber}>
                                Full
                            </span>

                            <span className={styles.aboutLabel}>
                                Stack Developer
                            </span>
                        </div>

                        <div className={styles.aboutCard}>
                            <span className={styles.aboutNumber}>
                                AI
                            </span>

                            <span className={styles.aboutLabel}>
                                Inteligencia Artificial
                            </span>
                        </div>

                        <div className={styles.aboutCard}>
                            <span className={styles.aboutNumber}>
                                ∞
                            </span>

                            <span className={styles.aboutLabel}>
                                Aprendizaje continuo
                            </span>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}