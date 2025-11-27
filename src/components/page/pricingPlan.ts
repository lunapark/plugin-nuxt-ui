import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import PricingPlan from "@nuxt/ui/components/PricingPlan.vue";

import { BadgeProps } from "@/components/element/badge.ts";
import { ButtonProps } from "@/components/element/button.ts";
import { orientation } from "@/lib/variants.ts";

const pricingPlan = {
    component: PricingPlan,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/pricing-plan"
    },
    name: "Page/PricingPlan",
    properties: {
        badge: LogicType.union([LogicType.string(), BadgeProps], { description: "Display a badge next to the title." }),
        billingCycle: LogicType.string({ description: "The unit price period that appears next to the price." }),
        billingPeriod: LogicType.string({ description: "Additional billing context that appears above the billing cycle." }),
        button: ButtonProps,
        description: LogicType.string(),
        discount: LogicType.string({ description: "The discounted price of the plan." }),
        features: LogicType.array(LogicType.union([
            LogicType.string(),
            LogicType.object({
                icon: LogicType.string({ optional: true }),
                title: LogicType.string()
            })
        ]), { description: "Display a list of features under the price." }),
        highlight: LogicType.boolean({ description: "Display a ring around the pricing plan to highlight it." }),
        orientation: { ...orientation, default: "vertical" },
        price: LogicType.string({ description: "The current price of the plan." }),
        scale: LogicType.boolean({ description: "Enlarge the plan to make it more prominent." }),
        tagline: LogicType.string({ description: "Display a tagline highlighting the pricing value proposition." }),
        terms: LogicType.string({ description: "Display terms at the bottom." }),
        title: LogicType.string(),
        variant: LogicType.string({ default: "outline", enum: ["solid", "outline", "soft", "subtle"] })
    },
    slots: {
        badge: LogicType.void(),
        billing: LogicType.void(),
        body: LogicType.void(),
        button: LogicType.void(),
        description: LogicType.void(),
        discount: LogicType.void(),
        features: LogicType.void(),
        footer: LogicType.void(),
        header: LogicType.void(),
        price: LogicType.void(),
        tagline: LogicType.void(),
        terms: LogicType.void(),
        title: LogicType.void()
    }
} satisfies TComponent;

export default pricingPlan;
export const PricingPlanProps = LogicUtil.partial(LogicType.object(pricingPlan.properties));
