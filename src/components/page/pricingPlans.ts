import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import PricingPlans from "@nuxt/ui/components/PricingPlans.vue";

import { PricingPlanProps } from "@/components/page/pricingPlan.ts";
import { orientation } from "@/lib/variants.ts";

const pricingPlans = {
    component: PricingPlans,
    name: "Page/PricingPlans",
    properties: {
        compact: LogicType.boolean({ description: "When `true`, the plans will be displayed without gap." }),
        orientation,
        plans: LogicType.array(PricingPlanProps),
        scale: LogicType.boolean({ description: "When `true`, the plans will be displayed with a larger gap." })
    },
    slots: {
        badge: LogicType.object({ plan: PricingPlanProps }),
        billing: LogicType.object({ plan: PricingPlanProps }),
        body: LogicType.object({ plan: PricingPlanProps }),
        button: LogicType.object({ plan: PricingPlanProps }),
        default: LogicType.void(),
        description: LogicType.object({ plan: PricingPlanProps }),
        discount: LogicType.object({ plan: PricingPlanProps }),
        features: LogicType.object({ plan: PricingPlanProps }),
        footer: LogicType.object({ plan: PricingPlanProps }),
        header: LogicType.object({ plan: PricingPlanProps }),
        price: LogicType.object({ plan: PricingPlanProps }),
        tagline: LogicType.object({ plan: PricingPlanProps }),
        terms: LogicType.object({ plan: PricingPlanProps }),
        title: LogicType.object({ plan: PricingPlanProps })
    }
} satisfies TComponent;

export default pricingPlans;
export const PricingPlansProps = LogicUtil.partial(LogicType.object(pricingPlans.properties));
