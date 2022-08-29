import { v4 as uuidv4 } from "uuid";
import create from "zustand";
import { persist } from "zustand/middleware";

import { KEY } from "@/config";
import { createNewPoint, PointProps, ResultPointEnum } from "@/utils";

export interface HistoryResult {
    id: any;
    result: PointProps[];
}

interface GameStore {
    current_point_list: PointProps[];
    history_list: HistoryResult[];
    create_new_point: (nextResultPoint: ResultPointEnum) => void;
    remove_last_point: () => void;
    clear_current_list: () => void;
    save_current_to_history_list: () => void;
}

export const useGameStore = create<GameStore>()(
    persist(
        (set, get) => ({
            current_point_list: [],
            history_list: [],
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
            clear_current_list: () => {
                set({ current_point_list: [] });
            },
            save_current_to_history_list: () => {
                const listCurrent = get().current_point_list;
                const list = get().history_list;
                const id = uuidv4();
                const data = {
                    id,
                    result: listCurrent,
                };
                list.push(data);
                set({ history_list: list.concat() });
            },
        }),
        {
            name: KEY.GAME_STORE,
        }
    )
);
