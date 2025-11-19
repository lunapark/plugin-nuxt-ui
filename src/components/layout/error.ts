import { LogicType, type TComponent } from "@luna-park/plugin";
import Error from "@nuxt/ui/components/Error.vue";

import { ButtonProps } from "@/components/element/button.ts";

export default {
    component: Error,
    name: "Layout/Error",
    properties: {
        clear: LogicType.union([LogicType.boolean(), ButtonProps], { description: "Display a button to clear the error in the links slot." }),
        error: LogicType.object({
            message: LogicType.string(),
            statusCode: LogicType.number(),
            statusMessage: LogicType.string()
        }),
        redirect: LogicType.string({ description: "The URL to redirect to when the error is cleared." })
    },
    slots: {
        default: LogicType.void(),
        links: LogicType.void(),
        message: LogicType.void(),
        statusCode: LogicType.void(),
        statusMessage: LogicType.void()
    }
} satisfies TComponent;
