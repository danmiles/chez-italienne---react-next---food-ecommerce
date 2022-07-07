import styles from "../styles/Navbar.module.css"
import Image from "next/image"

const Navbar = () => {
    return (
        <div className={styles.container}>

            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/navbar/phone.svg" alt="phone" width="32" height="32" />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>COMMANDEZ MAINTENANT</div>
                    <div className={styles.text}>07-68-45-22-11</div>
                </div>
            </div>

            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Page d'accueil</li>
                    <li className={styles.listItem}>Des produits</li>
                    <li className={styles.listItem}>Menu</li>
                    
                    <li className={styles.logo}>
                        <Image src="/img/logo.svg" alt="phone" width="50" height="50" />
                        Chez l’italienne
                    </li>
                    
                    <li className={styles.listItem}>Événement</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>                    
                </ul>
            </div>

            <div className={styles.item}>
                <div className={styles.cart}>
                    <Image src="/img/navbar/cart.svg" alt="phone" width="32" height="32" />
                    <div className={styles.counter}>2</div>
                </div>
                
            </div>

        </div>
    )
}

export default Navbar