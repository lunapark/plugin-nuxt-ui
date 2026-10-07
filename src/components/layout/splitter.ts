import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Splitter from "@nuxt/ui/components/Splitter.vue";

import { orientation } from "@/lib/variants.ts";

const SplitterItem = LogicUtil.partial(LogicType.object({
    collapsedSize: LogicType.number({ description: "The size of the panel when collapsed." }),
    collapsible: LogicType.boolean({ description: "Whether the panel can be collapsed." }),
    defaultSize: LogicType.number({ description: "The initial size of the panel." }),
    id: LogicType.string(),
    maxSize: LogicType.number({ description: "The maximum size of the panel." }),
    minSize: LogicType.number({ description: "The minimum size of the panel." }),
    sizeUnit: LogicType.string({ default: "%", enum: ["%", "px"] })
}));

const PanelSlot = LogicType.object({
    collapse: LogicType.function(),
    collapsed: LogicType.boolean(),
    expand: LogicType.function(),
    index: LogicType.number(),
    item: SplitterItem,
    resize: LogicType.function(LogicType.number())
});

const splitter = {
    build: {
        name: "USplitter"
    },
    component: Splitter,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/splitter"
    },
    emits: {
        collapse: LogicType.number(),
        dragging: LogicType.object({ dragging: LogicType.boolean(), index: LogicType.number() }),
        expand: LogicType.number(),
        layout: LogicType.array(LogicType.number()),
        resize: LogicType.object({ index: LogicType.number(), prevSize: LogicType.number({ optional: true }), size: LogicType.number() })
    },
    name: "Layout/Splitter",
    properties: {
        autoSaveId: LogicType.string({ description: "Unique id used to persist the layout in local storage." }),
        disabled: LogicType.boolean({ description: "Disable resizing." }),
        id: LogicType.string(),
        items: LogicType.array(SplitterItem, { description: "The panels of the splitter. Each panel is rendered in the `panel-<index>` slot." }),
        keyboardResizeBy: LogicType.number({ description: "Step size when resizing with arrow keys." }),
        orientation
    },
    slots: {
        "panel-0": PanelSlot,
        "panel-1": PanelSlot,
        "panel-2": PanelSlot,
        "panel-3": PanelSlot,
        "resize-handle": LogicType.object({ index: LogicType.number() })
    }
} satisfies TComponent;

export default splitter;
