import Image from "next/image";
import React from "react";
import styles from "../styles/Featured.module.css";
function Featured() {
  const [index, setIndex] = React.useState(0);
  const assets = ["/Poppins.png", "/kop5.png", "/kop6.png"];

  const handleArrow = (direction) => {
    if (direction === "left") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "right") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        onClick={() => handleArrow("left")}
        style={{
          left: "0px",
          zIndex: "145634",
        }}
      >
        <i
          class="fa-solid fa-chevron-left"
          style={{
            fontSize: "3rem",
            color: "white",
            zIndex: "145634",
          }}
        ></i>
      </div>

      <div
        className={styles.wrapper}
        style={{
          transform: `translateX(${index * -100}vw)`,
        }}
      >
        {assets.map((asset, index) => (
          <div className={styles.imgContainer}>
            <Image
              style={{
                borderRadius: "5rem 5rem 0 0",
              }}
             
              objectFit="cover"
              height={900}
              width={1800}
              src={asset}
              key={index}
            />
          </div>
        ))}
      </div>

      <div
        className={styles.arrowContainer}
        onClick={() => handleArrow("right")}
        style={{
          right: "0px",
        }}
      >
        <i
          style={{
            fontSize: "3rem",
            color: "white",
          }}
          class="fa-solid fa-chevron-right"
        ></i>
      </div>
    </div>
  );
}

export default Featured;
