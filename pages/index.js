import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home({ pizzaList, admin }) {
    const [close, setClose] = useState(true);
    return (
        <div className={styles.container}>
            <Head>
                <title>Pizza Restaurant in Newyork</title>
                <meta name="description" content="Chez l’italienne - Il s'agit d'un stand spécialisé dans les produits alimentaires italiens de qualité exceptionnelle. Nous sommes situés à Villeneuve Loubet." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Featured />

            <PizzaList pizzaList={pizzaList} />
        </div>
    );
}

export const getServerSideProps = async (ctx) => {
    const myCookie = ctx.req?.cookies || "";
    let admin = false;

    if (myCookie.token === process.env.TOKEN) {
        admin = true;
    }
    // Deploy
    const res = await axios.get("https://chez-italienne-react-next.vercel.app/api/products");
    // Localhost
    // const res = await axios.get("http://localhost:3000/api/products");
    return {
        props: {
            pizzaList: res.data,
            admin,
        },
    };
};
