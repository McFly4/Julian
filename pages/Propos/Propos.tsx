import React from "react";
import styles from "./propos.module.scss";
import MaltDarker from "../../components/common/MaltDarker/MaltDarker";
import Image from "next/image";
import Link from "next/link";

export default function Propos() {
    return (
        <div className={styles.propos}>
            <div className={styles.propos__header}>
                <div className={styles.propos__header__text}>
                    <h3>
                        Bonjour <span>je m&apos;appelle Julian</span>
                    </h3>
                    <h2>Professionnel</h2>
                    <h1>UI/UX Designer</h1>
                    <p>
                        Passionné par le Design et le graphisme, j&apos;apporte
                        mes connaissances au service de votre entreprise pour
                        vous aider à construire votre identité graphique, animer
                        des ateliers pour établir vos parcours utilisateur ou
                        encore, améliorer l&apos;accessibilité de votre site.
                    </p>
                    <MaltDarker />
                </div>
                <div className={styles.propos__header__img}>
                    <Image
                        src="/propos/julian.png"
                        width={450}
                        height={600}
                        alt="image"
                        className={styles.julian}
                    />
                    <div className={styles.patch}>
                        <p>Best Skills on</p>
                        <Image
                            src="/propos/figma.svg"
                            width={38}
                            height={57}
                            alt="image"
                        />
                        <Image
                            src="/propos/ai.svg"
                            width={60}
                            height={57}
                            alt="image"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.propos__content}>
                <div className={styles.propos__content__left}>
                    <h2>Services</h2>
                    <h1>Une large gamme de services numériques</h1>
                    <div className={styles.forms}>
                        <Image
                            src="/home/third/carre.svg"
                            width={94}
                            height={94}
                            alt="UX"
                            className={styles.carre}
                        />
                        <Image
                            src="/home/second/triangle.svg"
                            width={65}
                            height={65}
                            alt="UX"
                            className={styles.triangle}
                        />
                    </div>
                </div>
                <div className={styles.propos__content__right}>
                    <div className={styles.carousel}>
                        <div className={styles.carousel__item}>
                            <Image
                                src="/propos/violet.svg"
                                width={132}
                                height={132}
                                alt="image"
                            />
                            <h2>UX/UI Design</h2>
                            <p>
                                Je vous accompagne du début de la concéption
                                jusqu&apos;à la phase final de votre produit.
                                Cela se traduit par l’utilisation de l’Ux
                                méthode mais aussi la mise en réalisation de la
                                partie Ui
                            </p>
                            <Link href="/Services/UxUi">
                                <h3>En savoir plus &gt;</h3>
                            </Link>
                        </div>
                        <div className={styles.carousel__item}>
                            <Image
                                src="/propos/yellow.svg"
                                width={132}
                                height={132}
                                alt="image"
                            />
                            <h2>Identité Visuelle</h2>
                            <p>
                                L’identité visuelle de votre entreprise est
                                primordiale. En effet, cette représentation
                                graphique de votre marque vous permettra d’être
                                immédiatement reconnu, intelligible et de
                                développer votre notoriété dans le temps.
                            </p>
                            <Link href="/Services/IdVisuelle">
                                <h3>En savoir plus &gt;</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
