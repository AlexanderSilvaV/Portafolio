import styles from './Header.module.css';
import logo from '../../assets/Images/logo.png';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>

                <div className={styles.logoContainer}>
                    <img
                        src={logo}
                        alt="Universidad Andrés Bello"
                    />
                </div>

                <div className={styles.info}>
                    <h1>Alex Elizabeth Silva Vergara</h1>

                    <p>
                        Ingeniera Civil Informática
                    </p>

                    <span>
                        Universidad Andrés Bello
                    </span>
                </div>

            </div>
        </header>
    );
}