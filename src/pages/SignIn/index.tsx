import { Link } from "react-router-dom";
import styles from "./signin.module.scss";

const Login: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Authorization</h1>
        <form className={styles.form}>
          <label className={styles.control}>
            <span className={styles.label}>Username</span>
            <input
              className={styles.input}
              type="text"
              name="username"
              autoComplete="off"
              autoFocus
              required
            />
          </label>
          <label className={styles.control}>
            <span className={styles.label}>Password</span>
            <input
              className={styles.input}
              type="password"
              name="password"
              required
              autoComplete="off"
            />
          </label>
          <button className={styles.button} type="submit">
            Sign in
          </button>
        </form>
        <p className={styles.signup}>
          or{" "}
          <Link className={styles.link} to="/signup">
            sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
