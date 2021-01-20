
import React, { useState, createContext } from "react";
import { File } from "../../components/FileGrid/FileItem/types";

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
    const [files,] = useState<Array<File>>( [
        {
          "id": 3,
          "originalname": "teste3.pdf",
          "filename": "dbd3cd34f4cf129a2d8e2c0f3310e77b",
          "path": "\\server\\public\\files\\dbd3cd34f4cf129a2d8e2c0f3310e77b",
          "mimetype": "application/pdf",
          "created_at": "2020-10-12T18:04:32.764Z",
          "updated_at": "2020-10-12T18:23:20.553Z"
        },
        {
          "id": 5,
          "originalname": "teste4.pdf",
          "filename": "be0fcd67eaefabdf958cc7e6b3ae2626",
          "path": "\\server\\public\\files\\be0fcd67eaefabdf958cc7e6b3ae2626",
          "mimetype": "application/pdf",
          "created_at": "2020-10-17T23:49:49.410Z",
          "updated_at": "2020-10-18T00:26:30.414Z"
        },
        {
          "id": 7,
          "originalname": "manual_portabilidade_ANS_V3.pdf",
          "filename": "fe3ba900519a262be3efa3db8433b96e",
          "path": "\\server\\public\\files\\fe3ba900519a262be3efa3db8433b96e",
          "mimetype": "application/pdf",
          "created_at": "2020-10-18T00:51:24.998Z",
          "updated_at": "2020-10-18T00:51:24.998Z"
        }
      ]);
    const [selected, setSelected] = useState<number>();
    const [loading, setLoading] = useState<boolean>(false);
    return (
        <FileContext.Provider value={{ files, selected, loading, setSelected, setLoading }}>
            {children}
        </FileContext.Provider>
    );
};
