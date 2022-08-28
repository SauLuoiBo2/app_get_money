import { RoleUserEnum } from "@/models";
import { GetPersistType, SetPersistType } from "@/store/model";

export type AuthStateType = {
    access_token: string | null;
    refresh_token: string | null;
    role: RoleUserEnum[];
};

type StringVoidType = {
    (s: string): void;
};

export interface AuthStore {
    auth: AuthStateType;
    authSetAccessToken: StringVoidType;
    authSetRefreshToken: StringVoidType;
    authSetRole: (a: RoleUserEnum[]) => void;
    authSet: (a: AuthStateType) => void;
    authClear: () => void;
    authIsLogin: () => boolean;
}
const initialState = {
    access_token: null,
    refresh_token: null,
    role: [],
};

export const authSlice: (set: SetPersistType, get: GetPersistType) => AuthStore = (set, get) => ({
    auth: initialState,
    authSetAccessToken: (access_token) => {
        set((state) => ({ auth: { ...state.auth, access_token } }));
    },
    authSetRefreshToken: (refresh_token) => {
        set((state) => ({ auth: { ...state.auth, refresh_token } }));
    },
    authSetRole: (role: RoleUserEnum[]) => {
        set((state) => ({ auth: { ...state.auth, role } }));
    },
    authSet: (auth) => {
        set({ auth });
    },
    authClear: () => {
        set({ auth: initialState });
    },
    authIsLogin: () => {
        return get().auth.access_token ? true : false;
    },
});
