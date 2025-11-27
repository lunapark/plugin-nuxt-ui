import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Header from "@nuxt/ui/components/Header.vue";

import { ButtonProps } from "@/components/element/button.ts";
import { menuProp } from "@/lib/menu.ts";

const header = {
    component: Header,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/header"
    },
    models: {
        open: LogicType.boolean()
    },
    name: "Layout/Header",
    properties: {
        menu: menuProp,
        mode: LogicType.string({ description: "The mode of the header menu.", enum: ["modal", "slideover", "drawer"] }),
        title: LogicType.string(),
        to: LogicType.string(),
        toggle: LogicType.union([LogicType.boolean(), ButtonProps], { description: "Customize the toggle button to open the header menu." }),
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
        toggle: LogicType.void(),
        top: LogicType.void()
    }
} satisfies TComponent;

export default header;
export const HeaderProps = LogicUtil.partial(LogicType.object(header.properties));
