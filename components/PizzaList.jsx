import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Uniquement des produits italiens d'excellence</h1>
      <p className={styles.desc}>
        Nous vendons de la nourriture de la ferme italienne. Nous permettons à nos clients de découvrir la culture italienne et les valeurs familiales à travers nos produits.
      </p>
      <p className={styles.desc}>
        Produits de la ferme italienne cultivés avec amour et soin.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
