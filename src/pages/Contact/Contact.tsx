import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section className={styles.contact}>

            <div className={styles.contactBackground}>
                <div className={styles.backgroundGlow}></div>
                <div className={styles.backgroundGlowSecondary}></div>
                <div className={styles.backgroundGrid}></div>
            </div>

            <div className={styles.contactContainer}>

                <header className={styles.contactHeader}>

                    <span className={styles.contactEyebrow}>
                        Contacto
                    </span>

                    <h2 className={styles.contactTitle}>
                        Hagamos realidad
                        <span> tu próxima idea</span>
                    </h2>

                    <p className={styles.contactDescription}>
                        ¿Tienes un proyecto en mente, una idea que quieres
                        desarrollar o simplemente quieres conversar sobre
                        tecnología? Estoy abierta a nuevos desafíos.
                    </p>

                </header>

                <div className={styles.contactContent}>

                    {/* =========================
                        INFORMACIÓN
                    ========================= */}

                    <div className={styles.contactInfo}>

                        <div className={styles.contactIntro}>

                            <span className={styles.contactNumber}>
                                01 / CONTACT
                            </span>

                            <h3>
                                Construyamos algo
                                <span> interesante.</span>
                            </h3>

                            <p>
                                Me interesa participar en proyectos donde pueda
                                aportar desde el desarrollo de software, Full
                                Stack, inteligencia artificial y nuevas
                                tecnologías.
                            </p>

                        </div>

                        <div className={styles.availability}>

                            <span className={styles.availabilityDot}></span>

                            <div>
                                <strong>
                                    Disponible para proyectos
                                </strong>

                                <small>
                                    Freelance · Colaboraciones · Desarrollo
                                </small>
                            </div>

                        </div>

                        <div className={styles.contactLinks}>

                            {/* EMAIL */}

                            <a
                                href="mailto:j.silvavergara95@hotmail.com"
                                className={`${styles.contactItem} ${styles.emailItem}`}
                            >

                                <span className={styles.contactIcon}>

                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M3 5h18v14H3V5z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinejoin="round"
                                        />

                                        <path
                                            d="m3 6 9 7 9-7"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                </span>

                                <span className={styles.contactItemContent}>

                                    <small>
                                        Email
                                    </small>

                                    <strong>
                                        j.silvavergara95@hotmail.com
                                    </strong>

                                </span>

                                <span className={styles.contactArrow}>
                                    ↗
                                </span>

                            </a>

                            {/* GITHUB */}

                            <a
                                href="https://github.com/AlexanderSilvaV"
                                className={`${styles.contactItem} ${styles.githubItem}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >

                                <span className={styles.contactIcon}>

                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M12 .7a11.3 11.3 0 0 0-3.6 22c.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.7 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.4-2.7 5.4-5.3 5.7.4.3.7 1 .7 2v2.9c0 .3.2.7.8.6A11.3 11.3 0 0 0 12 .7Z"
                                        />
                                    </svg>

                                </span>

                                <span className={styles.contactItemContent}>

                                    <small>
                                        GitHub
                                    </small>

                                    <strong>
                                        AlexanderSilvaV
                                    </strong>

                                </span>

                                <span className={styles.contactArrow}>
                                    ↗
                                </span>

                            </a>

                            {/* LINKEDIN */}

                            <a
                                href="https://www.linkedin.com/in/alexsilva1997/"
                                className={`${styles.contactItem} ${styles.linkedinItem}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >

                                <span className={styles.contactIcon}>

                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v11.5H3.3V9Zm6.2 0h3.6v1.6h.1c.5-.9 1.7-2 3.6-2 3.8 0 4.5 2.5 4.5 5.8v6.1h-3.8v-5.4c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9v5.5H9.5V9Z"
                                        />
                                    </svg>

                                </span>

                                <span className={styles.contactItemContent}>

                                    <small>
                                        LinkedIn
                                    </small>

                                    <strong>
                                        alexsilva1997
                                    </strong>

                                </span>

                                <span className={styles.contactArrow}>
                                    ↗
                                </span>

                            </a>

                        </div>

                    </div>

                    {/* =========================
                        FORMULARIO
                    ========================= */}

                    <div className={styles.contactFormWrapper}>

                        <div className={styles.formHeader}>

                            <div>

                                <span className={styles.formEyebrow}>
                                    ¿Tienes un proyecto?
                                </span>

                                <h3>
                                    Cuéntame sobre él
                                </h3>

                            </div>

                            <span className={styles.formCode}>
                                {'<contact />'}
                            </span>

                        </div>

                        <form className={styles.contactForm}>

                            <div className={styles.formRow}>

                                <div className={styles.formGroup}>

                                    <label htmlFor="contact-name">
                                        Nombre
                                    </label>

                                    <input
                                        className={styles.formInput}
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        placeholder="Tu nombre"
                                        required
                                    />

                                </div>

                                <div className={styles.formGroup}>

                                    <label htmlFor="contact-email">
                                        Email
                                    </label>

                                    <input
                                        className={styles.formInput}
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        placeholder="tu@email.com"
                                        required
                                    />

                                </div>

                            </div>

                            <div className={styles.formGroup}>

                                <label htmlFor="contact-subject">
                                    Asunto
                                </label>

                                <input
                                    className={styles.formInput}
                                    id="contact-subject"
                                    name="subject"
                                    type="text"
                                    placeholder="¿En qué podemos trabajar?"
                                />

                            </div>

                            <div className={styles.formGroup}>

                                <label htmlFor="contact-message">
                                    Mensaje
                                </label>

                                <textarea
                                    className={styles.formTextarea}
                                    id="contact-message"
                                    name="message"
                                    rows={6}
                                    placeholder="Cuéntame sobre tu proyecto, idea o desafío..."
                                    required
                                />

                            </div>

                            <button
                                type="submit"
                                className={styles.contactButton}
                            >

                                <span>
                                    Enviar mensaje
                                </span>

                                <span className={styles.buttonArrow}>
                                    →
                                </span>

                            </button>

                        </form>

                        <div className={styles.formFooter}>

                            <span>
                                Responderé lo antes posible.
                            </span>

                            <span className={styles.formStatus}>
                                <span>●</span> Online
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}