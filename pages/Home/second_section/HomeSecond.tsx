import React from "react";
import styles from "./homesecond.module.scss";
import Image from "next/image";
import Bloc2 from "../../../components/common/bloc2/Bloc2";

export default function HomeSecond() {
    return (
        <div className={styles.second}>
            <h1>Qu&apos;est-ce je fais exactement ?</h1>
            <div className={styles.second__bloc}>
                <Bloc2
                    img="/home/second/1.svg"
                    title="Landing Pages"
                    text="Les Landing pages représentent le point final des
                    campagnes publicitaireset également le premier contact de votre
                    site Webavec le client."
                />
                <Bloc2
                    img="/home/second/2.svg"
                    title="HCD Methods"
                    text="Le Human Centered Designest un univers de
                    règles et de méthodes poursimplifier et
                    intensifierl'expérience utilisateur."
                />
                <Bloc2
                    img="/home/second/3.svg"
                    title="User Interfaces"
                    text="L'interface utilisateur de premier ordre
                    peut transportervotre client entre les
                    fonctionnalités souhaitées à la vitesse
                    de la lumière."
                />
                <Bloc2
                    img="/home/second/4.svg"
                    title="Atelier UX"
                    text="Les sessions d'idéation et les évaluations
                    suivantes sont le meilleur moyen dedécouvrir
                    le parcours des utilisateurs à travers
                    lagalaxie de votre produit."
                />
                <Bloc2
                    img="/home/second/5.svg"
                    title="UX Stratégie"
                    text="La stratégie UX est un processus 
                    visant à planifier toutes les étapes préalables 
                    à la conception d'un produit ou d'un service. 
                    C'est pourquoi l'élaboration d'une stratégie utilisateur 
                    doit toujours être développée en amont de la conception elle-même"
                />
                <div className={styles.second__bloc__illu}>
                    <Image
                        src="/home/second/guy.svg"
                        width={350}
                        height={855}
                        alt="UX"
                        className={styles.guy}
                    />

                    <div className={styles.inner}>
                        <Image
                            src="/home/second/losange.svg"
                            width={71}
                            height={71}
                            alt="UX"
                            className={styles.losange}
                        />
                        <Image
                            src="/home/second/triangle.svg"
                            width={65}
                            height={65}
                            alt="UX"
                            className={styles.triangle}
                        />
                        <Image
                            src="/home/second/croix.svg"
                            width={200}
                            height={200}
                            alt="UX"
                            className={styles.croix}
                        />

                        <Image
                            src="/home/second/zigi.svg"
                            width={215}
                            height={90}
                            alt="UX"
                            className={styles.zigi}
                        />

                        <Image
                            src="/home/second/rond.svg"
                            width={75}
                            height={75}
                            alt="UX"
                            className={styles.rond}
                        />

                        <h1>
                            Pour que<span className={styles.carre}></span> votre
                            produit décolle
                            <span className={styles.whitebg}></span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
