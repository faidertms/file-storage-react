
import React, { useState, createContext } from "react";
import { File } from "../../components/FileGrid/FileItem/types";

interface IFileContext {
    loading: boolean,
    selected?: number,
    files: Array<File>
};

interface ProviderProps {
    children: JSX.Element
};

export const FileContext = createContext<IFileContext>({
    loading: false,
    selected: undefined,
    files: []
});

export const FileContextProvider = ({ children }: ProviderProps): JSX.Element => {
    const [files, setFiles] = useState<Array<File>>([]);
    const [selected, setFiles] = useState<number>([]);
    const [loading, setFiles] = useState<boolean>([]);
    return (
        <FileContext.Provider value={{ files, selected, loading }}>
            {children}
        </FileContext.Provider>
    );
};
