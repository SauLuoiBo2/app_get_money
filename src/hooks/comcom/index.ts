import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [pathname]);
};

export function useMounted(callback: () => void, deps: any[] = []) {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            callback();
        }
    }, [...deps]);
}

export function useDidMount(callback: () => void) {
    return useEffect(callback, []);
}

export function useUnMount(callback: () => void) {
    return useEffect(() => () => callback(), []);
}
