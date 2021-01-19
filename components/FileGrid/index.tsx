
import styles from './style.module.css';
import { File } from './FileItem/types';
import FileItem from './FileItem';
interface Props {
    files: Array<File>
}

export default function FileGrid({ files }: Props) {
    return (
        <div className={styles.fileGrid}>
            {files.map(file => (
                <FileItem {...file} onClick={ } />
            ))}
        </div>
    )
}