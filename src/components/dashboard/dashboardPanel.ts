import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import DashboardPanel from "@nuxt/ui/components/DashboardPanel.vue";

const dashboardPanel = {
    component: DashboardPanel,
    name: "Dashboard/DashboardPanel",
    properties: {
        defaultSize: LogicType.number({ description: "The default size of the panel." }),
        id: LogicType.string({ description: "The id of the panel." }),
        maxSize: LogicType.number({ default: 100, description: "The maximum size of the panel." }),
        minSize: LogicType.number({ default: 15, description: "The minimum size of the panel." }),
        resizable: LogicType.boolean({ description: "Whether to allow the user to resize the panel." })
    },
    slots: {
        body: LogicType.void(),
        default: LogicType.void(),
        footer: LogicType.void(),
        header: LogicType.void()
    }
} satisfies TComponent;

export default dashboardPanel;
export const DashboardPanelProps = LogicUtil.partial(LogicType.object(dashboardPanel.properties));
