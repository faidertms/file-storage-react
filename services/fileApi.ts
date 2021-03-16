import axios, { AxiosInstance, AxiosResponse } from 'axios';
import axiosRetry from 'axios-retry';
import { File } from '../components/FileGrid/FileItem/types';
import { jsonToFormData } from '../helpers/functions';
//TODO - Improve typing (ErrorValue);
export type DownloadResponse = {
    filePath: string,
    fileName: string,
}

export type ErrorValue = {
    constraint?: Array<String>
    column?: Array<String>
}

export type Response<T> = {
    message: string | Array<string>,
    values: T,
    code: number,
}

const baseURL: string = process.env.NEXT_PUBLIC_FILEAPI ?? "";

export const fileApi: AxiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 240000,
    headers:
    {
        'Content-Type': 'application/json'
    },
});

axiosRetry(fileApi, { retries: 3 });

export const getFiles = async (): Promise<AxiosResponse<Response<File[]>>> => {
    const response = await fileApi.get<Response<File[]>>('/file');
    return response;
}

export const getFile = async (id: number): Promise<AxiosResponse<Response<File>>> => {
    const response = await fileApi.get<Response<File>>(`/file/${id}`);
    return response;
}

export const downloadFile = (id: number): void => {
    window.open(`${baseURL}/file/${id}/download`, '_blank');
}

export const storeFile = async (files: FileList): Promise<AxiosResponse<Response<File[]>>> => {
    const headers = {
        'Content-Type': 'multipart/form-data'
    };

    const response = await fileApi.post<Response<File[]>>('/file', jsonToFormData({ files }, 'POST'), { headers });
    return response;
}

export const updateFile = async (id: number, originalname: string): Promise<AxiosResponse<Response<File>>> => {
    const response = await fileApi.put<Response<File>>(`/file/${id}`, { originalname });
    return response;
}

export const deleteFile = async (id: number): Promise<AxiosResponse<Response<File>>> => {
    const response = await fileApi.delete<Response<File>>(`/file/${id}`);
    return response;
}

