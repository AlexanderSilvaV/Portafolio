import Hero from '../../components/Hero/Hero';

import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';

import styles from './Home.module.css';

export default function Home() {
    return (
        <div className={styles.home}>

            <section className={styles.homeSection}>
                <Hero />
            </section>

            <section className={styles.homeSection}>
                <About />
            </section>

            <section className={styles.homeSection}>
                <Skills />
            </section>

            <section className={styles.homeSection}>
                <Projects />
            </section>

        </div>
    );
}