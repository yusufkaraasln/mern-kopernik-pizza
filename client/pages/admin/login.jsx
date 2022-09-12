import React from "react";
import styles from "../../styles/Login.module.css";
import { useRouter } from "next/router";
import axios from "axios";
function Login({admin}) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const router = useRouter();

     


  const handleClick = async () => {
    try {
      await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      router.push("/admin");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
 


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Paneli</h1>
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Şifre"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <p className={styles.error}>Kullanıcı adı veya şifre hatalı</p>
        )}
        <button className={styles.button} onClick={handleClick}>
          Giriş Yap
        </button>
      </div>
    </div>
  );
}



export default Login;
