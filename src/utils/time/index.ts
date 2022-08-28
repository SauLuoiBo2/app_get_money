function checkNumber(isCheck: boolean, callback: () => void) {
    if (isCheck) {
        return callback();
    }
}

export function convertMiliSeconds(number: any) {
    const isCheck = isNaN(number); // NaN

    let miliSeconds = 0;

    function getFromSeconds() {
        checkNumber(!isCheck, () => {
            miliSeconds = number * 1_000;
        });
        return miliSeconds;
    }

    function getFromMinute() {
        checkNumber(!isCheck, () => {
            miliSeconds = number * 60_000;
        });
        return miliSeconds;
    }

    function getFromHour() {
        checkNumber(!isCheck, () => {
            miliSeconds = number * 3_600_000;
        });
        return miliSeconds;
    }

    return { getFromSeconds, getFromMinute, getFromHour };
}
