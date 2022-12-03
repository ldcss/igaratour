import styles from './Home.module.css'
import igarassu from '../../assets/Igarassu.jpg';

import LinkButton from '../layout/LinkButton'

export default function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Igaratour!</span>
      </h1>
      <p>Para guardar os seus lugares favoritos em igarassu, cadastre-se ou faça login agora mesmo!</p>
      <LinkButton to="/login" text="Cadastro ou Login" />
      <img src={igarassu} alt="Igarassu" />
    </section>
  );
};