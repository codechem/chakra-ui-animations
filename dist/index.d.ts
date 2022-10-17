declare type Options = {
    duration?: number;
    iterationCount?: number | 'infinite';
    timingFunction?: "ease" | "linear" | "ease-in" | "ease-out" | "ease-in-out";
};
declare const useAnimation: (name: "bounce-in" | "bounce" | "flash" | "head-shake" | undefined, { duration, iterationCount, timingFunction }: Options) => string | undefined;

export { useAnimation };
