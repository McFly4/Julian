import React from "react";
import styles from "./button.module.scss";

export default function ButtonClassiq(prop: any) {
    return <button className={styles.buttonClassiq}>{prop.text}</button>;
}
