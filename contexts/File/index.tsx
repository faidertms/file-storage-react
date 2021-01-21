
import React, { useState, createContext, useEffect } from "react";
import { File } from "../../components/FileGrid/FileItem/types";
import { getFiles } from "../../services/fileApi";

interface IFileContext {
    loading: boolean,
    selected?: number,
    files: Array<File>
    setSelected: (id: number) => void,
    setLoading: (loading: boolean) => void
};

interface ProviderProps {
    children: JSX.Element
};

export const FileContext = createContext<IFileContext>({
    setSelected: (id) => { },
    setLoading: (loading) => { },
    loading: false,
    selected: undefined,
    files: []
});

export const FileContextProvider = ({ children }: ProviderProps): JSX.Element => {
    const [files, setFiles] = useState<Array<File>>([]);
    const [selected, setSelected] = useState<number>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const initFiles = async () => {
            try {
                setLoading(true);
                const response = await getFiles();
                setFiles(response.data.values ?? []);
            } catch (error) {
                //TODO - Type and Error handle
                console.log(error)
            } finally {
                setLoading(false);
            }
        }
        initFiles();
    }, []);

    return (
        <FileContext.Provider value={{ files, selected, loading, setSelected, setLoading }}>
            {children}
        </FileContext.Provider>
    );
};
