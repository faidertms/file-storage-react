
import styles from './style.module.css';
import { AiFillFile } from 'react-icons/Ai';

export default function FileGrid() {
    return (
        <div className={styles.fileGrid}>
            <div className={styles.fileItem}>
                <div className={styles.filePreview}>
                    <AiFillFile />
                </div>
                <div className={styles.fileInfo}>
                    <div className={styles.fileName}>
                        <span>
                            File.txt
                    </span>
                    </div>
                    <div className={styles.fileDateModify}>
                        <span>
                            Modificado: 20/05/2020 08:00:00
                    </span>
                    </div>
                </div>
            </div>

        </div>
    )
}