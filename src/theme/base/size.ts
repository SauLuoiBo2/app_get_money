import { pxToRem } from "../function";

export const size = {
    padding: pxToRem(16),
    borderWidth: {
        0: 0,
        1: pxToRem(1),
        2: pxToRem(2),
        3: pxToRem(3),
        4: pxToRem(4),
        5: pxToRem(5),
    },
    borderRadius: {
        xs: pxToRem(2),
        sm: pxToRem(4),
        md: pxToRem(8),
        button: pxToRem(12),
        lg: pxToRem(15),
        xl: pxToRem(20),
        xxl: pxToRem(24),
        form: pxToRem(24),
        section: pxToRem(160),
        circle: "50%",
    },
};
