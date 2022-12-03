import Devs from "../layout/Devs";
import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.about_container}>
      <h1>
        Desenvolvedores do <span>projeto</span>
      </h1>
      <Devs />
    </section>
  );
}