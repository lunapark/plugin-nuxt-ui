import type { TComponent } from "@luna-park/plugin";
import { LogicType, LogicUtil } from "@luna-park/plugin";
import DashboardSidebarCollapse from "@nuxt/ui/components/DashboardSidebarCollapse.vue";

import { ButtonProps } from "@/components/element/button.ts";

const dashboardSidebarCollapse = {
    build: {
        name: "UDashboardSidebarCollapse"
    },
    component: DashboardSidebarCollapse,
    documentation: {
        description: "A Button to collapse the sidebar on desktop.",
        link: "https://ui.nuxt.com/docs/components/dashboard-sidebar-collapse"
    },
    guides: ["dashboard"],
    name: "Dashboard/DashboardSidebarCollapse",
    properties: {
        ...ButtonProps.properties,
        side: LogicType.string({ default: "left", enum: ["left", "right"] })
    }
} satisfies TComponent;

export default dashboardSidebarCollapse;
export const DashboardSidebarCollapseProps = LogicUtil.partial(LogicType.object(dashboardSidebarCollapse.properties));
