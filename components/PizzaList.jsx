import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Uniquement des produits italiens dexcellence</h1>
      <p className={styles.desc}>
        Nous vendons de la nourriture de la ferme italienne. Nous permettons 
        a nos clients de decouvrir la culture italienne et les valeurs familiales a travers nos produits.
      </p>
      <p className={styles.desc}>
        Produits de la ferme italienne cultives avec amour et soin.
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
