import { Link } from "react-router-dom";
import Container from "./Container";

import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Igaratour" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to='/'>Home</Link>
          </li>
          <li className={styles.item}>
            <Link to='/pontos-turisticos'>Pontos Turísticos</Link>
          </li>
          <li className={styles.item}>
            <Link to='/sobre'>Sobre</Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Navbar;