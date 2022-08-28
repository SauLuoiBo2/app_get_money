import create from "zustand";
import { devtools, persist } from "zustand/middleware";

import { KEY } from "@/config";

import { PersistStore, ZustandStore } from "./model";
import { authSlice, themeSlice } from "./slices";

export const useBearStore = create<ZustandStore>();

// export const useBearStore = create<BearState>()(
//     devtools((set, get) => ({
//         bears: 0,
//         increase: (by) => set((state) => ({ bears: state.bears + by })),
//     }))
// );

// export const useBearStore = create<ZustandStore>()(
//     devtools((set, get) => ({
//         bears: 0,
//         increase: (by) => set((state) => ({ bears: state.bears + by })),
//     }))
// );

export const usePersistStore = create<PersistStore>()(
    persist(
        (set, get) => ({
            ...themeSlice(set, get),
            ...authSlice(set, get),
        }),
        {
            name: KEY.PERSIST_STORE,
            // unique name
        }
    )
);

// export const useBearStore = create<BearState>()(
//     devtools(
//         persist((set, get) => ({
//             bears: 0,
//             increase: (by) => set((state) => ({ bears: state.bears + by })),
//         }))
//     )
// );
