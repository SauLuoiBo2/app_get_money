export function getBreakpointMaxWidth(number: number) {
    return `only screen and (max-width: ${number}px)`;
}

export function rgba(color: string, opacity: number) {
    return `rgba(${color}, ${opacity})`;
}

export function pxToRem(number: number, baseNumber = 16) {
    return `${number / baseNumber}rem`;
}

export function boxShadow(offset = [], radius = [], color: string, opacity: number, inset = "") {
    const [x, y] = offset;
    const [blur, spread] = radius;

    return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(spread)} ${rgba(color, opacity)}`;
}
