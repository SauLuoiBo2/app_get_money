import LogT from "logt";

let logger: LogT;

if (import.meta.env.VITE_NODE_ENV === "production") {
    logger = new LogT("none"); // or logger = new LogT("none")
} else {
    logger = new LogT("silly");
}

export { logger };
