import { LogicType, type TComponent } from "@luna-park/plugin";
import Header from "@nuxt/ui/components/Header.vue";

import { ButtonProps } from "@/components/element/button.ts";
import { DrawerProps, ModalProps, SlideoverProps } from "@/lib/menu.ts";

export const header: TComponent = {
    component: Header,
    models: {
        open: LogicType.boolean()
    },
    name: "Layout/Header",
    properties: {
        menu: LogicType.unknown({
            dynamic: ({ inputs }) => {
                switch (inputs?.mode) {
                    case "modal":
                        return ModalProps;
                    case "slideover":
                        return SlideoverProps;
                    case "drawser":
                        return DrawerProps;
                }
                return LogicType.unknown();
            }
        }),
        mode: LogicType.string({ description: "The mode of the header menu.", enum: ["modal", "slideover", "drawer"] }),
        title: LogicType.string({ name: "title" }),
        to: LogicType.string({ name: "to" }),
        toggle: LogicType.union([LogicType.boolean(), ButtonProps], { description: "Customize the toggle button to open the header menu displayed when the `content` slot is used.", name: "toggle" }),
        toggleSide: LogicType.string({ description: "The side to render the toggle button on.", enum: ["left", "right"] })
    },
    slots: {
        body: LogicType.void(),
        bottom: LogicType.void(),
        content: LogicType.void(),
        default: LogicType.void(),
        left: LogicType.void(),
        right: LogicType.void(),
        title: LogicType.void(),
        toggle: LogicType.object({ open: LogicType.boolean() }),
        top: LogicType.void()
    }
};
