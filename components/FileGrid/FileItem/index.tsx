
import styles from './style.module.css';
import { AiFillFile } from 'react-icons/ai';
import { File } from './types';

interface Props extends File {
    selected: boolean,
    setSelected: (id: number) => void,
}

export default function FileItem({
    setSelected,
    selected,
    originalname,
    updated_at,
    id
}: Props): JSX.Element {
    const onClick = () => setSelected(id);
    return (
        <div className={`${styles.fileItem} ${selected ? styles.fileSelected : ''}`} onClick={onClick}>
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