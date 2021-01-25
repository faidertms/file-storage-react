
import styles from './style.module.css';
import FileItem from './FileItem';
import { FileContext } from '../../contexts/File';
import { useContext } from 'react';
import Loader from '../Loader';

export default function FileGrid(): JSX.Element {

    const { files, selected, setSelected, loading } = useContext(FileContext);

    const resetSelected = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.currentTarget === event.target) {
            setSelected(0);
        }
    }

    return (
        <div className={styles.fileGrid} onClick={resetSelected}>
            <Loader isLoading={loading} />
            {files.map(file => (
                <FileItem {...file} setSelected={setSelected} selected={selected === file.id} key={file.id} />
            ))}
        </div>
    )
}