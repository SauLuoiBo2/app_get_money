import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { memo, PropsWithChildren } from "react";

export interface QueryProviderProps extends PropsWithChildren {}

function getMillisecondsFromMinute(minute: number) {
    return minute * 60 * 1000;
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchIntervalInBackground: false,
            refetchOnReconnect: false,
            refetchOnMount: false,
            staleTime: getMillisecondsFromMinute(10), // 10 minutes
            cacheTime: getMillisecondsFromMinute(15), // 15 minutes
            retry: 0,
        },
    },
});

export const QueryProvider: React.FC<QueryProviderProps> = memo(({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
});
