import { LogicType, LogicUtil, type TComponent, type TSlot } from "@luna-park/plugin";
import Table from "@nuxt/ui/components/Table.vue";

import { animation } from "@/lib/animation.ts";
import { color } from "@/lib/variants.ts";

const TableColumn = LogicUtil.partial(LogicType.object({
    accessorKey: LogicType.string(),
    cell: LogicType.function(LogicType.object({ row: LogicType.object() }), LogicType.string()),
    footer: LogicType.string(),
    header: LogicType.string(),
    id: LogicType.string()
}));

const table = {
    component: Table,
    name: "Data/Table",
    properties: {
        caption: LogicType.string(),
        columns: LogicType.array(TableColumn),
        data: LogicType.array(LogicType.unknown()),
        empty: LogicType.string({ description: "The text to display when the table is empty." }),
        loading: LogicType.boolean({ description: "Whether the table should be in loading state." }),
        loadingAnimation: animation,
        loadingColor: color,
        mergeOptions: LogicType.interface("defaultOptions", { description: "This option is used to optionally implement the merging of table options." }),
        sticky: LogicType.union([LogicType.boolean(), LogicType.string({ enum: ["header", "footer"] })], { description: "Whether the table should have a sticky header or footer. True for both, 'header' for header only, 'footer' for footer only.\nNote: this prop is not supported when `virtualize` is true." }),
        virtualize: LogicType.boolean({ description: "Enable virtualization for large datasets.\nNote: when enabled, the divider between rows and sticky properties are not supported." })
    },
    slots: (props) => {
        const slots: Record<string, TSlot> = {
            "body-bottom": LogicType.void(),
            "body-top": LogicType.void(),
            "caption": LogicType.void(),
            "empty": LogicType.void(),
            "loading": LogicType.void()
        };

        if (props.columns?.value?.length) {
            for (const column of props.columns.value) {
                const id = column.id ?? column.accessorKey;
                if (id) {
                    slots[`${ id }-header`] = LogicType.void();
                    slots[`${ id }-cell`] = LogicType.object({
                        row: LogicType.object({
                            id: LogicType.string(),
                            original: props.data?.schema?.items ?? LogicType.unknown()
                        })
                    });
                }
            }
        }

        return slots;
    }
} satisfies TComponent;

export default table;
