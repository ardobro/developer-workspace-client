import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import CalendarIcon from "assets/icons/calendar.svg";
import DashboardIcon from "assets/icons/dashboard.svg";
import UsersIcon from "assets/icons/users.svg";
import styles from "./menu.module.scss";
import { useCallback } from "react";

type Item = {
  key: string;
  label: string;
  link: string;
  icon: string;
};

const items: Item[] = [
  {
    key: "1",
    label: "Dashboard",
    link: "/dashboard",
    icon: DashboardIcon,
  },
  {
    key: "2",
    label: "Schedule",
    link: "/schedule",
    icon: CalendarIcon,
  },
  {
    key: "3",
    label: "Talent Manager",
    link: "/talent-manager",
    icon: UsersIcon,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  const renderItem = useCallback(
    ({ key, link, icon: Icon, label }: Item) => {
      const isActive = location.pathname === link;

      return (
        <li className={styles.item} key={key}>
          <Link
            className={classNames(styles.link, { [styles.active]: isActive })}
            to={link}
          >
            <div className={styles.icon}>
              <Icon />
            </div>
            {label}
          </Link>
        </li>
      );
    },
    [location.pathname]
  );

  return (
    <nav>
      <ul className={styles.list}>{items.map(renderItem)}</ul>
    </nav>
  );
};

export default Menu;
