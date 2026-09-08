import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import cv from '../../assets/Documents/Curriculum-JavierSilva.pdf';
import styles from './Hero.module.css';

export default function Hero() {

    /* =========================================
       ESPECIALIDADES
    ========================================= */

    const specialties = [
        'Full Stack',
        'Inteligencia Artificial',
        'Videojuegos',
        'Software',
        'Computer Vision',
        'Machine Learning',
    ];


    /* =========================================
       PERFILES DE LA TARJETA DE CÓDIGO
    ========================================= */

    const codeProfiles = [
        {
            role: 'Full Stack Developer',
            focus: 'Software & Web',
            stack: 'React + .NET',
            mindset: 'Always Learning',
        },
        {
            role: 'AI Developer',
            focus: 'Artificial Intelligence',
            stack: 'Python + PyTorch',
            mindset: 'Research & Build',
        },
        {
            role: 'Computer Vision',
            focus: 'Medical Imaging',
            stack: 'Python + U-Net',
            mindset: 'Solve Problems',
        },
        {
            role: 'Software Developer',
            focus: 'Backend & APIs',
            stack: 'C# + FastAPI',
            mindset: 'Build Better',
        },
        {
            role: 'Game Developer',
            focus: 'Game Development',
            stack: 'Unreal + C++',
            mindset: 'Create & Experiment',
        },
    ];


    /* =========================================
       ESTADO DEL TEXTO PRINCIPAL
    ========================================= */

    const [currentText, setCurrentText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);


    /* =========================================
       ESTADO DE LA TARJETA DE CÓDIGO
    ========================================= */

    const [codeProfileIndex, setCodeProfileIndex] = useState(0);
    const [codeChanging, setCodeChanging] = useState(false);


    /* =========================================
       EFECTO TYPEWRITER
    ========================================= */

    useEffect(() => {

        const word = specialties[wordIndex];
        const speed = isDeleting ? 55 : 100;

        const timer = setTimeout(() => {

            if (!isDeleting) {

                setCurrentText(
                    word.substring(
                        0,
                        currentText.length + 1
                    )
                );

                if (
                    currentText.length + 1 ===
                    word.length
                ) {

                    setTimeout(() => {
                        setIsDeleting(true);
                    }, 1300);

                }

            } else {

                setCurrentText(
                    word.substring(
                        0,
                        currentText.length - 1
                    )
                );

                if (currentText.length === 0) {

                    setIsDeleting(false);

                    setWordIndex(
                        (prev) =>
                            (prev + 1) %
                            specialties.length
                    );
                }
            }

        }, speed);

        return () => clearTimeout(timer);

    }, [
        currentText,
        wordIndex,
        isDeleting,
    ]);


    /* =========================================
       ANIMACIÓN TARJETA DE CÓDIGO
    ========================================= */

    useEffect(() => {

        let changeTimeout: ReturnType<
            typeof setTimeout
        >;

        const interval = setInterval(() => {

            setCodeChanging(true);

            changeTimeout = setTimeout(() => {

                setCodeProfileIndex(
                    (prev) =>
                        (prev + 1) %
                        codeProfiles.length
                );

                setCodeChanging(false);

            }, 350);

        }, 4000);

        return () => {

            clearInterval(interval);

            clearTimeout(changeTimeout);

        };

    }, []);


    const currentProfile =
        codeProfiles[codeProfileIndex];


    /* =========================================
       RENDER
    ========================================= */

    return (
        <section className={styles.hero}>

            {/* =================================
                BACKGROUND
            ================================= */}

            <div className={styles.heroBackground}>

                <div
                    className={styles.heroOrb}
                />

                <div
                    className={
                        styles.heroOrbSecondary
                    }
                />

                <div
                    className={styles.heroGrid}
                />

            </div>


            {/* =================================
                CONTENIDO PRINCIPAL
            ================================= */}

            <div className={styles.heroContainer}>

                {/* =================================
                    INFORMACIÓN
                ================================= */}

                <div className={styles.heroContent}>

                    <span
                        className={
                            styles.heroEyebrow
                        }
                    >
                        Ingeniera Civil Informática ·
                        Developer
                    </span>


                    <h1
                        className={
                            styles.heroTitle
                        }
                    >
                        Hola, soy <span>Alex</span>
                    </h1>


                    {/* =================================
                        ESPECIALIDAD ANIMADA
                    ================================= */}

                    <div
                        className={
                            styles.heroRole
                        }
                    >

                        <span
                            className={
                                styles.heroRolePrefix
                            }
                        >
                            Desarrolladora
                        </span>

                        <span
                            className={
                                styles.heroRoleAnimated
                            }
                        >
                            {currentText}

                            <span
                                className={
                                    styles.heroCursor
                                }
                            />

                        </span>

                    </div>


                    {/* =================================
                        DESCRIPCIÓN
                    ================================= */}

                    <p
                        className={
                            styles.heroDescription
                        }
                    >
                        Soy desarrolladora de software
                        Freelance Full Stack, curiosa por
                        naturaleza y siempre buscando el
                        próximo desafío. Me gusta investigar,
                        experimentar y aprender de cada
                        proyecto, ya sea creando soluciones
                        para salud, explorando inteligencia
                        artificial, desarrollando videojuegos
                        o adentrándome en un área
                        completamente nueva.
                    </p>

                    <p
                        className={
                            styles.heroDescription
                        }
                    >
                        No creo en limitarse a una sola
                        especialidad; cada desafío tiene su
                        propia historia. Mi objetivo es
                        disfrutar el proceso, superar cada
                        nivel y convertir nuevas ideas en
                        algo real.
                    </p>


                    {/* =================================
                        BOTONES
                    ================================= */}

                    <div
                        className={
                            styles.heroActions
                        }
                    >

                        {/* PROYECTOS */}

                        <Link
                            to="/proyectos"
                            className={`
                                ${styles.heroButton}
                                ${styles.heroButtonPrimary}
                            `}
                        >
                            Ver proyectos
                        </Link>


                        {/* CONTACTO */}

                        <Link
                            to="/contacto"
                            className={`
                                ${styles.heroButton}
                                ${styles.heroButtonSecondary}
                            `}
                        >
                            Contactarme
                        </Link>


                        {/* CV */}

                        <a
                            href={cv}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                                ${styles.heroButton}
                                ${styles.heroButtonCV}
                            `}
                        >

                            <span>
                                Ver CV
                            </span>

                            <span
                                className={
                                    styles.heroButtonArrow
                                }
                            >
                                ↗
                            </span>

                        </a>

                    </div>


                    {/* =================================
                        TECNOLOGÍAS
                    ================================= */}

                    <div
                        className={
                            styles.heroTech
                        }
                    >

                        <span>React</span>
                        <span>Angular</span>
                        <span>TypeScript</span>
                        <span>.NET</span>
                        <span>Python</span>
                        <span>AI / ML</span>

                    </div>

                </div>


                {/* =================================
                    VISUAL / CODE CARD
                ================================= */}

                <div
                    className={
                        styles.heroVisual
                    }
                >

                    <div
                        className={
                            styles.heroGlow
                        }
                    />


                    <div
                        className={
                            styles.codeCard
                        }
                    >

                        {/* HEADER */}

                        <div
                            className={
                                styles.codeHeader
                            }
                        >

                            <span />
                            <span />
                            <span />

                        </div>


                        {/* CÓDIGO */}

                        <div
                            className={`
                                ${styles.codeContent}
                                ${
                                    codeChanging
                                        ? styles.codeChanging
                                        : ''
                                }
                            `}
                        >

                            <p
                                className={
                                    styles.codeLine
                                }
                            >

                                <span
                                    className={
                                        styles.codePurple
                                    }
                                >
                                    const
                                </span>{' '}

                                developer = {'{'}

                            </p>


                            <p
                                className={
                                    styles.codeLine
                                }
                            >

                                <span
                                    className={
                                        styles.codeProperty
                                    }
                                >
                                    name:
                                </span>{' '}

                                <span
                                    className={
                                        styles.codePink
                                    }
                                >
                                    "Alex"
                                </span>,

                            </p>


                            <p
                                className={
                                    styles.codeLine
                                }
                            >

                                <span
                                    className={
                                        styles.codeProperty
                                    }
                                >
                                    role:
                                </span>{' '}

                                <span
                                    className={
                                        styles.codePink
                                    }
                                >
                                    "{currentProfile.role}"
                                </span>,

                            </p>


                            <p
                                className={
                                    styles.codeLine
                                }
                            >

                                <span
                                    className={
                                        styles.codeProperty
                                    }
                                >
                                    focus:
                                </span>{' '}

                                <span
                                    className={
                                        styles.codePink
                                    }
                                >
                                    "{currentProfile.focus}"
                                </span>,

                            </p>


                            <p
                                className={
                                    styles.codeLine
                                }
                            >

                                <span
                                    className={
                                        styles.codeProperty
                                    }
                                >
                                    stack:
                                </span>{' '}

                                <span
                                    className={
                                        styles.codePink
                                    }
                                >
                                    "{currentProfile.stack}"
                                </span>,

                            </p>


                            <p
                                className={
                                    styles.codeLine
                                }
                            >

                                <span
                                    className={
                                        styles.codeProperty
                                    }
                                >
                                    mindset:
                                </span>{' '}

                                <span
                                    className={
                                        styles.codePink
                                    }
                                >
                                    "{currentProfile.mindset}"
                                </span>

                            </p>


                            <p
                                className={
                                    styles.codeLine
                                }
                            >
                                {'};'}
                            </p>


                            <span
                                className={
                                    styles.codeCursor
                                }
                            >
                                _
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}