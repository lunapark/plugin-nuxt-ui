import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import DashboardSidebar from "@nuxt/ui/components/DashboardSidebar.vue";

import { ButtonProps } from "@/components/element/button.ts";
import { menuProp } from "@/lib/menu.ts";

const dashboardSidebar = {
    component: DashboardSidebar,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/dashboard-sidebar"
    },
    models: {
        collapsed: LogicType.boolean(),
        open: LogicType.boolean()
    },
    name: "Dashboard/DashboardSidebar",
    properties: {
        collapsedSize: LogicType.number({ description: "The size of the panel when collapsed." }),
        collapsible: LogicType.boolean({ description: "Whether to allow the user to collapse the panel." }),
        defaultSize: LogicType.number({ default: 15, description: "The default size of the panel." }),
        id: LogicType.string({ description: "The id of the panel." }),
        maxSize: LogicType.number({ default: 20, description: "The maximum size of the panel." }),
        menu: menuProp,
        minSize: LogicType.number({ default: 10, description: "The minimum size of the panel." }),
        mode: LogicType.string({ default: "slideover", description: "The mode of the sidebar menu.", enum: ["modal", "slideover", "drawer"] }),
        resizable: LogicType.boolean({ description: "Whether to allow the user to resize the panel." }),
        side: LogicType.string({ default: "left", description: "The side to render the panel on.", enum: ["left", "right"] }),
        toggle: LogicType.union([LogicType.boolean(), ButtonProps], { description: "Customize the toggle button to open the sidebar." }),
        toggleSide: LogicType.string({ default: "left", description: "The side to render the toggle button on.", enum: ["left", "right"] })
    },
    slots: {
        content: LogicType.object({ close: LogicType.function() }),
        default: LogicType.object({ collapse: LogicType.function(), collapsed: LogicType.boolean() }),
        footer: LogicType.object({ collapse: LogicType.function(), collapsed: LogicType.boolean() }),
        header: LogicType.object({ collapse: LogicType.function(), collapsed: LogicType.boolean() }),
        toggle: LogicType.object({ open: LogicType.boolean(), toggle: LogicType.function() })
    }
} satisfies TComponent;

export default dashboardSidebar;
export const DashboardSidebarProps = LogicUtil.partial(LogicType.object(dashboardSidebar.properties));
