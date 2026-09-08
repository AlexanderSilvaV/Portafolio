import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/Images/logo.png';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>

                <Link
                    to="/"
                    className={styles.logo}
                    onClick={closeMenu}
                >
                    <img
                        src={logo}
                        alt="Alex Developer"
                        className={styles.logoImage}
                    />

                    <span className={styles.logoText}>
                        Alex
                        <span>Developer</span>
                    </span>
                </Link>

                <button
                    type="button"
                    className={`${styles.menuButton} ${
                        menuOpen ? styles.active : ''
                    }`}
                    onClick={toggleMenu}
                    aria-label={
                        menuOpen
                            ? 'Cerrar menú'
                            : 'Abrir menú'
                    }
                    aria-expanded={menuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div
                    className={`${styles.navMenu} ${
                        menuOpen ? styles.open : ''
                    }`}
                >
                    <Link
                        to="/"
                        className={styles.navLink}
                        onClick={closeMenu}
                    >
                        Inicio
                    </Link>

                    <Link
                        to="/sobre-mi"
                        className={styles.navLink}
                        onClick={closeMenu}
                    >
                        Sobre mí
                    </Link>

                    <Link
                        to="/habilidades"
                        className={styles.navLink}
                        onClick={closeMenu}
                    >
                        Skills
                    </Link>

                    <Link
                        to="/experiencia"
                        className={styles.navLink}
                        onClick={closeMenu}
                    >
                        Experiencia
                    </Link>

                    <Link
                        to="/proyectos"
                        className={styles.navLink}
                        onClick={closeMenu}
                    >
                        Proyectos
                    </Link>

                    <Link
                        to="/certificaciones"
                        className={styles.navLink}
                        onClick={closeMenu}
                    >
                        Certificaciones
                    </Link>

                    <Link
                        to="/contacto"
                        className={styles.contactButton}
                        onClick={closeMenu}
                    >
                        Contacto
                        <span className={styles.contactArrow}>
                            ↗
                        </span>
                    </Link>
                </div>
            </div>

            <div className={styles.navLine}>
                <span></span>
            </div>
        </nav>
    );
}