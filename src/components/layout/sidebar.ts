import { LogicType, type TComponent } from "@luna-park/plugin";
import Sidebar from "@nuxt/ui/components/Sidebar.vue";

import { ButtonProps } from "@/components/element/button.ts";
import { iconType } from "@/lib/icon.ts";
import { menuProp } from "@/lib/menu.ts";

const SidebarState = LogicType.string({ enum: ["expanded", "collapsed"] });
const ContentSlot = LogicType.object({ close: LogicType.function(), open: LogicType.boolean(), state: SidebarState });

const sidebar = {
    build: {
        name: "USidebar"
    },
    component: Sidebar,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/sidebar"
    },
    models: {
        open: LogicType.boolean()
    },
    name: "Layout/Sidebar",
    properties: {
        close: LogicType.union([LogicType.boolean(), ButtonProps], { description: "Display a close button in the mobile menu." }),
        closeIcon: iconType({ description: "The icon displayed in the close button." }),
        collapsible: LogicType.string({ default: "offcanvas", description: "How the sidebar collapses.", enum: ["offcanvas", "icon", "none"] }),
        description: LogicType.string(),
        menu: menuProp,
        mode: LogicType.string({ default: "slideover", description: "The mode of the sidebar menu on mobile.", enum: ["modal", "slideover", "drawer"] }),
        rail: LogicType.boolean({ description: "Display a rail on the sidebar edge to toggle it." }),
        side: LogicType.string({ default: "left", enum: ["left", "right"] }),
        title: LogicType.string(),
        transition: LogicType.boolean({ description: "Animate the sidebar when it opens or closes." }),
        variant: LogicType.string({ default: "sidebar", enum: ["sidebar", "floating", "inset"] })
    },
    slots: {
        actions: LogicType.object({ state: SidebarState }),
        content: LogicType.object({ close: LogicType.function() }),
        default: ContentSlot,
        description: LogicType.object({ state: SidebarState }),
        footer: ContentSlot,
        header: ContentSlot,
        rail: LogicType.object({ state: SidebarState }),
        title: LogicType.object({ state: SidebarState })
    }
} satisfies TComponent;

export default sidebar;
