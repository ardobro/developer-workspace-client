import OnlyRockLogo from "assets/images/onlyrock.png";
import VerticalArrowsIcon from "assets/icons/vertical-arrows.svg";
import styles from "./workspace.module.scss";

const Workspace: React.FC = () => {
  return (
    <div className={styles.workspace}>
      <img className={styles.logo} src={OnlyRockLogo} width="32" height="32" />
      <p className={styles.namespace}>Only Rock</p>
      <button className={styles.button}>
        <VerticalArrowsIcon />
      </button>
      <p className={styles.typespace}>Team Workspace</p>
    </div>
  );
};

export default Workspace;
