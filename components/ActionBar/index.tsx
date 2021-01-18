import styles from './style.module.css';
import { HiUpload, HiOutlineTrash, HiDownload } from 'react-icons/hi';

export default function ActionBar(): JSX.Element {
    return (
        <div className={styles.actionBar}>
            <div className={styles.uploadButton}>
                <input type="file" name="file" />
                <button name="upload-button" value="upload" onClick={(event: React.MouseEvent<HTMLButtonElement>) => console.log(event)}>
                    <HiUpload /> <span>Upload </span>
                </button>
            </div>

            <div className={styles.downloadButton}>
                <button name="download-button" value="download" onClick={(event: React.MouseEvent<HTMLButtonElement>) => console.log(event)}>
                    <HiDownload /> <span>Download </span>
                </button>
            </div>

            <div className={styles.removeButton}>
                <button name="remove-button" value="remove" onClick={(event: React.MouseEvent<HTMLButtonElement>) => console.log(event)}>
                    <HiOutlineTrash /> <span>Remove </span>
                </button>
            </div>

        </div>
    );
}