import styles from './Skills.module.css';

export default function Skills() {
    const skills = [
        {
            title: 'Lenguajes',
            icon: '</>',
            technologies: [
                'C#',
                'Python',
                'JavaScript',
                'TypeScript',
                'SQL'
            ]
        },
        {
            title: 'Frontend',
            icon: '◈',
            technologies: [
                'React',
                'Angular',
                'Next.js',
                'TypeScript',
                'HTML5',
                'CSS3'
            ]
        },
        {
            title: 'Backend',
            icon: '{}',
            technologies: [
                '.NET 8',
                'ASP.NET Core',
                'FastAPI',
                'Python',
                'REST API'
            ]
        },
        {
            title: 'Inteligencia Artificial',
            icon: '✦',
            technologies: [
                'PyTorch',
                'TensorFlow',
                'Scikit-learn',
                'Machine Learning',
                'Computer Vision',
                'Deep Learning'
            ]
        },
        {
            title: 'Datos & Bases de Datos',
            icon: '◉',
            technologies: [
                'PostgreSQL',
                'MySQL',
                'SQL',
                'Diseño de BD',
                'Data Science'
            ]
        },
        {
            title: 'DevOps & Cloud',
            icon: '☁',
            technologies: [
                'Git',
                'GitHub',
                'Docker',
                'Azure',
                'Linux'
            ]
        },
        {
            title: 'Ciberseguridad',
            icon: '⌁',
            technologies: [
                'Kali Linux',
                'Ethical Hacking',
                'Análisis de vulnerabilidades',
                'Pruebas de seguridad',
                'Auditoría de sistemas'
            ]
        }
    ];

    return (
        <section className={styles.skills}>

            <div className={styles.skillsBackground}>
                <div className={styles.skillsGridBackground}></div>
                <div className={styles.skillsOrb}></div>
                <div className={styles.skillsOrbSecondary}></div>
            </div>

            <div className={styles.skillsContainer}>

                <header className={styles.skillsHeader}>

                    <span className={styles.skillsEyebrow}>
                        &lt; tech-stack /&gt;
                    </span>

                    <h2 className={styles.skillsTitle}>
                        Skills & <span>Stack</span>
                    </h2>

                    <p className={styles.skillsDescription}>
                        Tecnologías, frameworks y herramientas que utilizo
                        para desarrollar software, soluciones Full Stack,
                        inteligencia artificial y sistemas tecnológicos.
                    </p>

                    <div className={styles.skillsLine}>
                        <span></span>
                    </div>

                </header>

                <div className={styles.skillsGrid}>

                    {skills.map((skill, index) => (
                        <article
                            className={styles.skillCard}
                            key={skill.title}
                            style={{
                                '--card-index': index
                            } as React.CSSProperties}
                        >

                            <div className={styles.cardGlow}></div>

                            <div className={styles.skillCardHeader}>

                                <div className={styles.skillIcon}>
                                    {skill.icon}
                                </div>

                                <div className={styles.skillHeading}>
                                    <span className={styles.skillNumber}>
                                        0{index + 1}
                                    </span>

                                    <h3 className={styles.skillTitle}>
                                        {skill.title}
                                    </h3>
                                </div>

                            </div>

                            <div className={styles.skillList}>

                                {skill.technologies.map((technology) => (
                                    <span
                                        className={styles.skillTag}
                                        key={technology}
                                    >
                                        {technology}
                                    </span>
                                ))}

                            </div>

                            <div className={styles.cardBottomLine}>
                                <span></span>
                            </div>

                        </article>
                    ))}

                </div>

                <div className={styles.skillsFooter}>

                    <span className={styles.statusDot}></span>

                    <span>
                        Always learning · Always building
                    </span>

                </div>

            </div>

        </section>
    );
}