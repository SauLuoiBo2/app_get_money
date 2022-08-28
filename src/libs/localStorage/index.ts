import { KEY } from "@/config";
import { AuthStateType } from "@/store/slices";

export function setLocalStored(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
}

export function clearLocalStored(key: string): void {
    localStorage.removeItem(key);
}
// Set localStorage common
export function getLocalStored(key: string): any {
    const stored = typeof window !== "undefined" ? localStorage.getItem(key) : "";
    return stored ? JSON.parse(stored) : null;
}

// auth

export function getStoredAuth(): AuthStateType | null {
    const persistStore = typeof window !== "undefined" ? localStorage.getItem(KEY.PERSIST_STORE) : "";
    const data = persistStore ? JSON.parse(persistStore) : null;
    if (data) {
        return data?.state.auth;
    } else {
        return null;
    }
}
