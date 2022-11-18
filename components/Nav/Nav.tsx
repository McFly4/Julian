import styles from "./nav.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Nav() {
    const [isHovering, setIsHovering] = useState(false);
    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);

    const [buttonHovering, setButtonHovering] = useState(false);
    const onButtonEnter = () => setButtonHovering(true);
    const onButtonLeave = () => setButtonHovering(false);
    return (
        <div className={styles.nav}>
            <div className={styles.nav__logo}>
                <Image
                    src="/logos/mainLogo.png"
                    alt="logo"
                    width={45}
                    height={45}
                />
            </div>
            <div className={styles.nav__links}>
                <ul>
                    <li>Projets</li>
                    <li>Services</li>
                    <li>À propos</li>
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
                    style={{ cursor: "pointer" }}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {isHovering ? (
                        <Image
                            src="/logos/malt_hover.png"
                            alt="mail"
                            width={30}
                            height={30}
                        />
                    ) : (
                        <Image
                            src="/logos/malt.png"
                            alt="mail"
                            width={30}
                            height={30}
                        />
                    )}
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
