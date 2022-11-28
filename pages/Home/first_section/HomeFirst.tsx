import React from "react";
import styles from "./homefirst.module.scss";
import Bloc from "../../../components/common/bloc/Bloc";
import Image from "next/image";

export default function homeFirst() {
    return (
        <>
            <div className={styles.first}>
                <div className={styles.first__text}>
                    <h1>
                        Le processus de conception est la clé du succès
                        <span></span>
                    </h1>
                    <p>
                        Est-ce qu&apos;un joli site web vous suffit ? <br />
                        Optons pour un produit que vos clients seront ravis
                        d&apos;utiliser.
                    </p>
                </div>
                <div className={styles.first__bloc}>
                    <Bloc
                        title="Design"
                        bloc_title="Conception Graphique"
                        bloc_txt="Je vais concevoir un design unifié
                    qui attirera les clients."
                        src="/home/light.svg"
                        src_hover="/home/light_hover.svg"
                    />
                    <Bloc
                        title="Dev Web"
                        bloc_title="Développement Web"
                        bloc_txt="Je vais créer un site Web intuitif
                    adapté à vos objectifs."
                        src="/home/laptop.svg"
                        src_hover="/home/laptop_hover.svg"
                    />
                    <Bloc
                        title="Recherche utilisateur"
                        bloc_title="Recherche utilisateur"
                        bloc_txt="Je recueillerai et évaluerailes commentaires de vos clients."
                        src="/home/robot.svg"
                        src_hover="/home/robot_hover.svg"
                    />
                </div>
            </div>
            <div className={styles.second}>
                <Image
                    src="/home/satellite.svg"
                    width={274}
                    height={660}
                    alt="Satellite"
                    className={styles.satellite}
                />
                <span className={styles.separator}></span>
                <h2>compétences</h2>
                <div className={styles.second__title}>
                    <h1>
                        Mes domaines <span>d&apos;expertise</span>
                    </h1>
                </div>
                <div className={styles.second__bloc}>
                    <div className={styles.second__bloc__content}>
                        <div className={styles.second__bloc__content__header}>
                            <Image
                                src="/home/blue.svg"
                                alt="ux"
                                width={65}
                                height={65}
                            />
                            <h3>UX Research</h3>
                        </div>
                        <div className={styles.second__bloc__content__inner}>
                            <p>
                                <strong>
                                    Vos utilisateurs au coeur de la stratégie.
                                </strong>{" "}
                                Recherche qualitative & quantitative, conception
                                de vos personae et de leur user journeys
                            </p>
                        </div>
                    </div>
                    <div className={styles.second__bloc__content}>
                        <div className={styles.second__bloc__content__header}>
                            <Image
                                src="/home/red.svg"
                                alt="ux"
                                width={65}
                                height={65}
                            />
                            <h3>UX-UI Design</h3>
                        </div>
                        <div className={styles.second__bloc__content__inner}>
                            <p>
                                <strong>
                                    Optimiser votre univers digital pour vos
                                    utilisateurs.
                                </strong>{" "}
                                Diagnostic UX, refonte complète, conception de
                                nouvelles fonctionnalités, wireframes et mockups
                                tous devices.
                            </p>
                        </div>
                    </div>
                    <div className={styles.second__bloc__content}>
                        <div className={styles.second__bloc__content__header}>
                            <Image
                                src="/home/orange.svg"
                                alt="ux"
                                width={65}
                                height={65}
                            />
                            <h3>Brand Identity & Innovation</h3>
                        </div>
                        <div className={styles.second__bloc__content__inner}>
                            <p>
                                <strong>
                                    Développer votre univers de marque et votre
                                    offre.
                                </strong>{" "}
                                Méthodologie du Design Thinking, Brand
                                Personality & Style Tile
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
