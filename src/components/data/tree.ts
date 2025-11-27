import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Tree from "@nuxt/ui/components/Tree.vue";

import { color, size } from "@/lib/variants.ts";

const TreeItem = LogicUtil.partial(LogicType.object({
    defaultExpanded: LogicType.boolean(),
    disabled: LogicType.boolean(),
    icon: LogicType.string(),
    label: LogicType.string(),
    slot: LogicType.string(),
    trailingIcon: LogicType.string()
}));

TreeItem.properties.children = LogicType.array(TreeItem, { optional: true });

export const tree = {
    component: Tree,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/tree"
    },
    emits: {
        select: LogicType.function(LogicType.object({ e: LogicType.interface("SelectEvent"), item: LogicType.array(LogicType.interface("T")) }), LogicType.interface("void")),
        toggle: LogicType.function(LogicType.object({ e: LogicType.interface("ToggleEvent"), item: LogicType.array(LogicType.interface("T")) }), LogicType.interface("void"))
    },
    models: {
        expanded: LogicType.array(LogicType.string(), { description: "The controlled value of the expanded item. Can be binded with with `v-model`." }),
        modelValue: LogicType.union([TreeItem, LogicType.array(TreeItem)], { description: "The controlled value of the Tree. Can be bind as `v-model`." })
    },
    name: "Data/Tree",
    properties: {
        bubbleSelect: LogicType.boolean({ description: "When `true`, selecting children will update the parent state." }),
        collapsedIcon: LogicType.string({ description: "The icon displayed when a parent node is collapsed." }),
        color,
        defaultExpanded: LogicType.array(LogicType.string(), { description: "The value of the expanded tree when initially rendered. Use when you do not need to control the state of the expanded tree" }),
        defaultValue: LogicType.array(LogicType.array(LogicType.boolean()), { description: "The value of the Tree when initially rendered. Use when you do not need to control the state of the Tree." }),
        disabled: LogicType.boolean({ description: "When `true`, prevents the user from interacting with tree" }),
        expandedIcon: LogicType.string({ description: "The icon displayed when a parent node is expanded." }),
        items: LogicType.array(TreeItem),
        labelKey: LogicType.union([LogicType.string(), LogicType.number()], { default: "label", description: "The key used to get the label from the item." }),
        multiple: LogicType.boolean({ description: "Whether multiple options can be selected or not." }),
        nested: LogicType.boolean({ description: "Use nested DOM structure (children inside parents) vs flattened structure (all items at same level).\nWhen `virtualize` is enabled, this is automatically set to `false`." }),
        propagateSelect: LogicType.boolean({ description: "When `true`, selecting parent will select the descendants." }),
        selectionBehavior: LogicType.string({ description: "How multiple selection should behave in the collection.", enum: ["replace", "toggle"] }),
        size,
        trailingIcon: LogicType.string({ description: "The icon displayed on the right side of a parent node." }),
        virtualize: LogicType.boolean({ description: "Enable virtualization for large lists.\nNote: when enabled, the tree structure is flattened like if `nested` was set to `false`." })
    },
    slots: {
        item: LogicType.object({
            expanded: LogicType.boolean(),
            index: LogicType.number(),
            item: TreeItem,
            level: LogicType.number(),
            selected: LogicType.boolean()
        })
    }
} satisfies TComponent;

export default tree;
