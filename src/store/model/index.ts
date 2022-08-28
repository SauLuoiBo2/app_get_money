import { AuthStore, ThemeStore } from "../slices";
import { HistoryStore } from "../slices/auth/history-slice";

// ZustandStore

export interface ZustandStore {}

export type SetZustandType = (
    partial: ZustandStore | Partial<ZustandStore> | ((state: ZustandStore) => ZustandStore | Partial<ZustandStore>),
    replace?: boolean | undefined
) => void;

export type GetZustandType = () => ZustandStore;

// PersistStore

export interface PersistStore extends ThemeStore, AuthStore, HistoryStore {}

export type SetPersistType = (
    partial: ZustandStore | Partial<PersistStore> | ((state: PersistStore) => PersistStore | Partial<PersistStore>),
    replace?: boolean | undefined
) => void;

export type GetPersistType = () => PersistStore;

export type PersistLocalType = {
    state: PersistStore;
};
