import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/footer/casino-villeneuve.jpg" objectFit="cover" layout="fill" alt="" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        Pour nous, ce nest pas seulement un travail, cest notre famille.
                    </h2>
                </div>
                <div className={styles.card}>
                    <h2 className={styles.title}>Trouvez notre magasin</h2>
                    <p className={styles.text}>
                        Casino Geant,
                        <br /> Villeneuve-Loubet, 06270
                        <br /> (602) 867-1010
                    </p>
                </div>
                <div className={styles.card}>
                    <h2 className={styles.title}>Horaires d.ouvertures</h2>
                    <p className={styles.text}>
                        DU LUNDI AU VENDREDI
                        <br /> 9:00 – 22:00
                    </p>
                    <p className={styles.text}>
                        SAMEDI - DIMANCHE
                        <br /> 12:00 – 24:00
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
