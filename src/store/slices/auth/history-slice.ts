import { GetPersistType, SetPersistType } from "@/store/model";

export enum ResultEnum {
    TAI = 1,
    XIU = 2,
    WAIT = 3,
}

export enum StateryEnum {
    TRUNG = 1,
    LECH = 2,
    WAIT = 3,
}

export type HistoryTurnProps = {
    result: ResultEnum[];
};

export interface HistoryStore {
    history: HistoryTurnProps[];
    addNewTurn: () => void;
    addResult: (a: ResultEnum) => void;
    subResult: () => void;
    getLastResult: () => ResultEnum[];
    getStrateNext: () => { dataStatery: StateryEnum[]; feature: StateryEnum; support: ResultEnum };
}

const initialState: HistoryTurnProps[] = [];

export const histoySlice: (set: SetPersistType, get: GetPersistType) => HistoryStore = (set, get) => ({
    history: initialState,
    addNewTurn: () => {
        const history = get().history;
        history.push({ result: [] });
        set({ history });
    },
    addResult: (result) => {
        const history = get().history;
        const length = history.length;
        if (length === 0) {
            return;
        }
        if (length > 0) {
            history[length - 1].result.push(result);
            set({ history });
        }
    },
    subResult: () => {
        const history = get().history;
        const length = history.length;
        if (length === 0) {
            return;
        }
        if (length > 0) {
            const lengthResult = history[length - 1].result.length;
            if (lengthResult > 0) {
                history[length - 1].result.pop();

                set({ history });
            }
        }
    },
    getLastResult: () => {
        const history = get().history;
        const length = history.length;
        if (length === 0) {
            return [];
        } else {
            const result = history[length - 1];
            return result.result;
        }
    },

    getStrateNext: () => {
        const history = get().history;
        const length = history.length;
        if (length === 0) {
            return {
                dataStatery: [],
                feature: StateryEnum.WAIT,
                support: ResultEnum.WAIT,
            };
        } else {
            return getStrate(history[length - 1].result);
        }
    },
});

function getStrate(preResult: ResultEnum[]) {
    const data = preResult;
    const length = data.length;
    if (length < 16) {
        return {
            dataStatery: [],
            feature: StateryEnum.WAIT,
            support: ResultEnum.WAIT,
        };
    } else {
        const data_16 = data.slice(-16);
        const dataSta = [];
        for (let i = 0; i < data_16.length; i++) {
            if ((i + 1) % 3 === 0) {
                const e = data_16[i - 2] === data_16[i - 1] ? StateryEnum.TRUNG : StateryEnum.LECH;
                dataSta.push(e);
            }
        }
        const dataStatery = dataSta.concat();

        const data_5 = dataStatery.slice(-5);
        let j = 0;
        for (let i = 0; i < data_5.length; i++) {
            if (data_5[i] === StateryEnum.TRUNG) {
                j++;
            }
        }

        const feature = j > 2 ? StateryEnum.LECH : StateryEnum.TRUNG;
        const support =
            feature === StateryEnum.TRUNG
                ? data_16[data_16.length - 1]
                : data_16[data_16.length - 1] === ResultEnum.TAI
                ? ResultEnum.XIU
                : ResultEnum.TAI;
        return { dataStatery, feature, support };
    }
}
