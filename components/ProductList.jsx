import ProductCard from "./ProductCard"
import styles from "../styles/ProductList.module.css";

const ProductList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Uniquement des produits italiens d'excellence</h1>
            <p className={styles.desc}>
                Nous vendons de la nourriture de la ferme italienne. Nous permettons à nos clients de découvrir la culture italienne et les valeurs familiales à travers nos produits
            </p>
            <div className={styles.wrapper}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    )
}

export default ProductList