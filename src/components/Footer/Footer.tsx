import { Link } from 'react-router-dom';

import logo from '../../assets/Images/logo.png';
import styles from './Footer.module.css';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>

                {/* Línea superior */}
                <div className={styles.footerTopLine}>
                    <span></span>
                </div>

                {/* Contenido principal */}
                <div className={styles.footerMain}>

                    {/* Marca */}
                    <div className={styles.footerBrand}>

                        <Link
                            to="/"
                            className={styles.brand}
                        >
                            <img
                                src={logo}
                                alt="Alex Developer"
                                className={styles.brandLogo}
                            />

                            <span className={styles.brandText}>
                                Alex
                                <span>Developer</span>
                            </span>
                        </Link>

                        <p className={styles.brandDescription}>
                            Desarrolladora de Software ·
                            Freelance Full Stack
                        </p>

                        <p className={styles.brandQuote}>
                            Construyendo ideas, aprendiendo tecnologías
                            y creando soluciones.
                        </p>

                    </div>

                    {/* Navegación */}
                    <div className={styles.footerSection}>

                        <span className={styles.sectionTitle}>
                            Navegación
                        </span>

                        <nav className={styles.footerNav}>

                            <Link to="/">
                                Inicio
                            </Link>

                            <Link to="/sobre-mi">
                                Sobre mí
                            </Link>

                            <Link to="/habilidades">
                                Skills
                            </Link>

                            <Link to="/experiencia">
                                Experiencia
                            </Link>

                            <Link to="/proyectos">
                                Proyectos
                            </Link>

                            <Link to="/certificaciones">
                                Certificaciones
                            </Link>

                            <Link to="/contacto">
                                Contacto
                            </Link>

                        </nav>

                    </div>

                    {/* Contacto */}
                    <div className={styles.footerSection}>

                        <span className={styles.sectionTitle}>
                            Conecta conmigo
                        </span>

                        <div className={styles.socialLinks}>

                            <a
                                href="mailto:j.silvavergara95@hotmail.com"
                                className={styles.socialLink}
                            >
                                <span>Email</span>

                                <span className={styles.arrow}>
                                    ↗
                                </span>
                            </a>

                            <a
                                href="https://github.com/AlexanderSilvaV"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                <span>GitHub</span>

                                <span className={styles.arrow}>
                                    ↗
                                </span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/alexsilva1997/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                <span>LinkedIn</span>

                                <span className={styles.arrow}>
                                    ↗
                                </span>
                            </a>

                        </div>

                    </div>

                </div>

                {/* Separador */}
                <div className={styles.footerDivider}></div>

                {/* Bottom */}
                <div className={styles.footerBottom}>

                    <span>
                        © {year} Alex Developer
                    </span>

                    <span className={styles.footerStatus}>
                        <span className={styles.statusDot}></span>
                        Disponible para nuevos proyectos
                    </span>

                    <span className={styles.footerTech}>
                        React · TypeScript · Full Stack
                    </span>

                </div>

            </div>
        </footer>
    );
}