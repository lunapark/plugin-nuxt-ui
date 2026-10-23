import type { TComponent } from "@luna-park/plugin";
import { LogicType, LogicUtil } from "@luna-park/plugin";
import Accordion from "@nuxt/ui/components/Accordion.vue";

import { iconType } from "@/lib/icon.ts";

const AccordionItem = LogicUtil.partial(LogicType.object({
    content: LogicType.string(),
    disabled: LogicType.boolean(),
    icon: iconType(),
    label: LogicType.string(),
    slot: LogicType.string(),
    trailingIcon: iconType(),
    value: LogicType.string()
}));

const accordion = {
    build: {
        name: "UAccordion"
    },
    component: Accordion,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/accordion"
    },
    models: (props) => {
        const description = "The controlled value of the active item(s).\n\nUse this when you need to control the state of the items. Can be binded with `v-model`";

        return {
            modelValue: props.type?.value === "multiple" ? LogicType.array(LogicType.string(), { description }) : LogicType.string({ description })
        };
    },
    name: "Data/Accordion",
    properties: {
        collapsible: LogicType.boolean({ description: "When type is \"single\", allows closing content when clicking trigger for an open item.\nWhen type is \"multiple\", this prop has no effect." }),
        defaultValue: LogicType.union([LogicType.string(), LogicType.array(LogicType.string())], { description: "The default active value of the item(s).\n\nUse when you do not need to control the state of the item(s)." }),
        disabled: LogicType.boolean({ description: "When `true`, prevents the user from interacting with the accordion and all its items" }),
        items: LogicType.array(AccordionItem),
        labelKey: LogicType.union([LogicType.string(), LogicType.number()]),
        trailingIcon: iconType(),
        type: LogicType.string({ enum: ["single", "multiple"] }),
        unmountOnHide: LogicType.boolean({ description: "When `true`, the element will be unmounted on closed state." }),
        valueKey: LogicType.union([LogicType.string(), LogicType.number()], { default: "value", description: "When `items` is an array of objects, select the field to use as the value." })
    },
    slots: {
        body: LogicType.object({ index: LogicType.number(), item: AccordionItem }),
        content: LogicType.object({ index: LogicType.number(), item: AccordionItem }),
        default: LogicType.object({ index: LogicType.number(), item: AccordionItem }),
        leading: LogicType.object({ index: LogicType.number(), item: AccordionItem }),
        trailing: LogicType.object({ index: LogicType.number(), item: AccordionItem })
    }
} satisfies TComponent;

export default accordion;
