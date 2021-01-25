import React, { useContext } from "react";
import Modal from "..";
import { FileContext } from "../../../contexts/File";
import { getFileExtension } from "../../../helpers/functions";
import styles from "./style.module.css";

interface Props {
    setIsOpen: () => void,
    isOpen: boolean,
}

export default function RenameModal({ setIsOpen, isOpen }: Props): JSX.Element {
    const {
        files,
        selected,
        updateFile,
    } = useContext(FileContext);

    const file = files.find(element => element.id === selected);
    const { fileName, fileExtension } = getFileExtension(file?.originalname ?? "");

    const submitFileName = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //@ts-ignore
        await updateFile(event.target.elements.originalname.value);
        setIsOpen();
    }

    return (
        <Modal onClose={setIsOpen} isOpen={isOpen} title={"Renomear"}>
            <form onSubmit={submitFileName}>
                <div className={styles.fileDiv}>
                    <input type="text" defaultValue={fileName} className={styles.inputFileName} name="originalname" />
                    <span className={styles.fileExtension}>
                        {fileExtension}
                    </span>
                </div>
                <div className={styles.submitDiv}>
                    <button className={styles.submitButton} type="submit" >
                        Salvar
                    </button>
                </div>
            </form>
        </Modal>
    );
}
