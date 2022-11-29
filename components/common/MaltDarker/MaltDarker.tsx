import React from "react";
import styles from "./maltdarker.module.scss";
import Image from "next/image";

export default function MaltDarker() {
    return (
        <button className={styles.malt__btn}>
            <Image src="/logos/svgmalt.svg" alt="mail" width={30} height={30} />
            Malt
        </button>
    );
}
