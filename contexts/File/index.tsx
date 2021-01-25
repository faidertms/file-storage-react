import React, { useState, createContext, useEffect } from "react";
import { File } from "../../components/FileGrid/FileItem/types";
import * as api from "../../services/fileApi";
interface IFileContext {
    loading: boolean,
    isUploadButtonVisible: boolean,
    isDeleteButtonVisible: boolean,
    isRenameButtonVisible: boolean,
    isDownloadButtonVisible: boolean,
    selected: number,
    selectedFile?: File,
    files: Array<File>,
    setSelected: (id: number) => void,
    setLoading: (loading: boolean) => void,
    uploadFile: (files: FileList) => Promise<void>,
    updateFile: (originalname: string) => Promise<void>,
    deleteFile: () => Promise<void>,
    downloadFile: () => void,
};

interface ProviderProps {
    children: JSX.Element
};

export const FileContext = createContext<IFileContext>({
    setSelected: () => { },
    setLoading: () => { },
    uploadFile: async () => { },
    updateFile: async () => { },
    deleteFile: async () => { },
    downloadFile: () => { },
    loading: false,
    isUploadButtonVisible: true,
    isDeleteButtonVisible: false,
    isRenameButtonVisible: false,
    isDownloadButtonVisible: false,
    selected: 0, // is False
    selectedFile: undefined,
    files: []
});

export const FileContextProvider = ({ children }: ProviderProps): JSX.Element => {
    const [files, setFiles] = useState<Array<File>>([]);
    const [selected, setSelected] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    const uploadFile = async (files: FileList): Promise<void> => {
        try {
            setLoading(true);
            const response = await api.storeFile(files);
            setFiles((prevState) => [...prevState, ...response.data.values]);
        } catch (error) {
            //TODO - Type and Error handle
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    const updateFile = async (originalname: string): Promise<void> => {
        if (selected)
            try {
                setLoading(true);
                const response = await api.updateFile(selected, originalname);
                const updatedFiles = files.map(element => element.id === selected ? response.data.values : element);
                setFiles(updatedFiles);
            } catch (error) {
                //TODO - Type and Error handle
                console.log(error)
            } finally {
                setLoading(false);
            }
    }

    const deleteFile = async (): Promise<void> => {
        if (selected)
            try {
                setLoading(true);
                await api.deleteFile(selected);
                const fileIndex = files.findIndex(element => { console.log([element.id, selected]); return element.id === selected });
                const updatedFiles = files.slice();
                updatedFiles.splice(fileIndex, 1);
                setFiles(updatedFiles);
                setSelected(0);
            } catch (error) {
                //TODO - Type and Error handle
                console.log(error)
            } finally {
                setLoading(false);
            }
    }

    const downloadFile = () => {
        if (selected)
            api.downloadFile(selected);
    }

    useEffect(() => {
        const initFiles = async (): Promise<void> => {
            try {
                setLoading(true);
                const response = await api.getFiles();
                setFiles(response.data.values);
            } catch (error) {
                //TODO - Type and Error handle
                console.log(error)
            } finally {
                setLoading(false);
            }
        }
        initFiles();
    }, []);

    const isUploadButtonVisible = true;
    const isDownloadButtonVisible = selected ? true : false;
    const isDeleteButtonVisible = selected ? true : false;
    const isRenameButtonVisible = selected ? true : false;

    return (
        <FileContext.Provider value={{
            files,
            selected,
            loading,
            isUploadButtonVisible,
            isRenameButtonVisible,
            isDeleteButtonVisible,
            isDownloadButtonVisible,
            setSelected,
            setLoading,
            uploadFile,
            updateFile,
            deleteFile,
            downloadFile
        }}>
            {children}
        </FileContext.Provider>
    );
};
