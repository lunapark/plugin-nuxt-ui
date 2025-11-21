import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import PricingTable from "@nuxt/ui/components/PricingTable.vue";

import { PricingPlanProps } from "@/components/page/pricingPlan.ts";

const PricingTableTier = LogicType.object({
    ...LogicUtil.pick(
        PricingPlanProps,
        ["title", "description", "badge", "billingCycle", "billingPeriod", "price", "discount", "button", "highlight"]
    ).properties,
    id: LogicType.string()
});

const PricingTableSectionFeature = LogicType.object({
    id: LogicType.string({ optional: true }),
    tiers: LogicType.record(LogicType.string(), PricingTableTier, { optional: true }),
    title: LogicType.string()
});

const PricingTableSection = LogicType.object({
    features: LogicType.array(PricingTableSectionFeature),
    id: LogicType.string({ optional: true }),
    title: LogicType.string()
});

const pricingTable = {
    component: PricingTable,
    name: "Page/PricingTable",
    properties: {
        caption: LogicType.string({ description: "The caption to display above the table." }),
        sections: LogicType.array(PricingTableSection, { description: "The sections of features to display in the table." }),
        tiers: LogicType.array(PricingTableTier, { description: "The pricing tiers to display in the table." })
    },
    slots: {
        caption: LogicType.void(),
        tier: LogicType.void()
    }
} satisfies TComponent;

export default pricingTable;
export const PricingTableProps = LogicUtil.partial(LogicType.object(pricingTable.properties));
