import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Stepper from "@nuxt/ui/components/Stepper.vue";

import { color, orientation, size } from "@/lib/variants.ts";

const StepperItem = LogicUtil.partial(LogicType.object({
    content: LogicType.string(),
    description: LogicType.string(),
    disabled: LogicType.boolean(),
    icon: LogicType.string(),
    slot: LogicType.string(),
    title: LogicType.string(),
    value: LogicType.union([LogicType.string(), LogicType.number()])
}));

const stepper = {
    component: Stepper,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/stepper"
    },
    models: {
        modelValue: LogicType.union([LogicType.string(), LogicType.number()])
    },
    name: "Navigation/Stepper",
    properties: {
        color,
        defaultValue: LogicType.union([LogicType.string(), LogicType.number()], { description: "The value of the step that should be active when initially rendered." }),
        disabled: LogicType.boolean(),
        items: LogicType.array(StepperItem),
        linear: LogicType.boolean({ description: "Whether or not the steps must be completed in order." }),
        orientation,
        size
    },
    slots: {
        content: LogicType.object({ item: StepperItem }),
        description: LogicType.object({ item: StepperItem }),
        indicator: LogicType.object({ item: StepperItem }),
        title: LogicType.object({ item: StepperItem })
    }
} satisfies TComponent;

export default stepper;
export const StepperProps = LogicUtil.partial(LogicType.object(stepper.properties));
