import { size } from "@/theme/base";
import { pxToRem } from "@/theme/function";

export default {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    fontWeight: 400,
    borderRadius: size.borderRadius.button,
    padding: `${pxToRem(12)} ${pxToRem(24)}`,
    lineHeight: 1.4,
    textAlign: "center",
    textTransform: "unset",
    userSelect: "none",
    backgroundSize: "150% !important",
    backgroundPositionX: "25% !important",
    transition: `all 150ms ease-in`,

    "&:hover": {
        transform: "scale(1.001) translateY(-2px)",
    },

    "&:disabled": {
        pointerEvent: "none",
        opacity: 0.65,
    },

    "& .material-icons": {
        fontSize: pxToRem(15),
        marginTop: pxToRem(-2),
    },
};
