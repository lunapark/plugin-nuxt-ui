import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import DashboardSidebarCollapse from "@nuxt/ui/components/DashboardSidebarCollapse.vue";

import { ButtonProps } from "@/components/element/button.ts";

const dashboardSidebarCollapse = {
    component: DashboardSidebarCollapse,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/dashboard-sidebar-collapse"
    },
    name: "Dashboard/DashboardSidebarCollapse",
    properties: {
        ...ButtonProps.properties,
        side: LogicType.string({ default: "left", enum: ["left", "right"] })
    }
} satisfies TComponent;

export default dashboardSidebarCollapse;
export const DashboardSidebarCollapseProps = LogicUtil.partial(LogicType.object(dashboardSidebarCollapse.properties));
