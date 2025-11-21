import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Pagination from "@nuxt/ui/components/Pagination.vue";

import { color, size, variant } from "@/lib/variants.ts";

const pagination = {
    component: Pagination,
    models: {
        page: LogicType.number({ description: "The controlled value of the current page." })
    },
    name: "Navigation/Pagination",
    properties: {
        activeColor: { ...color, description: "The color of the active pagination controls." },
        activeVariant: { ...variant, description: "The variant of the active pagination controls." },
        color: { ...color, default: "neutral", description: "The color of the pagination controls." },
        defaultPage: LogicType.number({ description: "The value of the page that should be active when initially rendered." }),
        disabled: LogicType.boolean({ description: "When `true`, prevents the user from interacting with item" }),
        ellipsisIcon: LogicType.string({ description: "The icon to use for the ellipsis control." }),
        firstIcon: LogicType.string({ description: "The icon to use for the first page control." }),
        itemsPerPage: LogicType.number({ default: 10, description: "Number of items per page" }),
        lastIcon: LogicType.string({ description: "The icon to use for the last page control." }),
        nextIcon: LogicType.string({ description: "The icon to use for the next page control." }),
        prevIcon: LogicType.string({ description: "The icon to use for the previous page control." }),
        showControls: LogicType.boolean({ description: "Whether to show the first, previous, next, and last controls." }),
        showEdges: LogicType.boolean({ description: "When `true`, always show first page, last page, and ellipsis" }),
        siblingCount: LogicType.number({ default: 2, description: "Number of sibling should be shown around the current page" }),
        size,
        to: LogicType.string({ description: "A function to render page controls as links." }),
        total: LogicType.number({ description: "Number of items in your list" }),
        variant: { ...variant, default: "outline", description: "The variant of the pagination controls." }
    },
    slots: {
        ellipsis: LogicType.void(),
        first: LogicType.void(),
        item: LogicType.object({
            index: LogicType.number(),
            item: LogicType.object({
                type: LogicType.string({ enum: ["ellipsis", "page"] }),
                value: LogicType.number({ optional: true })
            }),
            page: LogicType.number(),
            pageCount: LogicType.number()
        }),
        last: LogicType.void(),
        next: LogicType.void(),
        prev: LogicType.void()
    }
} satisfies TComponent;

export default pagination;
export const PaginationProps = LogicUtil.partial(LogicType.object(pagination.properties));
