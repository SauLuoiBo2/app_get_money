import create from "zustand";
import { persist } from "zustand/middleware";

import { KEY } from "@/config";
import { createNewPoint, PointProps, ResultPointEnum } from "@/utils";

interface GameStore {
    current_point_list: PointProps[];
    create_new_point: (nextResultPoint: ResultPointEnum) => void;
    remove_last_point: () => void;
}

export const useGameStore = create<GameStore>()(
    persist(
        (set, get) => ({
            current_point_list: [],
            create_new_point: (nextResultPoint) => {
                const list = get().current_point_list;
                const current_point_list = createNewPoint(list, nextResultPoint);
                set({ current_point_list });
            },
            remove_last_point: () => {
                const list = get().current_point_list;
                list.pop();
                set({ current_point_list: list });
            },
        }),
        {
            name: KEY.GAME_STORE,
        }
    )
);
