import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import DashboardNavbar from "@nuxt/ui/components/DashboardNavbar.vue";

import { ButtonProps } from "@/components/element/button.ts";

const dashboardNavbar = {
    component: DashboardNavbar,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/dashboard-navbar"
    },
    name: "Dashboard/DashboardNavbar",
    properties: {
        icon: LogicType.string({ description: "The icon displayed next to the title." }),
        title: LogicType.string(),
        toggle: LogicType.union([LogicType.boolean(), ButtonProps], { description: "Customize the toggle button to open the sidebar." }),
        toggleSide: LogicType.string({ default: "left", description: "The side to render the toggle button on.", enum: ["left", "right"] })
    },
    slots: {
        default: LogicType.void(),
        leading: LogicType.void(),
        left: LogicType.void(),
        right: LogicType.void(),
        title: LogicType.void(),
        toggle: LogicType.void(),
        trailing: LogicType.void()
    }
} satisfies TComponent;

export default dashboardNavbar;
export const DashboardNavbarProps = LogicUtil.partial(LogicType.object(dashboardNavbar.properties));
