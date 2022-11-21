import React from "react";
import styles from "./malt.module.scss";
import Image from "next/image";

export default function Malt() {
    return (
        <button className={styles.malt__btn}>
            <Image src="/logos/svgmalt.svg" alt="mail" width={30} height={30} />
            Malt
        </button>
    );
}
