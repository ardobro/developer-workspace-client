import { Link } from "react-router-dom";
import styles from "./signup.module.scss";

const Login: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Registration</h1>
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
              autoComplete="off"
              required
            />
          </label>
          <label className={styles.control}>
            <span className={styles.label}>Email</span>
            <input
              className={styles.input}
              type="email"
              name="email"
              autoComplete="off"
              required
            />
          </label>
          <button className={styles.button} type="submit">
            Sign up
          </button>
        </form>
        <p className={styles.signup}>
          back to{" "}
          <Link className={styles.link} to="/signin">
            sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
