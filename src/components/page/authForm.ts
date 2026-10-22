import type { TComponent } from "@luna-park/plugin";
import { LogicType, LogicUtil } from "@luna-park/plugin";
import AuthForm from "@nuxt/ui/components/AuthForm.vue";

import { ButtonProps } from "@/components/element/button.ts";
import { SeparatorProps } from "@/components/element/separator.ts";
import { SelectItem } from "@/components/form/select.ts";
import { iconType } from "@/lib/icon.ts";
import { AcceptableValues } from "@/lib/value.ts";
import { color, size, variant } from "@/lib/variants.ts";

const AuthFormField = LogicUtil.partial(LogicType.object({
    autocomplete: LogicType.string(),
    color,
    defaultValue: AcceptableValues,
    description: LogicType.string(),
    disabled: LogicType.boolean(),
    help: LogicType.string(),
    hint: LogicType.string(),
    icon: iconType(),
    items: LogicType.array(SelectItem, { description: "The items of the select when `type` is `select`." }),
    label: LogicType.string(),
    length: LogicType.number({ description: "Number of inputs when `type` is `otp`." }),
    name: LogicType.string(),
    placeholder: LogicType.string(),
    required: LogicType.boolean(),
    size,
    type: LogicType.string({ default: "text", enum: ["text", "email", "password", "number", "tel", "url", "checkbox", "select", "otp"] }),
    variant
}));

const authForm = {
    build: {
        name: "UAuthForm"
    },
    component: AuthForm,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/auth-form"
    },
    emits: {
        submit: LogicType.object({ payload: LogicType.unknown() })
    },
    name: "Page/AuthForm",
    properties: {
        description: LogicType.string(),
        disabled: LogicType.boolean(),
        fields: LogicType.array(AuthFormField),
        icon: iconType({ description: "The icon displayed above the title." }),
        loading: LogicType.boolean(),
        loadingAuto: LogicType.boolean({ description: "When `true`, the submit button will display a loading state while the `submit` event is pending." }),
        providers: LogicType.array(ButtonProps, { description: "Display a list of Button under the description." }),
        schema: LogicType.unknown(),
        separator: LogicType.union([LogicType.string(), SeparatorProps], { description: "The text displayed in the separator." }),
        submit: ButtonProps,
        title: LogicType.string(),
        validateOn: LogicType.array(LogicType.string({ enum: ["blur", "change", "input"] }), { description: "The list of input events that trigger the form validation." }),
        validateOnInputDelay: LogicType.number({ default: 300, description: "Delay in milliseconds before validating the form on input events." })
    },
    slots: {
        description: LogicType.void(),
        footer: LogicType.void(),
        header: LogicType.void(),
        leading: LogicType.void(),
        providers: LogicType.void(),
        submit: LogicType.object({ loading: LogicType.boolean() }),
        title: LogicType.void(),
        validation: LogicType.void()
    }
} satisfies TComponent;

export default authForm;
export const AuthFormProps = LogicUtil.partial(LogicType.object(authForm.properties));
