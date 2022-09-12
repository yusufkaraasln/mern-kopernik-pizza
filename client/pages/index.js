import Head from "next/head";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import { useState } from "react";

export default function Home({ pizzas,admin }) {
  const [closed, setClosed] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <title>Kopernik Pizza</title>
        <meta
          name="description"
          content="Kopernik Pizzası Galaksinin En Sıcak Pizzası."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Featured />
      {
        admin && <AddButton setClosed={setClosed}/> 
      }
      <PizzaList pizzas={pizzas} />
      {!closed && <Add setClosed={setClosed} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const cookie = ctx.req?.cookies || "";
  let admin = false;

  if (cookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      admin: admin,
      pizzas: res.data,
    },
  };
};
