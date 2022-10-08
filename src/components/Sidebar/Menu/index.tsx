import CalendarIcon from "assets/icons/calendar.svg";
import DashboardIcon from "assets/icons/dashboard.svg";
import UsersIcon from "assets/icons/users.svg";
import classNames from "classnames";
import styles from "./menu.module.scss";

type Item = {
  key: string;
  label: string;
  link: string;
  active: boolean;
  icon: string;
};

const items: Item[] = [
  {
    key: "1",
    label: "Dashboard",
    link: "dashboard",
    active: true,
    icon: DashboardIcon,
  },
  {
    key: "2",
    label: "Schedule",
    link: "schedule",
    active: false,
    icon: CalendarIcon,
  },
  {
    key: "3",
    label: "Talent Manager",
    link: "talent-manager",
    active: false,
    icon: UsersIcon,
  },
];

const Menu: React.FC = () => {
  const renderItem = ({ active, key, link, icon: Icon, label }: Item) => {
    return (
      <li className={styles.item} key={key}>
        <a
          className={classNames(styles.link, { [styles.active]: active })}
          href={link}
        >
          <div className={styles.icon}>
            <Icon />
          </div>
          {label}
        </a>
      </li>
    );
  };

  return (
    <nav>
      <ul className={styles.list}>{items.map(renderItem)}</ul>
    </nav>
  );
};

export default Menu;
