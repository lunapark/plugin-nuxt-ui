import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import AuthForm from "@nuxt/ui/components/AuthForm.vue";

import { ButtonProps } from "@/components/element/button.ts";
import { SeparatorProps } from "@/components/element/separator.ts";

const AuthFormField = LogicUtil.partial(LogicType.object({
    label: LogicType.string(),
    name: LogicType.string(),
    placeholder: LogicType.string(),
    type: LogicType.string(),
    value: LogicType.string()
})); // TODO: Add real field types

const authForm = {
    component: AuthForm,
    emits: {
        submit: LogicType.function(LogicType.object({ payload: LogicType.unknown() }), LogicType.void())
    },
    name: "Page/AuthForm",
    properties: {
        description: LogicType.string(),
        disabled: LogicType.boolean(),
        fields: LogicType.array(AuthFormField),
        icon: LogicType.string({ description: "The icon displayed above the title." }),
        loading: LogicType.boolean(),
        providers: LogicType.array(ButtonProps, { description: "Display a list of Button under the description." }),
        schema: LogicType.unknown(),
        separator: LogicType.union([LogicType.string(), SeparatorProps], { description: "The text displayed in the separator." }),
        submit: ButtonProps,
        title: LogicType.string()
    },
    slots: {
        description: LogicType.void(),
        footer: LogicType.void(),
        header: LogicType.void(),
        leading: LogicType.void(),
        providers: LogicType.void(),
        submit: LogicType.void(),
        title: LogicType.void(),
        validation: LogicType.void()
    }
} satisfies TComponent;

export default authForm;
export const AuthFormProps = LogicUtil.partial(LogicType.object(authForm.properties));
