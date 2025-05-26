import fontSize from "@/data/constants/font_size";
import { extendTailwindMerge } from "tailwind-merge";

const merge = extendTailwindMerge({
    extend: {
        classGroups: {
            "font-size": Object.keys(12).map((size) => `text-${size}`),
        },
    },
});

export default merge;