import React from "react";
import Slider from "react-slick";

import styles from "./carousel.module.scss";
import Image from "next/image";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    prevArrow: <PrevArrow />,
    nextArrow: <PrevArrow />,
};

function PrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            style={{
                background: "red",
                display: "block",
                width: "50px",
                height: "50px",
            }}
            className={styles.carousel__Arrows}
        >
            {/* <KeyboardArrowLeftIcon /> */}
        </div>
    );
}

export default function Carousel() {
    return (
        <div className={styles.carousel}>
            <h2>Etude de cas</h2>
            <Slider {...settings}>
                <div className={styles.carousel__item}>
                    <Image
                        src="/services/carousel/avis.png"
                        width={720}
                        height={720}
                        alt="Avis"
                    />
                    <div className={styles.carousel__item__inner}>
                        <h2>UX/UI DESIGN</h2>
                        <h3>
                            Création d’un site vitrine pour gestionnaire d’avis
                            Google
                        </h3>
                        <h4>
                            J’ai accompagné cette Startup dans leur création
                            digitale. Ma mission principale étant la création
                            d’un site vitrine permettant de filtrer des avis
                            Google que les clients laissent suivant la
                            préstation reçu !
                        </h4>
                        <p>
                            <strong>C</strong>lient Startup : Merci
                        </p>
                        <p>
                            <strong>S</strong>ecteur d&apos;activité :
                            Satisfaction
                        </p>
                        <p>
                            <strong>D</strong>omaine d&apos;experties : Logo /
                            Identité graphique / Site Web
                        </p>
                    </div>
                </div>
                <div className={styles.carousel__item}>
                    <Image
                        src="/services/carousel/skin.png"
                        width={720}
                        height={720}
                        alt="Avis"
                    />
                    <div className={styles.carousel__item__inner}>
                        <h2>UX/UI DESIGN</h2>
                        <h3>
                            Création d’un site E-commerce pour la marque 4.5.6
                            SKIN
                        </h3>
                        <h4>
                            J’ai accompagné cette marque de cosmetique dans leur
                            nouvel transition digitale. Ma mission principale
                            étant la refonte de leurs site E-commerce afin de
                            mettre plus en avant leurs produits et de fructifier
                            leurs ventes
                        </h4>
                        <p>
                            <strong>C</strong>lient : 4.5.6 SKIN
                        </p>
                        <p>
                            <strong>S</strong>ecteur d&apos;activité :
                            Cosmétique
                        </p>
                        <p>
                            <strong>D</strong>omaine d&apos;experties : Identité
                            graphique / Site Web
                        </p>
                    </div>
                </div>
                <div className={styles.carousel__item}>
                    <Image
                        src="/services/carousel/travel.png"
                        width={720}
                        height={720}
                        alt="Avis"
                    />
                    <div className={styles.carousel__item__inner}>
                        <h2>UX/UI DESIGN</h2>
                        <h3>
                            Création d’une application mobile de voyage et
                            découverte
                        </h3>
                        <h4>
                            J’ai accompagné ce prestataire dans la création de
                            son application mobile. Ma mission principale étant
                            la réalisation de son application mobile permettant
                            de voyager et de découvrir de nouveau pays.
                        </h4>
                        <p>
                            <strong>C</strong>lient : Destination
                        </p>
                        <p>
                            <strong>S</strong>ecteur d&apos;activité : Voyage
                        </p>
                        <p>
                            <strong>D</strong>omaine d&apos;experties : Logo /
                            Identité graphique / Site Web
                        </p>
                    </div>
                </div>
                <div className={styles.carousel__item}>
                    <Image
                        src="/services/carousel/restauration.png"
                        width={720}
                        height={720}
                        alt="Avis"
                    />
                    <div className={styles.carousel__item__inner}>
                        <h2>UX/UI DESIGN</h2>
                        <h3>
                            Création d’une application mobile de restauration
                            pour étudiant
                        </h3>
                        <h4>
                            J’ai accompagné cette entreprise dans la création de
                            leurs applications mobile pour aider les étudiants a
                            dejeuner le midi . Ma mission principale étant la
                            réalisation de son application mobile permettant de
                            découvrir les restaurants disponibles aux alentours
                        </h4>
                        <p>
                            <strong>C</strong>lient : Kadow
                        </p>
                        <p>
                            <strong>S</strong>ecteur d&apos;activité : Etudiant
                            / Restauration
                        </p>
                        <p>
                            <strong>D</strong>omaine d&apos;experties : Logo /
                            Identité graphique / Site Web
                        </p>
                    </div>
                </div>
                <div className={styles.carousel__item}>
                    <Image
                        src="/services/carousel/car_rental.png"
                        width={720}
                        height={720}
                        alt="Avis"
                    />
                    <div className={styles.carousel__item__inner}>
                        <h2>UX/UI DESIGN</h2>
                        <h3>Création d’un site web pour location de voiture</h3>
                        <h4>
                            J’ai accompagné cette Startup dans la création de
                            leurs site internet. Ma mission principale étant la
                            création d’un site web permettant la locations de
                            voiture avec une mise en place de forfait
                        </h4>
                        <p>
                            <strong>C</strong>lient : Rental car
                        </p>
                        <p>
                            <strong>S</strong>ecteur d&apos;activité : Voiture /
                            Location
                        </p>
                        <p>
                            <strong>D</strong>omaine d&apos;experties : Logo /
                            Identité graphique / Site Web
                        </p>
                    </div>
                </div>
            </Slider>
        </div>
    );
}
