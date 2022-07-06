import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
    const [index, setIndex] = useState(0);
    const images = [
        "/img/featured/featured-1.png",
        "/img/featured/featured-2.png",
        "/img/featured/featured-3.png",        
        "/img/featured/featured-4.png",        
        "/img/featured/featured-5.png",        
    ];

    const handleArrow = (direction) => {
        if (direction === "left") {
            setIndex(index !== 0 ? index - 1 : 4)
        }
        if (direction === "right") {
            setIndex(index !== 4 ? index + 1 : 0)
        }
    }

    return (
        <div className={styles.container}>

            <div className={styles.arrowContainer} style={{ left: 10 }} onClick={() => handleArrow("left")}>
                <Image src="/img/featured/arrow-left.svg" alt="" layout="fill" objectFit="contain" />
            </div>

            <div className={styles.wrapper} style={{ transform: `translateX(${-100 * index}vw)` }}>
                {images.map((img, i) => (
                    <div className={styles.imgContainer} key={i}>
                        <Image src={img} alt="" layout="fill" objectFit="contain" />
                    </div>
                ))}
            </div>

            <div className={styles.arrowContainer} style={{ right: 10 }} onClick={() => handleArrow("right")}>
                <Image src="/img/featured/arrow-right.svg" layout="fill" alt="" objectFit="contain" />
            </div>

        </div>
    );
};

export default Featured;
