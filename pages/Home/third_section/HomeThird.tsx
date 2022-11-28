import React from "react";
import styles from "./homethird.module.scss";
import Image from "next/image";

export default function HomeThird() {
    return (
        <div className={styles.third}>
            <div className={styles.third__header}>
                <h1>Mon fonctionnement</h1>
                <p>
                    Je n&apos;aime pas me précipiter dans les décisions.{" "}
                    <strong>J&apos;examine</strong> attentivement les données
                    analytiques et{" "}
                    <strong>propose un processus de conception adapté</strong> à
                    vos besoins avant d&apos;esquisser des wireframes et de
                    dessiner des <strong>interfaces.</strong>
                </p>
            </div>
            <div className={styles.third__content}>
                <Image
                    src="/home/second/losange.svg"
                    width={71}
                    height={71}
                    alt="UX"
                    className={styles.losange}
                />
                <Image
                    src="/home/second/croix.svg"
                    width={200}
                    height={200}
                    alt="UX"
                    className={styles.croix}
                />
                <div className={styles.third__content__item}>
                    <div className={styles.third__content__item__img}>
                        <Image
                            src="/home/third/1.svg"
                            width={300}
                            height={300}
                            alt="image"
                        />
                    </div>
                    <div className={styles.third__content__item__text}>
                        <h2>
                            Découvrir les besoins de vos clients <br /> et une
                            définition du problème
                        </h2>
                        <p>
                            Je proposerai et structurerai un processus de
                            conception adapté. Je définirai le problème (y
                            compris les critères d&apos;acceptation de sa
                            solution) et préparerai des ateliers pertinents pour
                            découvrir les objectifs de vos clients.
                        </p>
                    </div>
                </div>
                <div className={styles.third__content__item}>
                    <div className={styles.third__content__item__text}>
                        <h2>Phase d&apos;idéation et prototypage</h2>
                        <p>
                            Les sessions d&apos;idéation nous aideront à
                            résoudre le défi de conception . Grâce à
                            l&apos;analyse et à la synthèse, je proposerai des
                            organigrammes, des wireflows, des wireframes et/ou
                            un prototype cliquable à part entière .
                        </p>
                    </div>
                    <div className={styles.third__content__item__img}>
                        <Image
                            src="/home/third/2.svg"
                            width={300}
                            height={300}
                            alt="image"
                        />
                    </div>
                </div>
                <div
                    className={`${styles.third__content__item} ${styles.third__content__itemlast}`}
                >
                    <div className={styles.third__content__item__img}>
                        <Image
                            src="/home/third/1.svg"
                            width={300}
                            height={300}
                            alt="image"
                        />
                    </div>
                    <div className={styles.third__content__item__text}>
                        <h2>
                            <Image
                                src="/home/second/triangle.svg"
                                width={65}
                                height={65}
                                alt="UX"
                                className={styles.triangle}
                            />
                            Tester et peaufinerle produit par les utilisateurs
                        </h2>
                        <p>
                            Enfin, nous nous concentrerons sur les tests
                            utilisateurs . Je vais mener une recherche modérée,
                            l&apos;évaluer ensuite et proposer des changements,
                            qui nous ramèneront à la phase d&apos;idéation. Les
                            meilleurs produits ne quittent jamais ce cycle
                        </p>
                    </div>
                </div>
                <Image
                    src="/home/second/rond.svg"
                    width={75}
                    height={75}
                    alt="UX"
                    className={styles.rond}
                />
                <Image
                    src="/home/second/zigi.svg"
                    width={215}
                    height={90}
                    alt="UX"
                    className={styles.zigi}
                />
                <Image
                    src="/home/third/carre.svg"
                    width={94}
                    height={94}
                    alt="UX"
                    className={styles.carre}
                />
            </div>
            <div className={styles.white}></div>
        </div>
    );
}
