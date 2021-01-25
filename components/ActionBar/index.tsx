import styles from './style.module.css';
import { useContext, useRef, useState } from 'react';
import { HiUpload, HiOutlineTrash, HiDownload, HiPencil } from 'react-icons/hi';
import { FileContext } from '../../contexts/File';
import ModalRename from '../Modal/Rename';

export default function ActionBar(): JSX.Element {
    const fileRef = useRef<HTMLInputElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const {
        downloadFile,
        uploadFile,
        deleteFile,
        isDeleteButtonVisible,
        isRenameButtonVisible,
        isUploadButtonVisible,
        isDownloadButtonVisible,
    } = useContext(FileContext);

    const onChangeInputFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files)
            uploadFile(event.target.files)
    }

    return (
        <div className={styles.actionBar}>
            {isUploadButtonVisible && (
                <div className={styles.uploadButton}>
                    <input type="file" name="file" ref={fileRef} onChange={onChangeInputFile} />
                    <button name="upload-button" onClick={() => fileRef.current?.click()}>
                        <HiUpload /> <span>Upload </span>
                    </button>
                </div>
            )}
            {isDownloadButtonVisible && (
                <div className={styles.downloadButton}>
                    <button name="download-button" onClick={downloadFile}>
                        <HiDownload /> <span>Download </span>
                    </button>
                </div>
            )}
            {isDeleteButtonVisible && (
                <div className={styles.removeButton}>
                    <button name="remove-button" onClick={deleteFile}>
                        <HiOutlineTrash /> <span>Remove </span>
                    </button>
                </div>
            )}
            {isRenameButtonVisible && (
                <div className={styles.renameButton}>
                    <button name="rename-button" onClick={() => setIsOpen(true)}>
                        <HiPencil /> <span>Rename </span>
                    </button>
                </div>
            )}
            <ModalRename isOpen={isOpen} setIsOpen={() => setIsOpen(false)} />
        </div >
    );
}