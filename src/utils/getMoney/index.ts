import { isArray } from "lodash";

import { logger } from "@/libs";

export enum ResultPointEnum {
    BLACK = 1,
    WHITE = 2,
    WAITTING = 3,
}

export enum DeviatePointEnum {
    EQUA = 1,
    OTHER = 2,
    WAITTING = 3,
}

export enum IsWinPointEnum {
    WIN = 1,
    LOSE = 2,
    WAITTING = 3,
}

export interface PointProps {
    result_point: ResultPointEnum;
    cal_deviate_next: DeviatePointEnum;
    cal_result_next: ResultPointEnum;
    is_win: IsWinPointEnum;
}

const turnCheck = 7;
const turn = turnCheck * 3;

const initialPoint = {
    cal_deviate_next: DeviatePointEnum.WAITTING,
    cal_result_next: ResultPointEnum.WAITTING,
    is_win: IsWinPointEnum.WAITTING,
};

export function calDeviateNext(list: PointProps[]) {
    const calList_16 = list.slice(-(turn + 1));
    let count_equa = 0;
    // calcu equa
    for (let i = 0; i < calList_16.length; i++) {
        if ((i + 1) % 3 === 0) {
            const isEqua =
                calList_16[i - 2].result_point === calList_16[i - 1].result_point
                    ? DeviatePointEnum.EQUA
                    : DeviatePointEnum.OTHER;
            if (isEqua === DeviatePointEnum.EQUA) {
                count_equa++;
            }
        }
    }

    if (count_equa > 2) {
        return DeviatePointEnum.OTHER;
    } else {
        return DeviatePointEnum.EQUA;
    }
}

export function calPoint(nextDeviatePoint: DeviatePointEnum, currentResultPoint: ResultPointEnum) {
    if (nextDeviatePoint === DeviatePointEnum.EQUA) {
        return currentResultPoint === ResultPointEnum.BLACK ? ResultPointEnum.BLACK : ResultPointEnum.WHITE;
    } else {
        return currentResultPoint === ResultPointEnum.BLACK ? ResultPointEnum.WHITE : ResultPointEnum.BLACK;
    }
}

export function calResultNext(list: PointProps[], nextDeviatePoint: DeviatePointEnum) {
    const lengthList = list.length;
    const lastResultPoint = list[lengthList - 1].result_point;
    return calPoint(nextDeviatePoint, lastResultPoint);
}

export function calIsWinCurrent(list: PointProps[], nextResult: ResultPointEnum) {
    const lengthList = list.length;
    const lastResultPoint = list[lengthList - 1].cal_result_next;
    logger.info("ket qua", lastResultPoint, nextResult);
    if (nextResult === lastResultPoint) {
        return IsWinPointEnum.WIN;
    } else {
        return IsWinPointEnum.LOSE;
    }
}

export function createNewPoint(list: PointProps[], nextResultPoint: ResultPointEnum) {
    if (!isArray(list)) {
        return [];
    }
    const pointList = list;
    const lengthList = list.length;
    // nho hon 16 -
    if (lengthList < turn) {
        const dataNextPoint = { ...initialPoint, result_point: nextResultPoint };
        return pointList.concat(dataNextPoint);
    }
    if (lengthList === turn) {
        const cal_deviate_next = calDeviateNext(list);
        const cal_result_next = calResultNext(list, cal_deviate_next);
        const dataNextPoint = {
            ...initialPoint,
            result_point: nextResultPoint,
            cal_deviate_next,
            cal_result_next,
        };
        return pointList.concat(dataNextPoint);
    }
    if (lengthList > turn) {
        const cal_deviate_next = calDeviateNext(list);
        const cal_result_next = calResultNext(list, cal_deviate_next);
        const dataNextPoint = {
            result_point: nextResultPoint,
            cal_deviate_next,
            cal_result_next,
            is_win: calIsWinCurrent(list, nextResultPoint),
        };
        return pointList.concat(dataNextPoint);
    }
}
