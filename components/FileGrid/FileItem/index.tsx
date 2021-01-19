
import styles from './style.module.css';
import { AiFillFile } from 'react-icons/Ai';
import { File } from './types';

interface Props extends File {
    onClick: (id: number) => void
}

export default function FileItem({ onClick, originalname, updated_at, id }: Props) {
    return (
        <div className={styles.fileItem} onClick={() => onClick(id)}>
            <div className={styles.filePreview}>
                <AiFillFile />
            </div>
            <div className={styles.fileInfo}>
                <div className={styles.fileName}>
                    <span>
                        {originalname}
                    </span>
                </div>
                <div className={styles.fileDateModify}>
                    <span>
                        Modificado: {updated_at}
                    </span>
                </div>
            </div>
        </div>

    )
}