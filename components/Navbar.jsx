import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/navbar/phone.svg" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>COMMANDEZ MAINTENANT!</div>
          <div className={styles.text}>07-68-45-22-11</div>
        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Page daccueil</li>
          </Link>

          <li className={styles.logo}>
            <Image src="/img/logo.svg" alt="phone" width="50" height="50" />
            Chez litalienne
          </li>

          <Link href="https://portfolio-denis.com/projects/simplon/chez-italienne/" target="_blank" passHref>
            <li className={styles.listItem}>Notre catalogue</li>
          </Link>
        </ul>
      </div>

      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/navbar/cart.svg" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
