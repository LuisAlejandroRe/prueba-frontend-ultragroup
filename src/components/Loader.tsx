import styles from '../styles/Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader_container}>
      <div className={styles.loader}>
        <div className={styles.cube}>
          <div className={`${styles.side} ${styles.front}`}></div>
          <div className={`${styles.side} ${styles.back}`}></div>
          <div className={`${styles.side} ${styles.left}`}></div>
          <div className={`${styles.side} ${styles.right}`}></div>
          <div className={`${styles.side} ${styles.top}`}></div>
          <div className={`${styles.side} ${styles.bottom}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
