import React from "react";
import styles from "./services.module.scss";
import Image from "next/image";
import { basename } from "path";

export default function Services(service: any) {
    return (
        <div className={styles.services}>
            <div className={styles.services__header}>
                <div className={styles.services__header__top}>
                    <h2>Mon expertise</h2>
                    <h1>{service.title}</h1>
                    <p>{service.title__desc}</p>
                </div>
                <div className={styles.services__header__polygone}>
                    <h1>Une marque forte,</h1>
                    <h2>à votre image</h2>
                </div>
            </div>
            <div className={styles.services__content}>
                <div className={styles.container}>
                    <div className={styles.container__item}>
                        <Image
                            src="/services/Credibilite.svg.svg"
                            width={70}
                            height={70}
                            alt="Credibilite"
                        />

                        <h2>Renforcez votre image de marque</h2>
                        <p>
                            Constituant le premier élément vu par le prospect,
                            l&apos;identité visuelle joue un rôle décisif dans
                            la décision finale du client.
                        </p>
                    </div>
                    <div className={styles.container__item}>
                        <Image
                            src="/services/Concurrence.svg.svg"
                            width={70}
                            height={70}
                            alt="Concurrence"
                        />

                        <h2>Démarquez-vous de la concurrence</h2>
                        <p>
                            Différenciez-vous des autres professionnels et
                            facilitez la mémorisation de votre marque avec un
                            logo unique.
                        </p>
                    </div>
                    <div className={styles.container__item}>
                        <Image
                            src="/services/Valeurs.svg.svg"
                            width={70}
                            height={70}
                            alt="Valeurs"
                        />

                        <h2>Transmettez des valeurs fortes</h2>
                        <p>
                            Le positionnement marketing de votre agence ou
                            réseau est spécifique ? Alors créons une identité de
                            marque qui lui ressemble.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.services__banner}>
                <Image
                    src="/services/astro.svg"
                    width={334}
                    height={300}
                    alt="image"
                    className={styles.astro}
                />
                <Image
                    src="/services/left.svg"
                    width={350}
                    height={450}
                    alt="image"
                    className={styles.left}
                />
                <Image
                    src="/services/right.svg"
                    width={200}
                    height={418}
                    alt="image"
                    className={styles.right}
                />
                <Image
                    src="/home/second/croix.svg"
                    width={100}
                    height={100}
                    alt="UX"
                    className={styles.croix}
                />
                <div className={styles.services__banner__content}>
                    <h2>Les étapes de notre collaboration</h2>
                    <div className={styles.services__banner__content__steps}>
                        <div className={styles.item__banner}>
                            <span>01</span> <br /> Rencontre et identification
                            de vos besoins
                        </div>
                        <div className={styles.item__banner}>
                            <span>02</span>
                            <br />
                            Conseil et mise en place de la stratégie
                        </div>
                        <div className={styles.item__banner}>
                            <span>03</span>
                            <br />
                            Recherches et créations graphiques
                        </div>
                        <div className={styles.item__banner}>
                            <span>04</span>
                            <br />
                            Finalisation et livraison du projet
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.services__yellow}>
                <Image
                    src="/home/second/zigi.svg"
                    width={215}
                    height={90}
                    alt="UX"
                    className={styles.zigi}
                />

                <Image
                    src="/services/astro-guy.svg"
                    width={270}
                    height={380}
                    alt="image"
                    className={styles.astro__guy}
                />
                <div className={styles.container}>
                    <div className={styles.container__card}>
                        <Image
                            src="/propos/violet.svg"
                            width={78}
                            height={78}
                            alt="image"
                        />
                        <h2>
                            UX/UI <br />
                            Design
                        </h2>
                        <button>En savoir plus</button>
                    </div>
                    <div className={styles.container__card}>
                        <Image
                            src="/propos/yellow.svg"
                            width={78}
                            height={78}
                            alt="image"
                        />
                        <h2>
                            Identité <br />
                            visuelle
                        </h2>
                        <button>En savoir plus</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
