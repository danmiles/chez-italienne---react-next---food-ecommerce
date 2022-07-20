import styles from "../styles/Add.module.css";

const AddButton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={styles.mainAddButton}>
      Ajouter un produit
    </div>
  );
};

export default AddButton;
