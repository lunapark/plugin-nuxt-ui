import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import DashboardSidebarToggle from "@nuxt/ui/components/DashboardSidebarToggle.vue";

import { ButtonProps } from "@/components/element/button.ts";

const dashboardSidebarToggle = {
    component: DashboardSidebarToggle,
    name: "Dashboard/DashboardSidebarToggle",
    properties: {
        ...ButtonProps.properties,
        side: LogicType.string({ default: "left", enum: ["left", "right"] })
    }
} satisfies TComponent;

export default dashboardSidebarToggle;
export const DashboardSidebarToggleProps = LogicUtil.partial(LogicType.object(dashboardSidebarToggle.properties));
