export enum FILE_TYPE {
    PNG = "image/png",
    GIF = "image/gif",
    JPEG = "image/jpeg",
    JPG = "image/jpg",
    HEIC = "image/heic",
}
export const IMAGE_TYPES = [FILE_TYPE.PNG, FILE_TYPE.GIF, FILE_TYPE.JPEG, FILE_TYPE.JPG, FILE_TYPE.HEIC];
export const MAX_SIZE_IMAGE = 10_000_000;

export function convertBlocToBase64(bloc: File, callback: (a: string | ArrayBuffer | null) => void) {
    const reader = new FileReader();
    reader.readAsDataURL(bloc);
    reader.onloadend = function () {
        const base64data = reader.result;
        callback(base64data);
    };
}

export function convertBase64ToBlob(base64: any, callback: (a: File) => void, name: string, fileType: FILE_TYPE) {
    const url = base64;
    const arrTypeFile = fileType.split("/");
    const filename = name + "." + arrTypeFile[arrTypeFile.length - 1];
    fetch(url)
        .then((res) => res.blob())
        .then((blob) => {
            const file = new File([blob], filename, { type: fileType });
            callback(file);
        });
    return filename;
}

export function convertBase64ToBlobPng(base64: any, callback: (a: File) => void, name: string) {
    return convertBase64ToBlob(base64, callback, name, FILE_TYPE.PNG);
}

// upload

function checkTypeFile(type: string, types: string[]) {
    return types.includes(type);
}

export function checkFileUpload(
    file: File,
    types: FILE_TYPE[],
    maxSize: number,
    callback: (a: File) => void,
    funcIsNotType?: any,
    funcIsNotSize?: any
) {
    const { size, type } = file;
    const isType = checkTypeFile(type, types);

    if (!isType && funcIsNotType) {
        return funcIsNotType;
    }

    if (maxSize < size && funcIsNotSize) {
        return funcIsNotSize;
    } else {
        callback(file);
        return;
    }
}
// upload image

export function checkImageUpload(file: File, callback: (a: File) => void, funcIsNotType?: any, funcIsNotSize?: any) {
    checkFileUpload(file, IMAGE_TYPES, MAX_SIZE_IMAGE, callback, funcIsNotType, funcIsNotSize);
}
