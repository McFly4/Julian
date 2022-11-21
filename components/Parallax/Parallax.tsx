import React, { useState } from "react";
import styles from "./parallax.module.scss";
import Image from "next/image";
import Malt from "../common/Malt/Malt";
import ButtonClassiq from "../common/button/ButtonClassiq";

export default function Parallax() {
    return (
        <div className={styles.parallax}>
            <div className={styles.parallax__content}>
                <div className={styles.parallax__content__txt}>
                    <div className={styles.title}>
                        <h1>Julian</h1>
                    </div>
                    <div className={styles.subtitle}>
                        <p>
                            UI/UX <strong>Designer</strong> • UX{" "}
                            <strong>Researcher</strong>
                        </p>
                        <p>Découvrez les secrets d'un produit à votre succès</p>
                    </div>
                    <div className={styles.button}>
                        <ButtonClassiq text="Continue" />
                        <Malt />
                    </div>
                </div>
            </div>
        </div>
    );
}
