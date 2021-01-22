import styles from './style.module.css';
import { useContext, useRef } from 'react';
import { HiUpload, HiOutlineTrash, HiDownload } from 'react-icons/hi';
import { FileContext } from '../../contexts/File';

export default function ActionBar(): JSX.Element {
    const fileRef = useRef<HTMLInputElement>(null);
    const { downloadFile, uploadFile, deleteFile } = useContext(FileContext);
    const onChangeInputFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files)
            uploadFile(event.target.files)
    }

    return (
        <div className={styles.actionBar}>
            <div className={styles.uploadButton}>
                <input type="file" name="file" ref={fileRef} onChange={onChangeInputFile} />
                <button name="upload-button" value="upload" onClick={() => fileRef.current?.click()}>
                    <HiUpload /> <span>Upload </span>
                </button>
            </div>

            <div className={styles.downloadButton}>
                <button name="download-button" value="download" onClick={downloadFile}>
                    <HiDownload /> <span>Download </span>
                </button>
            </div>

            <div className={styles.removeButton}>
                <button name="remove-button" value="remove" onClick={deleteFile}>
                    <HiOutlineTrash /> <span>Remove </span>
                </button>
            </div>

        </div >
    );
}