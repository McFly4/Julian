import React from "react";
import styles from "./bloc2.module.scss";
import Image from "next/image";

export default function (bloc2: any) {
    return (
        <div className={styles.bloc2}>
            <Image src={bloc2.img} width={60} height={45} alt="UX" />
            <h2>{bloc2.title}</h2>
            <p>{bloc2.text}</p>
        </div>
    );
}
