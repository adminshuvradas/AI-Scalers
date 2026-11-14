declare module 'wowjs' {
    interface WOWOptions {
        boxClass?: string;
        animateClass?: string;
        offset?: number;
        mobile?: boolean;
        live?: boolean;
        callback?: (box: HTMLElement) => void;
        scrollContainer?: string | null;
    }

    class WOW {
        constructor(options?: WOWOptions);
        init(): void;
        sync(): void;
    }

    // Support UMD pattern - WOW can be accessed as module.WOW, module.default, or module.default.WOW
    const WOWConstructor: typeof WOW;
    export = WOWConstructor;
}
