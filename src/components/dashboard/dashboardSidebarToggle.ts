import type { TComponent } from "@luna-park/plugin";
import { LogicType, LogicUtil } from "@luna-park/plugin";
import DashboardSidebarToggle from "@nuxt/ui/components/DashboardSidebarToggle.vue";

import { ButtonProps } from "@/components/element/button.ts";

const dashboardSidebarToggle = {
    build: {
        name: "UDashboardSidebarToggle"
    },
    component: DashboardSidebarToggle,
    documentation: {
        description: "A Button to toggle the sidebar on mobile.",
        link: "https://ui.nuxt.com/docs/components/dashboard-sidebar-toggle"
    },
    guides: ["dashboard"],
    name: "Dashboard/DashboardSidebarToggle",
    properties: {
        ...ButtonProps.properties,
        side: LogicType.string({ default: "left", enum: ["left", "right"] })
    }
} satisfies TComponent;

export default dashboardSidebarToggle;
export const DashboardSidebarToggleProps = LogicUtil.partial(LogicType.object(dashboardSidebarToggle.properties));
