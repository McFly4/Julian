import React, { useState } from "react";
import Image from "next/image";
import styles from "./bloc.module.scss";

export default function Bloc(prop: any) {
    const [isHovering, setIsHovering] = useState(false);
    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);

    return (
        <div
            className={styles.bloc__content}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {isHovering ? (
                <Image
                    src={prop.src_hover}
                    alt="mail"
                    width={300}
                    height={200}
                />
            ) : (
                <Image src={prop.src} alt="mail" width={300} height={200} />
            )}
            <h2>{prop.bloc_title}</h2>
            <p>{prop.bloc_txt}</p>
        </div>
    );
}
