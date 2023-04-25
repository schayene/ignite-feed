import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from "./Sidebar.module.css";

import coverImage from "../assets/cover.png";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={coverImage} />

      <div className={styles.profile}>
        <Avatar src="https://xesque.rocketseat.dev/users/avatar/profile-5c717960-17b5-44dd-91c4-3c16e950bc6a-1655937751065.jpg" />

        <strong>Schayene S. Royer</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
