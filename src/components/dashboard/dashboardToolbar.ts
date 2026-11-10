import type { TComponent } from "@luna-park/plugin";
import { LogicType, LogicUtil } from "@luna-park/plugin";
import DashboardToolbar from "@nuxt/ui/components/DashboardToolbar.vue";

const dashboardToolbar = {
    build: {
        name: "UDashboardToolbar"
    },
    component: DashboardToolbar,
    documentation: {
        description: "A toolbar to display under the navbar in a dashboard.",
        link: "https://ui.nuxt.com/docs/components/dashboard-toolbar"
    },
    guides: ["dashboard"],
    name: "Dashboard/DashboardToolbar",
    properties: {},
    slots: {
        default: LogicType.void(),
        left: LogicType.void(),
        right: LogicType.void()
    }
} satisfies TComponent;

export default dashboardToolbar;
export const DashboardToolbarProps = LogicUtil.partial(LogicType.object(dashboardToolbar.properties));
