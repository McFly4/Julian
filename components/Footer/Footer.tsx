import React from "react";
import styles from "./footer.module.scss";
import Malt from "../common/Malt/Malt";
import Image from "next/image";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <Image
                src="/footer/nuage.svg"
                width={590}
                height={620}
                alt="nuage"
                className={styles.nuage}
            />
            <Image
                src="/footer/guy.svg"
                width={590}
                height={590}
                alt="guy"
                className={styles.guy}
            />

            <div className={styles.footer__content}>
                <h2>ME CONTACTER</h2>
                <h1>Vous avez un projet en tête ? Discutons-en !</h1>
                <Malt />
            </div>
            <div className={styles.footer__inner}>
                <h2>Des solutions créatives pour démarrer votre entreprise</h2>
            </div>
            <div className={styles.footer__footer}>
                <p>Vous pouvez me retrouver ici</p>
                <div className={styles.footer__footer__social}>
                    <Image
                        src="/footer/linkedin.svg"
                        width={32}
                        height={32}
                        alt="linkedin"
                    />
                    <Image
                        src="/footer/instagram.svg"
                        width={32}
                        height={32}
                        alt="instagram"
                        style={{ margin: "0 5px" }}
                    />
                    <Image
                        src="/footer/malt.svg"
                        width={32}
                        height={32}
                        alt="malt"
                    />
                </div>
            </div>
            <Image
                src="/footer/logo.svg"
                width={155}
                height={163}
                alt="logo"
                className={styles.logo}
            />
        </div>
    );
}
