import styles from './Certifications.module.css';

export default function Certifications() {
    const certifications = [
        {
            title: '🔐 Certificación en Seguridad Ofensiva | CyberGames',
            organization: 'Cisco Networking Academy',
            year: '2026',
            type: 'Certificación',
            description:
                'Formación práctica orientada a fundamentos de seguridad ofensiva y ciberseguridad mediante desafíos y escenarios de CyberGames.',
            link: 'https://www.credly.com/badges/5dd27414-e80b-4e2e-8971-6e86ccebf3cb/public_url'
        },
        {
            title: 'Data Scientist Career Guide and Interview Preparation',
            organization: 'IBM',
            year: '2025',
            type: 'Formación',
            description:
                'Formación orientada al desarrollo profesional en Data Science, preparación para procesos de selección y conocimientos asociados al perfil de científico de datos.',
            link: 'https://www.coursera.org/account/accomplishments/verify/YYXQ08XRDC30'
        }
    ];

    return (
        <section className={styles.certifications}>

            <div className={styles.certificationsBackground}>
                <div className={styles.backgroundGlow}></div>
                <div className={styles.backgroundGlowSecondary}></div>
                <div className={styles.backgroundGrid}></div>
            </div>

            <div className={styles.certificationsContainer}>

                <header className={styles.certificationsHeader}>

                    <span className={styles.certificationsEyebrow}>
                        Formación profesional
                    </span>

                    <h2 className={styles.certificationsTitle}>
                        Certificaciones & <span>cursos</span>
                    </h2>

                    <p className={styles.certificationsIntro}>
                        Formación continua orientada a fortalecer mis
                        conocimientos técnicos y ampliar mis capacidades
                        en distintas áreas de la tecnología.
                    </p>

                </header>

                <div className={styles.certificationsGrid}>

                    {certifications.map((certification, index) => (
                        <article
                            className={styles.certificationCard}
                            key={certification.title}
                        >

                            <div className={styles.cardGlow}></div>

                            <div className={styles.certificationContent}>

                                <div className={styles.certificationTop}>

                                    <span className={styles.certificationNumber}>
                                        0{index + 1}
                                    </span>

                                    <span className={styles.certificationYear}>
                                        {certification.year}
                                    </span>

                                </div>

                                <div className={styles.certificationIcon}>
                                    ✓
                                </div>

                                <span className={styles.certificationType}>
                                    {certification.type}
                                </span>

                                <h3>
                                    {certification.title}
                                </h3>

                                <p className={styles.certificationOrganization}>
                                    {certification.organization}
                                </p>

                                <p className={styles.certificationDescription}>
                                    {certification.description}
                                </p>

                                {certification.link && (
                                    <a
                                        href={certification.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.certificationLink}
                                    >
                                        Ver credencial
                                        <span>↗</span>
                                    </a>
                                )}

                            </div>

                        </article>
                    ))}

                </div>

            </div>

        </section>
    );
}