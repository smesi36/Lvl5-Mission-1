import styles from './ImgAnalyserButton.module.css';


export default function ImgAnalyserButton({ onAnalyze }) {
  return (
    <button className={styles.analyseBtn} onClick={onAnalyze}>
        Analyse Image
    </button>
  );
}
