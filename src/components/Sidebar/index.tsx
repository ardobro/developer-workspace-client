import Menu from "./Menu";
import Workspace from "./Workspace";
import styles from "./sidebar.module.scss";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <Workspace />
      <Menu />
    </div>
  );
};

export default Sidebar;
