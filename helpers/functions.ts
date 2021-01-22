

export const create_UUID = (): string => {
    var dt: number = new Date().getTime();
    var uuid: string = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r: number = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === 'x' ? r : ((r & 0x3) | 0x8)).toString(16);
    });
    return uuid;
};

function buildFormData(formData: FormData, data: any, parentKey: string = "") {
    if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
        Object.keys(data).forEach(key => {
            buildFormData(formData, data[key], parentKey ? `${parentKey}[]` : key);
        });
    } else {
        const value = (data == null) ? '' : data;
        formData.append(parentKey, value);
    }
};

export function jsonToFormData(data: object, metodo: string) {
    const formData = new FormData();
    formData.append('_method', metodo);
    buildFormData(formData, data);
    return formData;
};
