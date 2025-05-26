export type LightboxType = {
    index: number;
    setIndex: (val: number) => void;
    updateIndex: ({ index }: { index: number }) => void;
    toggleOpen: (state: boolean) => () => void
    open: boolean;
    setOpen: (val: boolean) => void;
    data: { src: string }[];
};
