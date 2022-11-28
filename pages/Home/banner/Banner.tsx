import React from "react";
import styles from "./banner.module.scss";
import Button from "../../../components/common/button/ButtonClassiq";
import Malt from "../../../components/common/Malt/Malt";
import Image from "next/image";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image
                src="/home/banner/astro.svg"
                alt="astro"
                width={375}
                height={358}
                className={styles.astro}
            />
            <Image
                src="/home/banner/redAstro.svg"
                alt="redAstro"
                width={700}
                height={355}
                className={styles.redAstro}
            />

            <div className={styles.banner__header}>
                <h2>Besoin d&apos;une maquette de site internet ?</h2>
                <p>Ou d&apos;autres services pour vous apporter le succès ?</p>
            </div>
            <div className={styles.banner__buttons}>
                <Button text="Contactez moi" />
                <Malt />
            </div>
        </div>
    );
}
