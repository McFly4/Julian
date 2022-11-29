import styles from "./nav.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
    const [buttonHovering, setButtonHovering] = useState(false);
    const onButtonEnter = () => setButtonHovering(true);
    const onButtonLeave = () => setButtonHovering(false);
    return (
        <div className={styles.nav}>
            <div className={styles.nav__logo}>
                <Link href="/">
                    <Image
                        src="/logos/main_logo.png"
                        alt="logo"
                        width={45}
                        height={45}
                    />
                </Link>
            </div>
            <div className={styles.nav__links}>
                <ul>
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                    <li>Services</li>
                    <Link href="/propos">
                        <li>À propos</li>
                    </Link>
                    <li>Contact</li>
                </ul>
            </div>
            <div className={styles.nav__icons}>
                <FontAwesomeIcon
                    className={styles.icon}
                    icon={faLinkedin}
                    style={{ width: "30px" }}
                />
                <div
                    className={styles.malt__hover}
                    style={{ cursor: "pointer" }}
                >
                    <Image
                        src="/logos/svgmalt.svg"
                        alt="mail"
                        width={30}
                        height={30}
                    />
                </div>
                <FontAwesomeIcon
                    className={styles.icon}
                    icon={faEnvelope}
                    style={{ width: "30px" }}
                />

                <button
                    onMouseEnter={onButtonEnter}
                    onMouseLeave={onButtonLeave}
                >
                    Me contacter
                    {buttonHovering ? (
                        <Image
                            src="/logos/arrow_hover.png"
                            alt="mail"
                            width={30}
                            height={30}
                        />
                    ) : (
                        <Image
                            src="/logos/arrow.png"
                            alt="mail"
                            width={30}
                            height={30}
                        />
                    )}
                </button>
            </div>
        </div>
    );
}
