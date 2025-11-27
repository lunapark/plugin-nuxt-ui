import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import DashboardToolbar from "@nuxt/ui/components/DashboardToolbar.vue";

const dashboardToolbar = {
    component: DashboardToolbar,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/dashboard-toolbar"
    },
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
