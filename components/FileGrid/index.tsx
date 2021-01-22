
import styles from './style.module.css';
import FileItem from './FileItem';
import { FileContext } from '../../contexts/File';
import { useContext } from 'react';


export default function FileGrid() {

    const { files, selected, setSelected } = useContext(FileContext);
    return (
        <div className={styles.fileGrid}>
            {files.map(file => (
                <FileItem {...file} onClick={() => setSelected(file.id)} selected={selected === file.id} key={file.id} />
            ))}
        </div>
    )
}